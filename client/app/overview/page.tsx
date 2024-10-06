import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

import HomeCard from "../_components/HomeCard";
import TeamCard from "../_components/TeamCard";

import MissionCard from "../board/MissionCard";

export default function Overview() {
  return (
    <div className="flex flex-col h-full w-full"> 
      <Header>
        Meta Verde
      </Header>

      <main className="flex-grow bg-slate-300">
        <HomeCard
          title="Seja bem-vindo(a)!"
          description=" Com desafios e missões, ele incentiva ações sustentáveis e experimentos do protocolo GLOBE no mundo real, como reciclagem e economia de energia, ajudando a reduzir a pegada de carbono."
        />          
        <TeamCard/>

        <div
        className="text-center text-bold text-[#20626b] text-bold">
          <h2>
            Desafiio da Semana
          </h2>
        </div>

        <div className="p-4 flex justify-center">

          <MissionCard 
            title="Biometria de Árvores"
            description="Busque árvores de seu interesse e analize, colete fotos e dados."
            rating={5}
            points={150}
            ods={15}
            status="todo"
          />
        </div>
      </main>

      <NavBar />
    </div>
  );
}
