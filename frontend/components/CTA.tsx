import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';

export const CTA: React.FC = () => {
  return (
    <Section id="contact" className="bg-background">
      <div className="max-w-[1600px] mx-auto border-x border-border flex flex-col lg:flex-row min-h-[320px]">
        
        {/* Text side */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col gap-10 justify-center items-start text-left relative overflow-hidden">
          {/* Subtle dot grid backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          ></div>
          
          <div className="font-mono text-xs tracking-widest text-zinc-500 relative z-10">
            [05] CONTACT
          </div>

          <div className="relative z-10 space-y-4 w-full">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              The Lab is open.
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-mono">
              Get in touch.
            </p>
          </div>
        </div>

        {/* Arrow action side */}
        <a
          href="#contact"
          className="w-full lg:w-64 xl:w-80 border-t lg:border-t-0 lg:border-l border-border bg-background flex items-center justify-center cursor-pointer hover:bg-white hover:text-black text-white transition-all duration-300 group relative overflow-hidden"
        >
          <ArrowRight className="w-12 h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:translate-x-2" />
          <span className="absolute bottom-6 font-mono text-[10px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            START_SEQ
          </span>
        </a>
      </div>
    </Section>
  );
};
