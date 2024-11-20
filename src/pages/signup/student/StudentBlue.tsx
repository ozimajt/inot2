import React from 'react';
import { StudentForm } from './StudentForm';

const BlueShape: React.FC = () => (
  <div className="w-32 h-32 rounded-full bg-white" />
);

export const StudentBlue: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <StudentForm
      onSubmit={handleSubmit}
      backgroundColor="#4558C8"
      ShapeIcon={BlueShape}
    />
  );
};