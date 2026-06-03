import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Toast from "./Toast";
import Logo from "./Logo";

function Contact() {
  const form = useRef();
  const [toast, setToast] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setToast({
            message: "Message sent successfully 🚀",
            type: "success",
          });

          form.current.reset();
        },
        () => {
          setToast({
            message: "Failed to send message ❌",
            type: "error",
          });
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Let’s build something amazing together 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

          {/* INFO */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center">

            <h3 className="text-2xl font-bold mb-6">
              Get in Touch
            </h3>

            <p className="text-slate-400 mb-6">
              I’m available for freelance work and full-time opportunities.
              Let’s discuss your project.
            </p>

            <div className="space-y-4 text-slate-300">

              <p>📧 vimalm0105@gmail.com</p>
              <p>📞 +91 8590664420</p>
              <p>📍 Kerala, India</p>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="mailto:vimalm0105@gmail.com"
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                Email
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                LinkedIn
              </a>

  <Logo />
            </div>

          </div>

        </div>

      </motion.div>

      {/* TOAST */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

    </section>
  );
}

export default Contact;