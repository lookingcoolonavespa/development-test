import { useState, useRef, useEffect } from 'react';

export default function useMobileCheck() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useRef(window.innerWidth <= 768);

  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
    isMobile.current = windowWidth <= 768;
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return { isMobile };
}
