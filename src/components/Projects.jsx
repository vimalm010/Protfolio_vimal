import { motion } from "framer-motion";

const projects = [
  {
    title: "Task Manager App",
    desc: "Full-featured task management system with authentication and CRUD operations.",
    tech: ["PHP", "CodeIgniter", "MySQL"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather application using external APIs with dynamic UI updates.",
    tech: ["JavaScript", "API", "AJAX"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Catalog",
    desc: "Product catalog with search, filter and cart system.",
    tech: ["PHP", "MySQL", "jQuery"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Projects
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Some of my real-world development work
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="relative group"
            >

              {/* glow border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>

              {/* card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full flex flex-col justify-between">

                <div>

                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* buttons */}
                <div className="flex gap-3 mt-auto">

                  <a
                    href={project.live}
                    className="flex-1 text-center px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                  >
                    Code
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}

export default Projects;