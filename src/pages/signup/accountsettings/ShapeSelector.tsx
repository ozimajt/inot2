import React, { useState, useEffect } from 'react';
import { Shape } from './types';
import { ShapeComponent } from './ShapeComponent';

interface ShapeSelectorProps {
  shapes: Shape[];
  selectedShape: Shape | null;
  onSelectShape: (shape: Shape) => void;
}

export const ShapeSelector: React.FC<ShapeSelectorProps> = ({
  shapes,
  selectedShape,
  onSelectShape
}) => {
  const [positions, setPositions] = useState<string[]>([]);

  useEffect(() => {
    const getRandomPosition = (side: 'left' | 'middle' | 'right') => {
      const topPosition = Math.random() > 0.5;
      
      switch (side) {
        case 'left':
          return `left-[-10%] ${topPosition ? 'top-[20%]' : 'bottom-[20%]'}`;
        case 'middle':
          return `left-[45%] ${topPosition ? 'top-[15%]' : 'bottom-[15%]'}`;
        case 'right':
          return `right-[-10%] ${topPosition ? 'top-[20%]' : 'bottom-[20%]'}`;
      }
    };

    // Create array of sides and shuffle them
    const sides: ('left' | 'middle' | 'right')[] = ['left', 'middle', 'right'];
    const shuffledSides = [...sides].sort(() => Math.random() - 0.5);

    // Generate random positions for each side
    const newPositions = shuffledSides.map(side => getRandomPosition(side));
    setPositions(newPositions);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="absolute inset-0 overflow-visible" style={{ zIndex: 45 }}>
      {shapes.map((shape, index) => (
        <div 
          key={shape.id}
          className={`absolute ${positions[index] || ''}`}
          style={{ perspective: '1000px' }}
        >
          <ShapeComponent
            shape={shape}
            isSelected={selectedShape?.id === shape.id}
            onClick={() => onSelectShape(shape)}
          />
        </div>
      ))}
    </div>
  );
};