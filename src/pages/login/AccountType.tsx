import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginLayout } from './components/LoginLayout';
import { LoginCard } from './components/LoginCard';

export const AccountType: React.FC = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      title: "Student",
      backgroundColor: "#4558C8",
      textColor: "#FFFFFF",
      minHeight: "60vh",
      zIndex: 1,
      onClick: () => navigate('/login/student')
    },
    {
      title: "Parent",
      backgroundColor: "#EE5E37",
      textColor: "#FFFFFF",
      minHeight: "45vh",
      zIndex: 2,
      onClick: () => navigate('/login/parent')
    },
    {
      title: "Teacher",
      backgroundColor: "#DFF37D",
      textColor: "#000000",
      minHeight: "30vh",
      zIndex: 3,
      onClick: () => navigate('/login/teacher')
    }
  ];

  return (
    <LoginLayout title="Hi!">
      <nav className="relative w-full">
        <div className="absolute bottom-0 left-0 right-0 w-full">
          {buttons.map((button, index) => (
            <LoginCard key={index} {...button} />
          ))}
        </div>
      </nav>
    </LoginLayout>
  );
};