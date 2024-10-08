"use client";

import React from 'react';
import { usePathname } from 'next/navigation'; 
import NavLink from './NavLink';

import { 
  House as OverviewIcon,
  ClipboardList as BoardIcon,
  MapPinned as MapIcon,
  Users as TeamIcon,
} from 'lucide-react';

const NavBar = () => {
  const currentRoute = usePathname();

  return (
    <div className="w-full h-[60px] flex justify-center items-center px-12 bg-gray-200 fixed bottom-0 z-[1000] md:relative md:bottom-auto">
      <nav>
        <ul className="flex justify-center w-full space-x-4 gap-2">
          <NavLink 
            routeName="Geral" 
            route="/overview" 
            icon={<OverviewIcon />} 
            currentRoute={currentRoute}
          />
          <NavLink 
            routeName="Quadro" 
            route="/board" 
            icon={<BoardIcon />} 
            currentRoute={currentRoute}
          />
          <NavLink 
            routeName="Turma" 
            route="/class" 
            icon={<TeamIcon />} 
            currentRoute={currentRoute}
          />
          <NavLink 
            routeName="Mapa" 
            route="/map" 
            icon={<MapIcon />} 
            currentRoute={currentRoute}
          />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
