import { useState, useEffect } from 'react';

export const useViewportWidth = () => {
  const [isWide, setIsWide] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isWide;
};


