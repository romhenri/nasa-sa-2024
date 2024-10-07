import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import Header from "../_components/Header"; 
import NavBar from "../_components/NavBar";
import 'leaflet/dist/leaflet.css';

export default function Home() {
  const MyMap = useMemo(() => dynamic(
    () => import('./MyMap'),
    { 
      loading: () => <p>Map is loading</p>,
      ssr: false
    }
  ), []);

  return (
    <div className="flex flex-col h-full w-full">
      <Header>
        Mapa
      </Header>

      <main className="flex-grow bg-slate-300">
        <MyMap />
      </main>

      <NavBar/>
    </div>
  );
}
