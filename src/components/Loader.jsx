import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

function Loader({ onFinish }) {
  const [exit, setExit] = useState(false);
  const [text, setText] = useState("");

  const fullText = "Full Stack Developer • PHP • CodeIgniter • React";

  // TYPEWRITER
  useEffect(() => {
    let i = 0;

    const type = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(type);
    }, 50);

    return () => clearInterval(type);
  }, []);

  // EXIT
  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);

      setTimeout(() => {
        onFinish();
      }, 900);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-black overflow-hidden transition-all duration-700 ${
        exit ? "opacity-0 scale-110 blur-2xl" : "opacity-100"
      }`}
    >
      {/* glow background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500 blur-[180px] opacity-20 rounded-full animate-pulse" />

      {/* CONTENT */}
      <div className="text-center z-10 flex flex-col items-center">

        {/* LOGO */}
        <AnimatedLogo />

        {/* BRAND NAME */}
        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          <span className="text-white">Vimal</span>
          <span className="text-cyan-400"> M</span>
        </h1>

        {/* TYPEWRITER */}
        <p className="mt-5 text-slate-300 text-sm md:text-lg h-6">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* LOADING BAR */}
        <div className="mt-8 w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div className="h-full w-full bg-cyan-400 animate-[loading_2.8s_linear]" />
        </div>

      </div>

      {/* loading animation */}
      <style>
        {`
          @keyframes loading {
            from { transform: translateX(-100%); }
            to { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;