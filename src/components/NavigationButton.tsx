import React from 'react';

interface NavigationButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  onClick: () => void;
  zIndex: number;
  height: string;
  minHeight: string;
  hoverEffect: 'up' | 'down';
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  text,
  bgColor,
  textColor,
  onClick,
  zIndex,
  height,
  minHeight,
  hoverEffect
}) => {
  const hoverClass = hoverEffect === 'up' ? 'hover-up' : 'hover-down';

  return (
    <button
      onClick={onClick}
      className={`
        box-border absolute flex-1 shrink pt-6 pl-24 w-full 
        text-[68px] tracking-[-5px] text-left ${bgColor} ${textColor} 
        transition-transform cursor-pointer duration-[0.3s] ease-[ease] 
        ${height} ${minHeight} min-w-[240px] rounded-t-[99px] 
        z-[${zIndex}] ${hoverClass}
        max-md:mx-auto max-md:max-w-full max-sm:pl-14 max-sm:min-w-[200px]
        bottom-0 left-0 right-0
      `}
    >
      {text}
    </button>
  );
};