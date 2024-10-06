"use client";

import React from 'react';
import { usePathname } from 'next/navigation'; 
import NavLink from './NavLink';

import { 
  House as OverviewIcon,
  ClipboardList as BoardIcon,
  SiGoogleclassroom,
  MapPinned as MapIcon,
  Users as TeamIcon,
  Rocket
} from 'lucide-react';
import Home from '../page';


const NavBar = () => {
  const currentRoute = usePathname();

  return (
    <div className="w-full h-20 flex justify-center items-center px-8 bg-gray-200">
      <nav>
        <ul className="flex justify-center w-full space-x-4">
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
          <NavLink 
            routeName="Time" 
            route="/team" 
            icon={<Rocket />}
            currentRoute={currentRoute}
          />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;