import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 mb-4 font-semibold">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Vimal M
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-6 font-semibold text-slate-300">
            <Typewriter
              words={[
                "Full Stack Developer",
                "PHP Developer",
                "CodeIgniter Developer",
                "Frontend Developer",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-slate-400 mt-8 leading-8 max-w-2xl">
            Junior Web Developer and Computer Science graduate with hands-on
            experience in full-stack web development. Specialized in PHP,
            CodeIgniter, MySQL, JavaScript, Bootstrap, jQuery, REST APIs and
            responsive web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View CV
            </a>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              "PHP",
              "CodeIgniter",
              "MySQL",
              "JavaScript",
              "Bootstrap",
              "Python",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-cyan-400">1+</h3>
                  <p className="text-slate-400 mt-2">Years Experience</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-cyan-400">2+</h3>
                  <p className="text-slate-400 mt-2">Projects</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-cyan-400">AWS</h3>
                  <p className="text-slate-400 mt-2">Certified</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
                  <p className="text-slate-400 mt-2">Dedication</p>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;