import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="
      w-full
      h-16
      flex justify-center items-center
      text-[#20626b]"
      >
      <h1 className="text-xl font-bold">
        {children}
      </h1>
    </div>
  );
};

export default Header;
