import Image from "next/image";
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import Header from "../_components/Header";

import MyMap from "./MyMap";

export default function Home() {
  return (
    <div className="grid min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header>
        Map
      </Header >

      <MyMap />
    </div>
  );
}
