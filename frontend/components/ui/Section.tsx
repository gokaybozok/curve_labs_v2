import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  noBorderBottom?: boolean;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', noBorderBottom = false, id }) => {
  return (
    <section id={id} className={`relative border-t border-border ${noBorderBottom ? '' : 'border-b'} ${className}`}>
      {/* Corner Crosshairs */}
      <div className="absolute -top-1.5 -left-1.5 z-20 text-zinc-600 select-none pointer-events-none">+</div>
      <div className="absolute -top-1.5 -right-1.5 z-20 text-zinc-600 select-none pointer-events-none">+</div>
      {!noBorderBottom && (
        <>
          <div className="absolute -bottom-1.5 -left-1.5 z-20 text-zinc-600 select-none pointer-events-none">+</div>
          <div className="absolute -bottom-1.5 -right-1.5 z-20 text-zinc-600 select-none pointer-events-none">+</div>
        </>
      )}
      
      {children}
    </section>
  );
};

