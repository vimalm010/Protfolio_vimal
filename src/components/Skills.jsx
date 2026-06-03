import { motion } from "framer-motion";

const skills = [
  { name: "PHP", level: 90 },
  { name: "CodeIgniter", level: 88 },
  { name: "MySQL", level: 85 },
  { name: "JavaScript", level: 82 },
  { name: "Bootstrap", level: 85 },
  { name: "jQuery", level: 80 },
  { name: "REST APIs", level: 78 },
  { name: "Python", level: 70 },
];

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Skills
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 transition-all"
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>

                <span className="text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />

              </div>
            </motion.div>
          ))}

        </div>

        {/* Extra skill badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">

          {[
            "HTML5",
            "CSS3",
            "AJAX",
            "JSON",
            "MVC",
            "Git",
            "GitHub",
            "VS Code",
            "AWS",
            "Responsive Design",
          ].map((item) => (
            <span
              key={item}
              className="px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-400 transition"
            >
              {item}
            </span>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default Skills;