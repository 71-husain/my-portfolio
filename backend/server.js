const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Nodemailer Setup
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email, // User's email
        to: process.env.RECEIVER_EMAIL, // Your email
        subject: `New Contact from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error sending message. Try again later!" });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));