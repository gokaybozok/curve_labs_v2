import React from 'react';
import { HeroGridBackground } from './ui/HeroGridBackground';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Grid background with scattered UI elements */}
      <HeroGridBackground />

      {/* Centered content overlay - positioned below navbar with explicit height for proper centering */}
      <div className="absolute top-20 left-0 right-0 h-[calc(100vh-80px)] z-10 flex items-center justify-center pointer-events-none">
        <div className="max-w-[1400px] px-8 flex flex-col items-center relative -mt-[280px]">
          {/* Radial gradient for readability */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10"
            style={{
              background: 'radial-gradient(circle at center, #09090b 0%, rgba(9, 9, 11, 0) 70%)',
              filter: 'blur(50px)',
            }}
          />

          {/* "We Build" text */}
          <p
            className="font-stitch-warrior mb-4 md:mb-6 text-[42px] md:text-[89.54px] leading-none text-center"
            style={{
              color: '#FFFFFF66',
              fontWeight: 400,
              fontStyle: 'normal',
              wordSpacing: '-0.4em',
            }}
          >
            We Build
          </p>

          {/* "Digital Souls" text */}
          <p
            className="font-stitch-warrior w-full text-[56px] md:text-[205.56px] leading-none text-center"
            style={{
              color: '#FFFFFF',
              fontWeight: 400,
              fontStyle: 'normal',
              wordSpacing: '-0.4em',
            }}
          >
            Digital Souls
          </p>

          {/* Tagline */}
          <p
            className="text-zinc-400 font-mono mt-6 md:mt-8 uppercase animate-lamp text-[14px] md:text-[24.9px] leading-tight md:leading-none text-center px-4"
            style={{
              fontWeight: 400,
              fontStyle: 'normal',
            }}
          >
            Venture laboratory for relational technologies.
          </p>
        </div>
      </div>

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(9, 9, 11, 0.4) 100%)',
        }}
      />
    </section>
  );
};
