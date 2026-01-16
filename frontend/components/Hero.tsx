import React from 'react';
import { LiquidMetal } from '@paper-design/shaders-react';
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[157.5%] h-[157.5%] -z-10"
            style={{
              background: 'radial-gradient(circle at center, #0D0D0E 18%, rgba(13, 13, 14, 0) 100%)',
              filter: 'blur(50px)',
            }}
          />

          {/* "We Build" text */}
          <p
            className="font-stitch-warrior mb-0 md:mb-1 text-[60px] md:text-[89.54px] leading-none text-center"
            style={{
              color: '#FFFFFF66',
              fontWeight: 400,
              fontStyle: 'normal',
              wordSpacing: '-0.4em',
            }}
          >
            We Build
          </p>

          {/* "Digital Souls" ASCII art SVG with LiquidMetal effect */}
          <div className="w-[90vw] md:w-[75vw] max-w-[1300px] mt-4 mx-auto relative" style={{ aspectRatio: '1303.4 / 271.46' }}>
            {/* Fallback SVG that shows immediately */}
            <img
              src="/digital-souls.svg"
              alt="Digital Souls"
              className="absolute inset-0 w-full h-full"
            />
            {/* LiquidMetal effect on top */}
            <LiquidMetal
              speed={0.75}
              softness={1}
              repetition={1.98}
              shiftRed={0}
              shiftBlue={0}
              distortion={0.14}
              contour={1}
              scale={1}
              rotation={0}
              shape="diamond"
              angle={70}
              image="/digital-souls.svg"
              colorBack="#00000000"
              colorTint="#FFFFFF"
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Tagline - positioned at bottom */}
      <div className="absolute bottom-40 md:bottom-40 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <p
          className="text-zinc-400 font-mono uppercase animate-lamp text-[14px] md:text-[24.9px] leading-tight md:leading-none text-center px-4"
          style={{
            fontWeight: 400,
            fontStyle: 'normal',
          }}
        >
          Venture laboratory for relational technologies.
        </p>
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
