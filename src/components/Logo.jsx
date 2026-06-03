import { Link } from "react-scroll";

function Logo() {
  return (
    <Link to="home" smooth={true} duration={500}>
      <div className="flex items-center gap-3 cursor-pointer group">

        {/* ICON */}
        <div className="relative w-10 h-10">

          <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-30 rounded-xl group-hover:opacity-60 transition" />

          <div className="relative w-full h-full flex items-center justify-center bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl">
            <span className="text-cyan-400 font-bold">VM</span>
          </div>

        </div>

        {/* TEXT */}
        <div className="leading-tight">
          <h1 className="text-lg font-bold text-white">
            Vimal <span className="text-cyan-400">M</span>
          </h1>
          <p className="text-[10px] text-slate-400 tracking-widest">
            FULL STACK DEVELOPER
          </p>
        </div>

      </div>
    </Link>
  );
}

export default Logo;