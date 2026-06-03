import { useRef } from "react";

function useSound(src, volume = 1) {
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;
  }

  const play = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((err) => {
      console.log("Sound blocked:", err);
    });
  };

  return play;
}

export default useSound;