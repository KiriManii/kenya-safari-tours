// src/pages/Tours.jsx
import { useEffect } from 'react';

const Tours = () => {
  useEffect(() => {
    document.title = "Eleanor's Safari Tours | Safari Tours";
  }, []);

  return (
    <div className="pt-20">
      <div className="section-container">
        <h1 className="text-4xl font-safari mb-6 text-center">Safari Tours</h1>
        <p className="text-center">This is a placeholder for the tours page content.</p>
      </div>
    </div>
  );
};

export default Tours;