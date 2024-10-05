import Image from "next/image";
import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

export default function Overview() {
  return (
    <div className="flex flex-col h-full w-full"> 
      
      <Header>
        Overview
      </Header>

      {/* Main que cresce para ocupar o espaço restante */}
      <main className="flex-grow bg-gblue-100">
        a
      </main>

      <NavBar/>
    </div>
  );
}
