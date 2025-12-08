import React from 'react';
import { Section } from './ui/Section';
import { Database, Search, Bot, Network, ShieldCheck, Workflow } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'ekm',
    title: 'Enterprise KM',
    description: 'Scalable systems designed to ingest, process, and retrieve corporate knowledge with semantic precision.',
    icon: <Database className="w-6 h-6" />
  },
  {
    id: 'audit',
    title: 'AI System Audits',
    description: 'Rigorous evaluation of existing AI deployments for hallucination rates, security vulnerabilities, and ontological drift.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'agentic',
    title: 'Agentic Infrastructure',
    description: 'Custom-built autonomous agents capable of executing complex workflows across your software stack.',
    icon: <Bot className="w-6 h-6" />
  },
  {
    id: 'ontology',
    title: 'Ontology Design',
    description: 'Mapping unstructured data lakes into rigorous graph structures for deterministic AI reasoning.',
    icon: <Network className="w-6 h-6" />
  }
];

export const Offerings: React.FC = () => {
  return (
    <Section id="offerings" className="bg-background">
      <div className="max-w-[1600px] mx-auto">
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
                  group p-8 lg:p-12 border-b border-border 
                  ${idx % 2 === 0 ? 'md:border-r' : ''} 
                  hover:bg-zinc-900/50 transition-colors duration-300
                `}
              >
                <div className="mb-6 text-zinc-500 group-hover:text-white transition-colors">
                  {service.icon}
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

