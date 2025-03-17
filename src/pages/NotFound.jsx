// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = "Eleanor's Safari Tours | Page Not Found";
  }, []);

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-safari mb-6">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;