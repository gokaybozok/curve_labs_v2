import React from 'react';
import { Section } from './ui/Section';
import { FileText } from 'lucide-react';
import laceStar from '../public/lace-star.svg';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: 'lace-wp-1',
    title: 'From Entropy to Ontology',
    date: '2024-03-12',
    excerpt: 'How LACE decomposes unstructured PDF and Slack dumps into queryable graph nodes without human annotation.',
    tags: ['Graph Theory', 'RAG']
  },
  {
    id: 'lace-wp-2',
    title: 'Generative Taxonomy',
    date: '2024-04-05',
    excerpt: 'Using recursive LLM calls to self-heal knowledge bases when new conflicting information is ingested.',
    tags: ['Self-Correction', 'Taxonomy']
  }
];

export const Lace: React.FC = () => {
  return (
    <Section id="lace" className="bg-black pb-48 overflow-hidden">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left: Product Intro */}
          <div className="p-0 lg:p-24 flex flex-col justify-between min-h-[600px] relative overflow-hidden">
            {/* Background image only on the left column */}
            <div 
              className="absolute inset-0 bg-center bg-cover opacity-70"
              style={{ backgroundImage: 'url(/lace-bg.png)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/8 to-transparent"></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #52525b 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 mt-8 md:mt-10 flex items-center gap-4">
                <img src={laceStar} alt="" className="w-12 h-12 md:w-16 md:h-16" />
                LACE
              </h2>
              <p className="text-xl text-white font-light leading-relaxed max-w-2xl">
                From static archives to evolutive cognitive systems.
                <br /><br />
                Capture fragments. Watch patterns emerge. Inhabit your own knowledge.
              </p>
            </div>

            <div className="relative z-10 mt-12">
              <button className="flex items-center gap-3 text-base md:text-lg font-mono text-white hover:text-zinc-300 transition-colors border-b border-white hover:border-zinc-300 pb-1">
                EXPLORE LACE →
              </button>
            </div>
          </div>

          {/* Right: Articles / Terminal View */}
          <div className="border-t lg:border-t-0 lg:border-l border-border bg-black p-8 lg:p-12 flex flex-col relative overflow-hidden">
            {/* Black stripe on the right edge and beyond gutter */}
            <div className="absolute top-0 right-0 bottom-0 w-10 bg-black"></div>
            <div className="absolute top-0 left-full bottom-0 w-screen bg-black"></div>
            <h3 className="font-mono text-xs text-zinc-500 mb-8 uppercase tracking-widest border-b border-border pb-4 w-full">
              [02] Lace Research & Logs
            </h3>
            
            <div className="space-y-6 flex-1">
              {articles.map((article) => (
                <div key={article.id} className="group relative border border-border p-6 hover:border-zinc-600 transition-colors bg-surface/30">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      {article.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-800 text-zinc-400 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-zinc-600">{article.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 group-hover:underline decoration-zinc-600 underline-offset-4">
                    {article.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-mono">
                    {article.excerpt}
                  </p>
                  
                  <FileText className="absolute bottom-6 right-6 w-4 h-4 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
              ))}
              
              <div className="border border-dashed border-zinc-800 p-6 flex items-center justify-center text-zinc-600 font-mono text-xs">
                // MORE ENTRIES LOADING...
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fade out into background (hide global grid below) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />
    </Section>
  );
};
