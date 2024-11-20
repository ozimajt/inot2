import React from 'react';
import { StudentForm } from './StudentForm';

const GreenShape: React.FC = () => (
  <div 
    className="w-32 h-32 bg-black"
    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
  />
);

export const StudentGreen: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <StudentForm
      onSubmit={handleSubmit}
      backgroundColor="#DFF37D"
      textColor="black"
      ShapeIcon={GreenShape}
    />
  );
};