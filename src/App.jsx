import { useEffect, useState } from "react";
import CanvasFavicon from "./components/CanvasFavicon";
import useSound from "./hooks/useSound";

import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Particles from "./components/Particles";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import Loader from "./components/Loader";
import EnterParticles from "./components/EnterParticles";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  // 🔊 click sound
  const clickSound = useSound("/sounds/click.mp3", 0.3);

  useEffect(() => {
    const handleClick = () => {
      clickSound();
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [clickSound]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#050816] dark:text-white transition-colors duration-500">

      <Background />
      <Particles />
      <CursorGlow />
      <ScrollProgress />
      <EnterParticles />
      <CanvasFavicon />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
