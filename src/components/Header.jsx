import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <header  className="bg-transparent fixed top-0 left-0 w-full z-50 shadow-lg">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-6 py-4">
          <h1 className="text-white text-3xl font-bold">Husain Ansari</h1>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#hero"
                className="text-white text-lg hover:text-xl hover:text-orange-400 hover:underline hover:underline-offset-4 hover:decoration-orange-400 transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-lg hover:text-xl hover:text-orange-400 hover:underline hover:underline-offset-4 hover:decoration-orange-400 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white text-lg hover:text-xl hover:text-orange-400 hover:underline hover:underline-offset-4 hover:decoration-orange-400 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-white text-lg hover:text-xl hover:text-orange-400 hover:underline hover:underline-offset-4 hover:decoration-orange-400 transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg hover:text-xl hover:text-orange-400 hover:underline hover:underline-offset-4 hover:decoration-orange-600 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

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
