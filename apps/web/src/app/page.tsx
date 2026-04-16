export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[calc(100vh-4rem)] relative overflow-hidden">
      
      {/* Decorative gradient blur background elements */}
      <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[30rem] h-[30rem] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="z-10 text-center max-w-3xl bg-white/40 dark:bg-black/40 backdrop-blur-2xl p-12 sm:p-16 rounded-[2.5rem] border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold mb-8 border border-indigo-100 dark:border-indigo-900 shadow-sm text-sm tracking-wide">
          v1.0.0 is live
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white leading-[1.1]">
          Manage your store <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            like never before
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          Your modern beautiful shopify dashboard is ready. Beautiful, dynamic, and fully responsive across all your devices.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 text-lg flex items-center gap-2 mx-auto cursor-pointer">
          Get Started Now
          <svg className="w-5 h-5 ml-1 relative top-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </button>
      </div>
      
    </div>
  );
}
