import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-80 h-80 rounded-full blur-[120px] opacity-30 bg-cyan-400 transition-transform duration-100"
      style={{
        transform: `translate(${pos.x - 160}px, ${pos.y - 160}px)`,
      }}
    />
  );
}

export default CursorGlow;