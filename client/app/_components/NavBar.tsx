"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Usando usePathname para obter a rota atual

const NavBar = () => {
  const currentRoute = usePathname(); // Hook para acessar a rota atual

  return (
    <div className="w-full h-20 flex justify-between items-center px-8 bg-gray-200">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link 
              href="/overview" 
              className={currentRoute === '/overview' ? 'text-[#338F9B]' : 'text-gray-600'}>
              Overview
            </Link>
          </li>
          <li>
            <Link 
              href="/map" 
              className={currentRoute === '/map' ? 'text-[#338F9B]' : 'text-gray-600'}>
              Map
            </Link>
          </li>
          <li>
            <Link 
              href="/team" 
              className={currentRoute === '/team' ? 'text-[#338F9B]' : 'text-gray-600'}>
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
