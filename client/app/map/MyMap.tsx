"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet';

delete L.Icon.Default.prototype._getIconUrl;

import EXCUSIONS_MARKERS from '../../data/excursions-markers.json';

// Custom red, blue, and green icons with CDN-hosted images
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/red_pin.png?token=GHSAT0AAAAAACUXU2DDQHXMHOSAD5MJXC7WZYB4TLA', // Use uma URL confiável
  iconRetinaUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/red_pin.png?token=GHSAT0AAAAAACUXU2DDQHXMHOSAD5MJXC7WZYB4TLA',
  iconSize: [32, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/blue_pin.png?token=GHSAT0AAAAAACUXU2DCQIGSMMOJISXCEIPCZYB4YZQ',
  iconRetinaUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/blue_pin.png?token=GHSAT0AAAAAACUXU2DCQIGSMMOJISXCEIPCZYB4YZQ',
  iconSize: [32, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/orange_pin.png?token=GHSAT0AAAAAACUXU2DCFR5UUODLKKMLCWNCZYB434Q',
  iconRetinaUrl: 'https://raw.githubusercontent.com/romhenri/nasa-sa-2024/refs/heads/main/client/assets/orange_pin.png?token=GHSAT0AAAAAACUXU2DCFR5UUODLKKMLCWNCZYB434Q',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const YOUR_MARKER = [
  {
    name: "Praia de Tambaú",
    coords: {
      lat: -7.1249296,
      long: -34.8693021
    }
  }
];

const EXCURSIONS_MARKERS_GREEN = [
  // {
  //   name: "Farol do Cabo Branco",
  //   coords: {
  //     lat: -7.148287,
  //     long: -34.794369
  //   }
  // }
];

// Componente que usa o mapa e adiciona o evento de clique
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
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: '100%' }}> 
      <Map
        center={[-7.1249296, -34.8693021]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        
        {/* Default Marker */}
        <Marker position={[-7.1249296, -34.8693021]}>
          <Popup>
            Você está aqui!
            <br /> 
            Ilha Tech.
          </Popup>
        </Marker>

        {/* Red Markers */}
        {EXCUSIONS_MARKERS.map((marker, index) => (
          <Marker 
            key={index}
            position={[marker.coords.lat, marker.coords.long]} 
            icon={redIcon} // Red icon
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

        {/* Blue Markers */}
        {YOUR_MARKER.map((marker, index) => (
          <Marker 
            key={index}
            position={[marker.coords.lat, marker.coords.long]} 
            icon={blueIcon} // Blue icon
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

        {/* Green Markers */}
        {EXCURSIONS_MARKERS_GREEN.map((marker, index) => (
          <Marker 
            key={index}
            position={[marker.coords.lat, marker.coords.long]} 
            icon={greenIcon} // Green icon
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

      </Map>
    </div>
  );
}