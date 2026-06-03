import { motion } from "framer-motion";
function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}  // 🔥 IMPORTANT FIX
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-12">
        Experience
      </h2>

      <div className="relative border-l border-cyan-500/40 ml-4">

        <div className="mb-12 ml-8">
          <span className="absolute -left-2 w-4 h-4 bg-cyan-400 rounded-full"></span>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">
              Full Stack Developer
            </h3>

            <p className="text-cyan-400">
              TriReki Software Solutions
            </p>

            <p className="text-slate-400 mb-4">
              Sep 2025 - Mar 2026
            </p>

            <ul className="space-y-2 text-slate-300">
              <li>Developed and maintained dynamic web applications using PHP, CodeIgniter 3, MySQL, HTML, CSS, JavaScript, Bootstrap, and jQuery.</li>

              <li>Improved application stability through testing, debugging, and optimization.</li>

              <li>Enhanced data handling with AJAX, JSON processing, and MySQL integration.</li>

              <li>Integrated REST APIs and third-party services.</li>

              <li>Delivered responsive cross-device web interfaces.</li>
            </ul>
          </div>
        </div>

        <div className="ml-8">
          <span className="absolute -left-2 w-4 h-4 bg-cyan-400 rounded-full"></span>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">
              Web Development Intern
            </h3>

            <p className="text-cyan-400">
              TriReki Software Solutions
            </p>

            <p className="text-slate-400 mb-4">
              Previous
            </p>

            <ul className="space-y-2 text-slate-300">
              <li>Developed dynamic web pages using PHP, CodeIgniter 3, MySQL, HTML, CSS and JavaScript.</li>

              <li>Created MySQL-integrated modules following MVC Architecture.</li>

              <li>Implemented Bootstrap, jQuery, AJAX and JSON enhancements.</li>
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default Experience;