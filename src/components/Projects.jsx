import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Find Place*/}
          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/public/find-place.png"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Find Place</h3>
              <p className="text-sm text-gray-400 mb-4">
                This is major project based on backend(server-side) that I design to implement my backend knowledge. this project is quite inspired from airbnb.com and include functionality like that.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:bg-blue-600 hover:text-white p-2 rounded-lg border-2 border-blue-900 outline-blue-900 transition duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* Weather App*/}
          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://s3.envato.com/files/145298956/Preview%20Image%20Set/04_screen1.jpg"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Weather App</h3>
              <p className="text-sm text-gray-400 mb-4">
                This is Weather Application website that show weather of diffrent cities in the World.
              </p>
              <a
                href="https://71-husainansari.github.io/weatherApp/"
                className="text-indigo-500 hover:bg-blue-600 hover:text-white p-2 rounded-lg border-2 border-blue-900 outline-blue-900 transition duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://www.codewithrandom.com/wp-content/uploads/2022/11/codewithrandom49-1024x536.png"
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tic-Tac_Toe</h3>
              <p className="text-sm text-gray-400 mb-4">
                A Tic-Tac-Toe game Using HTML , CSS , JavaScripts.
              </p>
              <a
                href="https://71-husain.github.io/Tic-Tac-Toe-Game/"
                className="text-indigo-500 hover:bg-blue-600 hover:text-white p-2 rounded-lg border-2 border-blue-900 outline-blue-900  transition duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
