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

      <main className="flex-grow bg-slate-300">
        <MyMap />
      </main>

      <NavBar/>
    </div>
  );
}
