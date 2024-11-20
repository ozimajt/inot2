import React from 'react';
import { StudentForm } from './StudentForm';

const SquareShape: React.FC = () => (
  <div 
    className="w-32 h-32 bg-white transform rotate-15"
  />
);

export const StudentSquare: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <StudentForm
      onSubmit={handleSubmit}
      backgroundColor="#EE5E37"
      ShapeIcon={SquareShape}
    />
  );
};