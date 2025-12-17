import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* --- Content Variants (ported from your reference) --- */

const CodeSnippet: React.FC<{ seed: number }> = ({ seed }) => {
  const lines = useMemo(() => {
    const hex = ['0x4F', '0xA1', '0x00', '0xFF', '0xC2', '0x1B'];
    return [
      `SYS.INIT_(${seed % 99})`,
      `${hex[seed % 6]} ${hex[(seed + 1) % 6]} ${hex[(seed + 2) % 6]}`,
      'BUFFER_OVERFLOW',
      `MEM: ${(seed * 32) % 1024}MB`,
    ];
  }, [seed]);

  return (
    <div className="font-mono text-[9px] text-zinc-500 leading-tight tracking-tight">
      {lines.map((line, i) => (
        <div key={i} className={i === 0 ? 'text-zinc-200 font-bold mb-1' : ''}>
          {i > 0 && <span className="mr-1 opacity-50">{`>`}</span>}
          {line}
        </div>
      ))}
    </div>
  );
};

const Waveform: React.FC<{ seed: number }> = ({ seed }) => (
  <div className="flex items-end gap-[2px] h-6">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1 bg-zinc-300"
        initial={{ height: '20%' }}
        animate={{ height: ['20%', `${40 + (seed % 60)}%`, '20%'] }}
        transition={{
          duration: 1 + i * 0.1,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.1,
        }}
      />
    ))}
  </div>
);

const Geometric: React.FC<{ seed: number }> = ({ seed }) => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 stroke-zinc-300 stroke-[1px] fill-none opacity-80">
    <circle cx="20" cy="20" r="18" className="opacity-30 stroke-dashed" strokeDasharray="2 2" />
    <circle cx="20" cy="20" r={8 + (seed % 6)} />
    <line x1="20" y1="0" x2="20" y2="40" className="opacity-50" />
    <line x1="0" y1="20" x2="40" y2="20" className="opacity-50" />
    {seed % 2 === 0 && <rect x="15" y="15" width="10" height="10" className="opacity-40" />}
  </svg>
);

const GenerativeGlyph: React.FC<{ seed: number }> = ({ seed }) => {
  const r = (n: number) => {
    const x = Math.sin(seed * 12.9898 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  const hasCurve = r(1) > 0.3;
  const numBlocks = 2 + Math.floor(r(2) * 3);

  const blocks = Array.from({ length: numBlocks }).map((_, i) => {
    const isRect = r(i * 10) > 0.3;
    const size = 12 + r(i * 11) * 16;
    const x = 20 + r(i * 12) * 60;
    const y = 20 + r(i * 13) * 60;
    const isFilled = r(i * 14) > 0.4;
    return { type: isRect ? 'rect' : 'circle', x, y, size, isFilled };
  });

  const p1 = blocks[0];
  const p2 = blocks[1];
  const cp1x = 50 + (r(50) - 0.5) * 80;
  const cp1y = 50 + (r(51) - 0.5) * 80;

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-16 h-16 text-zinc-100"
      style={{ filter: 'drop-shadow(0px 0px 4px rgba(255,255,255,0.08))' }}
    >
      {hasCurve && (
        <path
          d={`M${p1.x},${p1.y} Q${cp1x},${cp1y} ${p2.x},${p2.y}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="opacity-80"
        />
      )}

      {blocks.map((b, i) => (
        <React.Fragment key={i}>
          {b.type === 'rect' ? (
            <rect
              x={b.x - b.size / 2}
              y={b.y - b.size / 2}
              width={b.size}
              height={b.size}
              fill={b.isFilled ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            />
          ) : (
            <circle
              cx={b.x}
              cy={b.y}
              r={b.size / 2}
              fill={b.isFilled ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            />
          )}

          {r(i + 100) > 0.5 && (
            <rect
              x={b.x + (r(i + 101) > 0.5 ? b.size : -b.size)}
              y={b.y}
              width={4}
              height={4}
              fill="currentColor"
            />
          )}
        </React.Fragment>
      ))}

      {r(99) > 0.7 && (
        <line
          x1={r(80) * 100}
          y1={r(81) * 100}
          x2={r(82) * 100}
          y2={r(83) * 100}
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-50"
        />
      )}
    </svg>
  );
};

/* --- Grid Cell --- */

const GridCell: React.FC<{ index: number }> = ({ index }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const variant = useMemo(() => index % 4, [index]);

  const handleMouseEnter = () => {
    setIsRevealed(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    const delay = 4000 + Math.random() * 5000;
    timeoutRef.current = window.setTimeout(() => setIsRevealed(false), delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full border border-border/40"
      style={{ perspective: '1000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default State: tiny marker */}
      <div className={`absolute top-0 right-0 p-1 transition-opacity duration-500 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-1 h-1 bg-zinc-800" />
      </div>

      {/* Flipping content */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-background border border-border"
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        variants={{
          hidden: { rotateY: 180, opacity: 0 },
          visible: {
            rotateY: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 180, damping: 24, mass: 1 },
          },
        }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className="relative z-10 p-2 flex items-center justify-center w-full h-full">
          {variant === 0 && <GenerativeGlyph seed={index} />}
          {variant === 1 && <CodeSnippet seed={index} />}
          {variant === 2 && <Waveform seed={index} />}
          {variant === 3 && <Geometric seed={index} />}
        </div>

        <div className="absolute top-1 left-1 text-[6px] font-mono text-zinc-600">0{index % 5}</div>
        <div className="absolute bottom-1 right-1 text-[6px] font-mono text-zinc-600">
          {variant === 0 ? 'GLY' : variant === 1 ? 'DAT' : variant === 2 ? 'WAV' : 'GEO'}
        </div>
      </motion.div>
    </div>
  );
};

export const HeroGridBackground: React.FC = () => {
  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Density (match your reference feel)
  const cellSize = 120; // match global grid rhythm
  const cols = Math.ceil(windowSize.w / cellSize);
  const rows = Math.ceil(windowSize.h / cellSize);
  const totalCells = cols * rows;

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-auto bg-background"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      }}
    >
      {windowSize.w > 0 && Array.from({ length: totalCells }).map((_, i) => <GridCell key={i} index={i} />)}
      {/* Smooth fade into base background (prevents seam artifacts) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(9,9,11,0) 0%, rgba(9,9,11,0.35) 40%, rgba(9,9,11,0.75) 75%, rgba(9,9,11,1) 100%)',
        }}
      />
    </div>
  );
};

