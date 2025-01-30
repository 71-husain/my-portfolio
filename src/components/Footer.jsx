import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-8 text-center"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Branding */}
        <h2 className="text-xl font-bold text-white mb-4">
          © 2025 Husain Ansari | All Rights Reserved
        </h2>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/71-husainAnsari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all text-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/husain-ansari-7530572bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all text-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all text-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
