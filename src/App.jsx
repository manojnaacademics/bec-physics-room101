import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans antialiased">
      <div className="text-center space-y-4 max-w-md w-full p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-sm">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-bold text-xl">
          🚀
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Welcome to the prototype
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Your React application is active and ready for testing.
        </p>
      </div>
    </main>
  );
}
