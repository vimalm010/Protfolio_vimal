import { motion } from "framer-motion";
import Logo from "./Logo";
function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/30 backdrop-blur-xl">

      {/* glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">
             <Logo />
            </h2>

            <p className="text-slate-400 leading-7">
              Full Stack Developer specialized in PHP, CodeIgniter, MySQL and modern web technologies.
              I build scalable and responsive web applications.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-cyan-400 transition">
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">
              Let’s Work Together
            </h3>

            <p className="text-slate-400">
              Open for freelance & full-time opportunities.
            </p>

            <div className="space-y-2 text-slate-300">
              <p>📧 vimalm0105@gmail.com</p>
              <p>📞 +91 8590664420</p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-4 px-5 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">

          <p>© 2026 Vimal M. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Built with React + Tailwind + Framer Motion ⚡
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;