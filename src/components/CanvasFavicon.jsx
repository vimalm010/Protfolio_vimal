import { useEffect, useRef } from "react";

function CanvasFavicon() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    const link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);

    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, 64, 64);

      // background
      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, 64, 64);

      // glow gradient
      const gradient = ctx.createLinearGradient(0, 0, 64, 64);
      gradient.addColorStop(0, "#22d3ee");
      gradient.addColorStop(0.5, "#3b82f6");
      gradient.addColorStop(1, "#a855f7");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";

      // fake 3D rotation effect
      const offset = Math.sin(angle) * 4;

      ctx.beginPath();
      ctx.moveTo(18 + offset, 20);
      ctx.lineTo(32, 44);
      ctx.lineTo(46 - offset, 20);
      ctx.stroke();

      // glow dot
      ctx.fillStyle = "#22d3ee";
      ctx.beginPath();
      ctx.arc(32, 36, 2.5, 0, Math.PI * 2);
      ctx.fill();

      link.href = canvas.toDataURL("image/png");

      angle += 0.05;

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return null;
}

export default CanvasFavicon;   