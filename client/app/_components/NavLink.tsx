import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  routeName?: string;
  route: string;
  icon: React.ReactNode;
  currentRoute: string;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  routeName = "",
  route,
  icon,
  currentRoute
}) => {
  return (
    <li
      className="
      flex flex-col items-center justify-center
      min-w-20 w-20 max-w-20
      hover:bg-gray-300 rounded
      "
    >
      <Link 
        href={route} 
        className={`${currentRoute === route
        ? 'text-[#338F9B] bg-[#338F9B30]' 
        : 'text-gray-600'
        } flex flex-col items-center justify-center w-full h-full rounded p-1
        `}>
          {icon}
          <p className="text-xs text-center">
            {routeName}
          </p>
      </Link>
    </li>
  );
};

export default NavLink;