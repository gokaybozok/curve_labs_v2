import React from 'react';
import { Section } from './ui/Section';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 'ekm',
    number: '01',
    title: 'Enterprise KM',
    description: 'Scalable systems designed to ingest, process, and retrieve corporate knowledge with semantic precision.',
  },
  {
    id: 'audit',
    number: '02',
    title: 'AI System Audits',
    description: 'Rigorous evaluation of existing AI deployments for hallucination rates, security vulnerabilities, and ontological drift.',
  },
  {
    id: 'agentic',
    number: '03',
    title: 'Agentic Infrastructure',
    description: 'Custom-built autonomous agents capable of executing complex workflows across your software stack.',
  },
  {
    id: 'ontology',
    number: '04',
    title: 'Ontology Design',
    description: 'Mapping unstructured data lakes into rigorous graph structures for deterministic AI reasoning.',
  }
];

export const Offerings: React.FC = () => {
  return (
    <Section id="offerings" className="bg-background border-t-0 pt-32">
      {/* Section grid overlay to keep the lattice visible across the offerings area */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)',
          backgroundSize: '120px 120px'
        }}
      ></div>

      {/* Decorative Grid Lines */}
      <div className="relative max-w-[1600px] mx-auto">
        <div className="absolute right-0 bottom-0 w-1/3 h-px bg-border"></div>
        <div className="absolute right-1/3 bottom-0 w-px h-32 bg-border"></div>
      </div>
      <div className="max-w-[1600px] mx-auto pb-48 border-t border-border relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          
          {/* Header Column */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border">
            <h2 className="font-mono text-xs text-zinc-500 mb-4 uppercase tracking-widest">[01] Offerings</h2>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">System<br/>Capabilities</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our interventions range from high-level architectural audits to the deployment of full-stack agentic workers.
            </p>
          </div>

          {/* Services Grid - Spanning 3 columns */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className={`
                  group p-8 lg:p-12 border-b border-border bg-background
                  ${idx % 2 === 0 ? 'md:border-r' : ''} 
                  hover:bg-zinc-900/50 transition-colors duration-300
                `}
              >
                <div className="mb-6 font-mono text-2xl text-zinc-500 group-hover:text-white transition-colors">
                  {service.number}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
};
