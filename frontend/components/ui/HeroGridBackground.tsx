import React from 'react';

export const HeroGridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-zinc-950">
      {/* Bottom fade-to-black gradient for smooth scroll transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #09090b)' }}
      />
    </div>
  );
};
