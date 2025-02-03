import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Animation on Scroll */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/public/myphoto.jpg" // Replace with your profile image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content with Scroll Animation */}
        <motion.div
          className="flex-1 text-center md:text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Hi, I'm a <b>full-stack developer</b> passionate about creating interactive
            and scalable web applications. With expertise in <b> React,JavaScript, Node.js, and
            Tailwind CSS </b>, I focus on delivering modern and efficient solutions.
          </p>
          <p className="mt-4 text-gray-400">
            I enjoy <b>building projects</b>, learning new technologies, and
            collaborating with developers worldwide. Let's create something awesome! 
          </p>
           <p>
            Now I am working on Social Media Application based on full Stack Next.js Project
           </p>

          <motion.a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
