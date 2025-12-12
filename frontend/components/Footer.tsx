import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="font-mono text-sm font-bold text-white mb-4">CURVE LABS</h2>
          <div className="flex flex-col gap-2 font-mono text-xs text-zinc-500">
            <span>c/o Factory Works GmbH</span>
            <span>Rheinsberger Str. 76/77</span>
            <span>10115 Berlin</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
           <div className="flex gap-6 mb-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">GitHub</a>
           </div>
           <span className="font-mono text-xs text-zinc-600">
             © {new Date().getFullYear()} CL Cybernetix GmbH. ALL SYSTEMS NOMINAL.
           </span>
        </div>
      </div>
    </footer>
  );
};
