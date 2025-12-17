import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event 
      ? event.touches[0].clientX - containerRect.left 
      : (event as React.MouseEvent).clientX - containerRect.left;

    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div 
      className="relative w-full aspect-video overflow-hidden rounded-lg border border-white/10 select-none group"
      ref={containerRef}
      onMouseMove={(e) => isDragging && handleMove(e)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={(e) => handleMove(e)}
    >
      {/* Before Image (Background) */}
      <img 
        src={beforeImage} 
        alt="Before" 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" 
      />
      <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 text-xs font-mono uppercase tracking-widest text-white/70 rounded">
        Wireframe / Antes
      </div>

      {/* After Image (Foreground with Clip Path) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-4 right-4 bg-emerald-500/90 px-3 py-1 text-xs font-mono uppercase tracking-widest text-white rounded">
          Final / Depois
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex gap-[1px]">
                <ChevronLeft className="w-3 h-3 text-black" />
                <ChevronRight className="w-3 h-3 text-black" />
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Arraste para comparar
      </div>
    </div>
  );
};

export default ComparisonSlider;