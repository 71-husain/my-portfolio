import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://my-portfolio-xh3z.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
      setShake(false);
    } else {
      setStatus("❌ Error sending message. Try again!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col space-y-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Name Field */}
          <motion.div 
            className="relative"
            whileFocus={{ scale: 1.05 }}
          >
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div 
            className="relative"
            whileFocus={{ scale: 1.05 }}
          >
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
              required
            />
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="relative"
            whileFocus={{ scale: 1.05 }}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full h-20 p-3 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
              required
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-all shadow-md"
            whileTap={{ scale: 0.95 }}
            animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
          >
            Send Message 🚀
          </motion.button>

          {/* Status Message */}
          {status && <p className="text-center mt-2 text-sm text-green-400">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
