'use client';

import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(document.documentElement.clientWidth);
    
    function handleResize() {
      setWindowSize(document?.documentElement.clientWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
