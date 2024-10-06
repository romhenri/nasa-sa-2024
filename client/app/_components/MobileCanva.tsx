import React from 'react';

interface MobileCanvaProps {
  children: React.ReactNode;
}

const MobileCanva: React.FC<MobileCanvaProps> = ({ children }) => {
  return (
    <div
      className="
      bg-slate-200 text-slate-800
      outline-2 border-black
      w-full h-full
      md:w-[510px] md:h-[900px]
      "
    >
      {children}
    </div>
  );
};

export default MobileCanva;