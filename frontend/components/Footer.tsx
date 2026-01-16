import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-row justify-between items-start md:items-end gap-8">
          <div className="w-full md:w-auto">
            <h2 className="font-nav text-sm font-bold text-white mb-4">CURVE LABS</h2>
            <div className="flex flex-col gap-2 font-nav text-xs text-zinc-500">
              <span className="w-full">c/o Factory Works GmbH</span>
              <span className="w-full">Rheinsberger Str. 76/77</span>
              <span className="w-full">10115 Berlin</span>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col items-end gap-2">
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-6 mb-4 text-right">
              <a href="https://x.com/curvelabs" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">Twitter</a>
              <a href="https://www.linkedin.com/company/curve-labs/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">LinkedIn</a>
              <a href="https://github.com/Curve-Labs" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">GitHub</a>
              <a href="https://blog.curvelabs.eu/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-nav">Medium</a>
            </div>
            <span className="hidden md:block font-nav text-xs text-zinc-600">
              © 2020 CL Cybernetix GmbH.
            </span>
          </div>
        </div>

        {/* Copyright - show at bottom on mobile, hidden on desktop */}
        <div className="md:hidden text-center mt-8">
          <span className="font-nav text-xs text-zinc-600">
            © 2020 CL Cybernetix GmbH.
          </span>
        </div>
      </div>
    </footer>
  );
};
