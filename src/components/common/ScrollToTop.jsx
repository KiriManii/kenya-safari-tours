// src/components/common/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of page when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;