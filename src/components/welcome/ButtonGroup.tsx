import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationCard } from './NavigationCard';

export const ButtonGroup: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToAccount = () => {
    navigate('/login/account-type');
  };

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  const buttons = [
    {
      title: "Sign In",
      backgroundColor: "#4558C8",
      textColor: "#FFFFFF",
      minHeight: "60vh",
      zIndex: 1,
      onClick: handleNavigateToAccount
    },
    {
      title: "Sign Up",
      backgroundColor: "#EE5E37",
      textColor: "#FFFFFF",
      minHeight: "45vh",
      zIndex: 2,
      onClick: handleNavigateToAccount
    },
    {
      title: "About",
      backgroundColor: "#DFF37D",
      textColor: "#000000",
      minHeight: "30vh",
      zIndex: 3,
      onClick: handleNavigateToAbout
    }
  ];

  return (
    <nav className="relative w-full">
      <div className="absolute bottom-0 left-0 right-0 w-full">
        {buttons.map((button, index) => (
          <NavigationCard key={index} {...button} />
        ))}
      </div>
    </nav>
  );
};