import React from 'react';
import { NavigationButton } from './NavigationButton';

export const ButtonGroup: React.FC = () => {
  const handleNavigateToAccount = () => {
    window.location.href = '/account';
  };

  const handleNavigateToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <nav className="relative flex flex-col justify-end w-full bg-white min-h-[33vh] mt-auto">
      <div className="flex relative flex-col flex-1 justify-between mt-auto w-full min-w-full h-auto max-h-[1011px] min-h-[114px] rounded-[508px]">
        <NavigationButton
          text="About"
          bgColor="bg-[#DFF37D]"
          textColor="text-black"
          onClick={handleNavigateToAbout}
          zIndex={3}
          height="h-[35vh]"
          minHeight="min-h-[35vh]"
          hoverEffect="down"
        />
        <NavigationButton
          text="Sign Up"
          bgColor="bg-[#EE5E37]"
          textColor="text-white"
          onClick={handleNavigateToAccount}
          zIndex={2}
          height="h-[50vh]"
          minHeight="min-h-[50vh]"
          hoverEffect="up"
        />
        <NavigationButton
          text="Sign In"
          bgColor="bg-[#4558C8]"
          textColor="text-white"
          onClick={handleNavigateToAccount}
          zIndex={1}
          height="h-[66vh]"
          minHeight="min-h-[66vh]"
          hoverEffect="up"
        />
      </div>
    </nav>
  );
};