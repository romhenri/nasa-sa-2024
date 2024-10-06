import Image from "next/image";
import 'leaflet/dist/leaflet.css';
import Header from "../_components/Header"; 
import NavBar from "../_components/NavBar";
import MyMap from "./MyMap";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header>
        Mapa
      </Header>

      <main className="flex-grow bg-gblue-100">
        <MyMap />
      </main>

      <NavBar/>
    </div>
  );
}
