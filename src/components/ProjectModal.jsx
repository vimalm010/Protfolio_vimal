function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4">

      <div className="bg-[#0f172a] border border-white/10 rounded-2xl max-w-xl w-full p-6">

        <h2 className="text-2xl text-cyan-400 mb-2">
          {project.title}
        </h2>

        <p className="text-slate-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-cyan-500 text-black rounded-lg"
        >
          Close
        </button>
      </div>

    </div>
  );
}

export default ProjectModal;