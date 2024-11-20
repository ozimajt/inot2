import React, { useState } from 'react';
import { Shape } from './types';
import { ShapeSelector } from './ShapeSelector';

export const AccountSetup: React.FC = () => {
  const [selectedShape, setSelectedShape] = useState<Shape | null>(null);

  const shapes: Shape[] = [
    { id: '1', color: '#4558C8', type: 'circle', rotation: 0 },
    { id: '2', color: '#DFF37D', type: 'triangle', rotation: 0 },
    { id: '3', color: '#EE5E37', type: 'square', rotation: 0 }
  ];

  const handleShapeSelect = (shape: Shape) => {
    setSelectedShape(shape);
  };

  return (
    <main className="flex flex-col h-screen min-h-screen max-h-screen bg-transparent relative">
      <h1 className="text-[#292B2D] text-[68px] tracking-[-0.052em] px-10 py-8 relative">
        Pick Your Shape
      </h1>
      <div className="absolute inset-0 w-screen h-screen overflow-visible" style={{ zIndex: 40 }}>
        <ShapeSelector
          shapes={shapes}
          selectedShape={selectedShape}
          onSelectShape={handleShapeSelect}
        />
      </div>
    </main>
  );
};