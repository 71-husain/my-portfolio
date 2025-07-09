import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="z-50 bg-white/10 backdrop-blur-md fixed top-0 left-0 w-full shadow-lg">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-6 py-4">
          <h1 className="text-white text-3xl font-bold">Husain Ansari</h1>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6">
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-white text-lg hover:text-orange-400 hover:underline underline-offset-4 transition-all duration-200"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-900 text-white px-6 pb-4 space-y-4">
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block text-lg hover:text-orange-400 transition-all"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Keep your hero section the same */}
      <section
        id="hero"
        className="relative w-full h-screen bg-gray-900 flex items-center justify-center text-center text-white px-6 py-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-600 to-blue-400 opacity-60"
        ></motion.div>
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm Husain Ansari.
            <br />
            A Passionate Web Developer.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I create responsive and user-friendly websites.
          </motion.p>
          <motion.a
            href="#projects"
            className="bg-blue-500 text-white text-lg py-3 px-8 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            See My Work
          </motion.a>
        </div>
      </section>
    </>
  );
}
