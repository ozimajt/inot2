import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginLayout } from './components/LoginLayout';
import { LoginCard } from './components/LoginCard';

export const StudentLoginType: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (type: string) => {
    if (type === 'demo') {
      navigate('/signup/account-setup');
    } else {
      console.log(`Logging in with ${type}`);
    }
  };

  const buttons = [
    {
      title: "Demo Student Login",
      backgroundColor: "#4558C8",
      textColor: "#FFFFFF",
      minHeight: "60vh",
      zIndex: 1,
      onClick: () => handleLogin('demo')
    },
    {
      title: "Continue with Google",
      backgroundColor: "#EE5E37",
      textColor: "#FFFFFF",
      minHeight: "45vh",
      zIndex: 2,
      onClick: () => handleLogin('google')
    },
    {
      title: "Continue with Apple",
      backgroundColor: "#DFF37D",
      textColor: "#000000",
      minHeight: "30vh",
      zIndex: 3,
      onClick: () => handleLogin('apple')
    }
  ];

  return (
    <LoginLayout title="Student">
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