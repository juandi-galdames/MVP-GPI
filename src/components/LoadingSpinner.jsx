import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin-reverse" style={{ animationDuration: '1s' }}>
        <img 
          src="https://imgur.com/MdihqgL.png" 
          alt="Loading..." 
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner; 