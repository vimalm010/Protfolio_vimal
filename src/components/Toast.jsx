import { useEffect } from "react";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-[9999] px-5 py-3 rounded-xl backdrop-blur-xl border shadow-lg transition-all
      ${
        type === "success"
          ? "bg-green-500/20 border-green-400 text-green-300"
          : "bg-red-500/20 border-red-400 text-red-300"
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;