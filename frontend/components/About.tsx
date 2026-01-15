import React from 'react';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-background">
      <div className="max-w-[1600px] mx-auto border-x border-border">
        <div className="p-8 lg:p-12 border-b border-border">
          <h2 className="font-nav text-xs text-zinc-500 uppercase tracking-widest">[03] About</h2>
        </div>

        <div className="p-8 lg:p-24 min-h-[70vh] flex items-center justify-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-3xl font-header font-bold tracking-tight text-white mb-10 text-center">
              About
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-body-text text-center">
              We build digital souls—systems that persist, learn, and evolve. From coordination infrastructure for collectives to cognitive
              architectures for human / ai collaboration, our work focuses on what holds intelligence together across complexity and change.
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-body-text mt-10 text-center">
              Founded in Berlin, 2020. Practitioners who research. Researchers who build.
            </p>
          </div>
        </div>
      </div>
    </Section >
  );
};

