function Background() {
  return (
      <>
      <div className="fixed inset-0 -z-50 bg-[#050816] pointer-events-none" />

      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px] opacity-20 -z-40 pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20 -z-40 pointer-events-none" />
    </>
  );
}

export default Background;