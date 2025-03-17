// src/pages/Gallery.jsx
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    document.title = "Eleanor's Safari Tours | Gallery";
  }, []);

  return (
    <div className="pt-20">
      <div className="section-container">
        <h1 className="text-4xl font-safari mb-6 text-center">Photo Gallery</h1>
        <p className="text-center">This is a placeholder for the gallery page content.</p>
      </div>
    </div>
  );
};

export default Gallery;