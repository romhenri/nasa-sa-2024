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
      text-[#20626b]
      bg-gray-200
      sticky top-0 z-[1000]
      "
    >
      <h1 className="text-xl font-bold">
        {children}
      </h1>
    </div>
  );
};

export default Header;