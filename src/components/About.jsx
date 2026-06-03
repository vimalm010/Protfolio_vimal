import { motion } from "framer-motion";
function About() {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20"
       initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}  // 🔥 IMPORTANT FIX
    >
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        <p className="text-slate-300 leading-8">
          Junior Web Developer and Computer Science graduate with hands-on
          experience in full-stack web development. I specialize in PHP
          CodeIgniter, MySQL databases, and responsive web design.
          I'm passionate about building scalable web applications and
          continuously improving my technical skills.
        </p>

        <p className="text-slate-400 mt-6 leading-8">
          AWS Certified Cloud Practitioner with experience in database
          integration, API development, and creating user-friendly
          web interfaces.
        </p>

      </div>
    </motion.section>
  );
}

export default About;