import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Offerings } from './components/Offerings';
import { Lace } from './components/Lace';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col relative overflow-x-hidden">
      {/* Global decorative background grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" 
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
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

