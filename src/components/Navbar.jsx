import { useEffect, useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  const links = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  // 🔥 shrink + blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // detect active section
      links.forEach((link) => {
        const el = document.getElementById(link.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-black/40 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}
    >
      <div
        className={`max-w-6xl mx-auto px-6 flex justify-between items-center transition-all duration-300
        ${scrolled ? "py-3" : "py-5"}`}
      >

        {/* LOGO */}
        <div className="text-white font-bold text-xl">
          <Logo />
        
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative transition ${
                active === link.href
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}

              {/* active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
                ${active === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </button>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <a
          href="/resume.pdf"
           target="_blank"
          className="hidden md:block px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:scale-105 transition"
        >
          Resume
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 bg-black/70 backdrop-blur-xl border-t border-white/10">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-slate-300 hover:text-cyan-400 text-left"
            >
              {link.name}
            </button>
          ))}

          <a
            href="/resume.pdf"
            className="mt-2 px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;