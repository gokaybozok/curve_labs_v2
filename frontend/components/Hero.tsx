import React from 'react';
import { HeroGridBackground } from './ui/HeroGridBackground';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated hero-only grid background */}
      <HeroGridBackground />

      <div className="relative z-10 flex flex-col justify-center max-w-[1600px] mx-auto px-6 pt-40 md:pt-44 lg:pt-48 pb-28 pointer-events-none">
        <div className="absolute top-0 left-6 border-l border-border h-24"></div>
      <style>{`
        @keyframes soulGlow {
          0%, 100% {
            text-shadow:
              0 0 18px rgba(226, 232, 240, 0.12),
              0 0 48px rgba(148, 163, 184, 0.10),
              0 0 96px rgba(99, 102, 241, 0.06);
          }
          50% {
            text-shadow:
              0 0 26px rgba(226, 232, 240, 0.18),
              0 0 64px rgba(148, 163, 184, 0.14),
              0 0 128px rgba(99, 102, 241, 0.08);
          }
        }

        @keyframes soulGlowStrong {
          0%, 100% {
            text-shadow:
              0 0 22px rgba(226, 232, 240, 0.14),
              0 0 58px rgba(148, 163, 184, 0.12),
              0 0 112px rgba(99, 102, 241, 0.07);
          }
          50% {
            text-shadow:
              0 0 32px rgba(226, 232, 240, 0.20),
              0 0 76px rgba(148, 163, 184, 0.16),
              0 0 148px rgba(99, 102, 241, 0.09);
          }
        }
      `}</style>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
        <span className="text-zinc-500">We build</span>
        <br />
        <span className="text-zinc-100">
          <span
            style={{
              animation: 'soulGlow 7.5s ease-in-out infinite',
            }}
          >
            digital{' '}
          </span>
          <span
            style={{
              animation: 'soulGlowStrong 7.5s ease-in-out infinite',
            }}
          >
            souls.
          </span>
        </span>
      </h1>

      <p className="max-w-2xl text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed font-serif italic">
        Venture laboratory for relational technologies.
      </p>

      </div>
    </section>
  );
};
