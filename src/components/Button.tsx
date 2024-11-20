import React from 'react';

interface ButtonProps {
  text: string;
  variant: 'orange' | 'blue' | 'green';
  className?: string;
  onClick?: () => void;
  hoverEffect?: 'up' | 'down';
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant, 
  className = '',
  onClick,
  hoverEffect = 'up'
}) => {
  const variants = {
    orange: 'bg-[#EE5E37] text-white',
    blue: 'bg-[#4558C8] text-white',
    green: 'bg-[#DFF37D] text-black'
  };

  const hoverClass = hoverEffect === 'up' ? 'hover-up' : 'hover-down';

  return (
    <button 
      onClick={onClick}
      className={`flex-1 min-h-[109px] rounded-[500px] min-w-[240px] text-[66px] tracking-[-5px] text-left pl-[90px] font-sans font-normal ${variants[variant]} ${hoverClass} ${className}`}
    >
      {text}
    </button>
  );
};