import React from 'react';
import { LoginCardProps } from '../types';

export const LoginCard: React.FC<LoginCardProps> = ({
  title,
  backgroundColor,
  textColor,
  minHeight,
  zIndex,
  onClick
}) => {
  const isLastButton = zIndex === 3;
  const hoverClass = isLastButton ? 'hover-down' : 'hover-up';

  return (
    <button
      onClick={onClick}
      tabIndex={0}
      className={`
        absolute bottom-0 left-0 right-0
        flex w-full 
        text-[68px] font-normal tracking-[-5px] text-left
        transition-transform cursor-pointer duration-300 ease-in-out
        ${hoverClass} pl-24
        max-md:pl-16 max-md:text-[56px] max-md:tracking-[-4px]
        max-sm:pl-8 max-sm:text-[40px] max-sm:tracking-[-2px]
      `}
      style={{ 
        backgroundColor, 
        color: textColor, 
        height: minHeight,
        minHeight,
        zIndex,
        borderTopLeftRadius: '99px',
        borderTopRightRadius: '99px',
        paddingTop: 'calc(1vh)',
        '--base-height': minHeight
      } as React.CSSProperties}
    >
      {title}
    </button>
  );
};