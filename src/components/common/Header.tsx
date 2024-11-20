import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState('11vh');

  useEffect(() => {
    const updateHeaderHeight = () => {
      const screenWidth = window.innerWidth;
      const logoWidth = screenWidth * 0.22;
      const aspectRatio = 3.03;
      const logoHeight = logoWidth / aspectRatio;
      const heightVh = (logoHeight / window.innerHeight) * 100;
      setHeaderHeight(`${heightVh}vh`);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <header className="flex justify-between items-center w-full bg-transparent" style={{ height: headerHeight }}>
      <div className="w-[78%] h-full flex items-center">
        <h1 className="text-[#292B2D] h-full flex items-center"
          style={{ 
            fontSize: headerHeight,
            lineHeight: headerHeight,
            letterSpacing: '-0.052em'
          }}>
          {title}
        </h1>
      </div>
      
      <div className="w-[22%] h-full flex justify-end items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/3896b71c9d834e8aa7113a3341b5224c/9490317cc6338ef2e952a65fcdc75c04158a35f2e639cdba6c65ab8cb69efdeb"
          alt="Logo"
          className="h-full w-auto object-contain object-right cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
    </header>
  );
};