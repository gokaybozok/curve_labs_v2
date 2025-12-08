import React from 'react';
import { Section } from './ui/Section';
import { Sparkles, FileText, ArrowUpRight } from 'lucide-react';
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
    <Section id="lace" className="bg-surface">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left: Product Intro */}
          <div className="p-8 lg:p-24 flex flex-col justify-between min-h-[600px] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #52525b 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-700 rounded-full bg-zinc-800/50 mb-8">
                <Sparkles className="w-3 h-3 text-zinc-300" />
                <span className="font-mono text-[10px] text-zinc-300 tracking-wider">PROPRIETARY TECH</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">LACE</h2>
              <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-md">
                Language Analysis & Contextual Engine. 
                <br /><br />
                Most KM solutions are just search bars. LACE is a digestive system for your data. It ingests unstructured noise and outputs structured, generative ontologies.
              </p>
            </div>

            <div className="relative z-10 mt-12">
               <button className="flex items-center gap-3 text-sm font-mono text-white hover:text-zinc-300 transition-colors border-b border-white hover:border-zinc-300 pb-1">
                 REQUEST DEMO ACCESS <ArrowUpRight className="w-4 h-4" />
               </button>
            </div>
          </div>

          {/* Right: Articles / Terminal View */}
          <div className="border-t lg:border-t-0 lg:border-l border-border bg-background p-8 lg:p-12 flex flex-col">
            <h3 className="font-mono text-xs text-zinc-500 mb-8 uppercase tracking-widest border-b border-border pb-4 w-full">
              [LACE] Research & Logs
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
    </Section>
  );
};

