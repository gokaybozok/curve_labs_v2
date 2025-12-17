import React from 'react';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-background">
      <div className="max-w-[1600px] mx-auto border-x border-border">
        <div className="p-8 lg:p-12 border-b border-border">
          <h2 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">[03] About</h2>
        </div>

        <div className="p-8 lg:p-24 min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-10">
              About
            </h3>
            <p className="text-zinc-300 text-lg md:text-2xl leading-relaxed font-light">
              We build digital souls—systems that persist, learn, and evolve. From coordination infrastructure for collectives to cognitive
              architectures for human / ai collaboration, our work focuses on what holds intelligence together across complexity and change.
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-mono mt-10">
              Founded in Berlin, 2020. Practitioners who research. Researchers who build.
            </p>
          </div>

          {/* Right: Code art */}
          <div className="w-full">
            <div className="border border-border bg-surface/30 p-6 lg:p-8">
              <pre className="font-mono text-[11px] md:text-xs leading-relaxed text-zinc-200 whitespace-pre-wrap">
{`      psyche ──────╮
        │          │
        │   lace   │    →  patterns
        │          │
      polis ───────╯

  fragments[]  →  meaning  →  memory
  signals()    →  context  →  coherence`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

