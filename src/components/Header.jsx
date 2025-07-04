import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-dark py-6">
      <nav className="container flex justify-between items-center">
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition"
        >
          <img 
            src="https://imgur.com/MdihqgL.png" 
            alt="PraxIA Logo" 
            className="w-8 h-8"
          />
          <span className="font-bold text-lg">PraxIA</span>
        </div>
        <div className="space-x-4">
          <button className="text-white/80 hover:text-white px-4 py-2 rounded transition">Log in</button>
          <button className="bg-accent hover:bg-accentHover text-white px-4 py-2 rounded font-medium transition">Sign up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 