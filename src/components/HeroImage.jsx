import { useEffect, useRef } from "react";

function HeroImage() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;

      if (imgRef.current) {
        imgRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center items-center perspective-1000">
      <div
        ref={imgRef}
        className="transition-transform duration-200 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative">
          {/* glow */}
          <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full scale-110"></div>

          {/* image card */}
          <div className="relative w-[280px] md:w-[350px] h-[350px] md:h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
            
            <img
              src="/profile.png"
              alt="Vimal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;