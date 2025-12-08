import React from 'react';
import { Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-white" />
          <span className="font-mono text-sm font-bold tracking-tight uppercase">Cybernetics Lab</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="#offerings" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors">[S] SERVICES</a>
          <a href="#lace" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors">[L] LACE</a>
          <a href="#team" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors">[T] TEAM</a>
        </div>

        <div className="font-mono text-xs text-zinc-600 hidden sm:block">
          SYS.STATUS: ONLINE
        </div>
      </div>
    </nav>
  );
};

