"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet';

import EXCURSIONS_MARKERS from '../../data/excursions-markers.json';

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/red_pin.png?token=GHSAT0AAAAAACUXU2DDQHXMHOSAD5MJXC7WZYB4TLA',
  iconSize: [32, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/blue_pin.png?token=GHSAT0AAAAAACUXU2DCQIGSMMOJISXCEIPCZYB4YZQ',
  iconSize: [32, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Dynamically import map components with SSR disabled
const Map = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

function MapClickHandler() {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.on('click', function () {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      });
    }
  }, [map]);

  return null;
}

export default function MyMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: '100%', flexGrow: 1 }}> {/* Deixar o mapa crescer */}
      <Map center={[-7.1249296, -34.8693021]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        {EXCURSIONS_MARKERS.map((marker, index) => (
          <Marker 
            key={index}
            position={[marker.coords.lat, marker.coords.long]} 
            icon={redIcon}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        <Marker position={[-7.1249296, -34.8693021]} icon={blueIcon}>
          <Popup>
            Você está aqui!
            <br /> 
            Ilha Tech.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}