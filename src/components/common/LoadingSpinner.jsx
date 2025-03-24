// src/components/common/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'safari-green' }) => {
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-12 w-12 border-3',
    large: 'h-16 w-16 border-4'
  };

  const colorClasses = {
    'safari-green': 'border-safari-green',
    'earth-brown': 'border-earth-brown',
    'safari-gold': 'border-safari-gold',
    'beige': 'border-beige'
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className={`animate-spin rounded-full ${sizeClasses[size]} border-t-transparent ${colorClasses[color]}`}></div>
    </div>
  );
};

export default LoadingSpinner;