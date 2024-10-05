import Image from "next/image";
import 'leaflet/dist/leaflet.css';
import Header from "../_components/Header"; 
import NavBar from "../_components/NavBar";
// Assumindo que o Header está em ../_components
import MyMap from "./MyMap";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full"> {/* Garante que o div pai respeite o contêiner pai */}
      {/* Header com altura fixa */}
      <Header>
        Map
      </Header>

      {/* Mapa crescendo para ocupar o espaço restante */}
      <main className="flex-grow bg-gblue-100">
        <MyMap />
      </main>

      {/* NavBar com altura fixa */}
      <NavBar/>
    </div>
  );
}
