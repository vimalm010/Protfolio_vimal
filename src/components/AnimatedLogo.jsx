import { useEffect, useState } from "react";

function AnimatedLogo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center">

      {/* wrapper animation */}
      <div
        className={`relative transition-all duration-1000 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >

        {/* glow */}
        <div className="absolute inset-0 w-24 h-24 bg-cyan-500 blur-[40px] opacity-30 rounded-full animate-pulse" />

        {/* SVG LOGO */}
        <svg width="90" height="90" viewBox="0 0 64 64">

          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* V shape with draw animation */}
          <path
            d="M18 20 L32 44 L46 20"
            stroke="url(#lg)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[draw_2s_ease-in-out_forwards]"
          />

          {/* center dot */}
          <circle cx="32" cy="36" r="3.5" fill="#22d3ee" />

        </svg>

      </div>

      {/* animation keyframes */}
      <style>
        {`
          @keyframes draw {
            0% {
              stroke-dasharray: 120;
              stroke-dashoffset: 120;
            }
            100% {
              stroke-dasharray: 120;
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>

    </div>
  );
}

export default AnimatedLogo;