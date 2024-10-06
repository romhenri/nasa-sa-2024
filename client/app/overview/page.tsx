import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

export default function Overview() {
  return (
    <div className="flex flex-col h-full w-full"> 
      
      <Header>
        Geral
      </Header>

      <main className="flex-grow bg-slate-300">
        a
      </main>

      <NavBar/>
    </div>
  );
}
