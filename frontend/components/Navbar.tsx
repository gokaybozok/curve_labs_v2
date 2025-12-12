import React from 'react';
import curveLogo from '../public/curve-labs-logo.png';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={curveLogo} alt="Curve Labs" className="h-8 w-auto" />
          <span className="font-mono text-base font-bold tracking-[0.1em] uppercase">Curve Labs</span>
        </div>
        
        <div className="hidden md:flex gap-10">
          <a href="#offerings" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors">[S] SERVICES</a>
          <a href="#lace" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors">[L] LACE</a>
          <a href="#team" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors">[T] TEAM</a>
        </div>

        <div className="font-mono text-sm text-zinc-600 hidden sm:block">
          SYS.STATUS: ONLINE
        </div>
      </div>
    </nav>
  );
};

