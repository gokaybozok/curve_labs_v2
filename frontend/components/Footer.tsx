import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="font-nav text-sm font-bold text-white mb-4">CURVE LABS</h2>
          <div className="flex flex-col gap-2 font-nav text-xs text-zinc-500">
            <span>c/o Factory Works GmbH</span>
            <span>Rheinsberger Str. 76/77</span>
            <span>10115 Berlin</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-6 mb-4">
            <a href="https://x.com/curvelabs" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">Twitter</a>
            <a href="https://www.linkedin.com/company/curve-labs/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">LinkedIn</a>
            <a href="https://github.com/Curve-Labs" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">GitHub</a>
            <a href="https://blog.curvelabs.eu/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">Medium</a>
          </div>
          <span className="font-nav text-xs text-zinc-600">
            © {new Date().getFullYear()} CL Cybernetix GmbH.
          </span>
        </div>
      </div>
    </footer>
  );
};
