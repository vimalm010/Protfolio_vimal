import Particles from "@tsparticles/react";
import { useEffect } from "react";

function EnterParticles() {
  useEffect(() => {
    // auto stop after 2 sec (burst effect)
    const timer = setTimeout(() => {}, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: false,
        particles: {
          number: { value: 60 },
          color: { value: "#38bdf8" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 5,
            outModes: "out",
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 z-[999] pointer-events-none"
    />
  );
}

export default EnterParticles;