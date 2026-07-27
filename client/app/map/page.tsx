"use client";

import dynamic from 'next/dynamic';

import Header from "../_components/Header";
import NavBar from "../_components/NavBar";
import 'leaflet/dist/leaflet.css';

const MyMap = dynamic(() => import('./MyMap'), {
  loading: () => <p>Map is loading...</p>,
  ssr: false,
});

export default function MapPage() {
  return (
    <main className="flex-grow bg-slate-300 flex justify-center items-center">
      <div className="w-full h-full flex-grow">
        <MyMap />
      </div>
    </main>
  );
}