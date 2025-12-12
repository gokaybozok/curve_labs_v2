import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Offerings } from './components/Offerings';
import { Lace } from './components/Lace';
import { Team } from './components/Team';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-zinc-100 flex flex-col relative overflow-x-hidden">
      {/* Base dark background */}
      <div className="fixed inset-0 bg-background z-0"></div>
      
      {/* Global decorative background grid */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)',
             backgroundSize: '120px 120px'
           }}>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Offerings />
          <Lace />
          <Team />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
