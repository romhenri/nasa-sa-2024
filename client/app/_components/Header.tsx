import React from 'react';

const Header = ({ children }) => {
  return (
    <div className={`
      w-full
      h-2 max-h-8
      flex justify-center 
    `}>
      <h1
        className={`
          text-xl
          font-bold
        `}
      >
        {children}
      </h1>
    </div>
  );
};

export default Header;