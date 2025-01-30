import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPassport } from "react-icons/si";
import { FaGitAlt, FaGithub} from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Version Control (Git)", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Passport.js", icon: <SiPassport className="text-gray-300" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-500" /> },

  { name: "MongoDB", icon: <SiMongodb className="text-blue-700" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading Animation */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition-all"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
