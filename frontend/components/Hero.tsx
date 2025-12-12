import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto px-6 py-24 pb-32">
      <div className="absolute top-0 left-6 border-l border-border h-24"></div>
      
      <div className="mb-8 font-mono text-xs text-zinc-500 tracking-widest uppercase">
        // EST. 2025 -- R&D DIVISION
      </div>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mb-12">
        We Architect<br />
        <span className="text-zinc-500">Knowledge.</span>
      </h1>

      <p className="max-w-2xl text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
        Building the agentic infrastructure for the next generation of enterprise intelligence. From unstructured chaos to generative ontologies.
      </p>

      <div className="mt-16 flex gap-4">
        <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-medium text-black bg-white hover:bg-zinc-200 transition-all">
          <span>INITIATE CONTACT</span>
          <div className="absolute inset-0 border border-white group-hover:translate-x-1 group-hover:translate-y-1 transition-transform pointer-events-none mix-blend-difference"></div>
        </a>
      </div>
      
    </div>
  );
};
