import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

import HomeCard from "../_components/HomeCard";
import TeamCard from "../_components/TeamCard";
import MissionCard from "../board/MissionCard";

export default function Overview() {
  return (
      <main className="flex-grow bg-slate-300 flex flex-col items-center gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 md:p-0 px-4">
        <HomeCard
          title="Seja bem-vindo(a)!"
          description="Com desafios e missões, ele incentiva ações sustentáveis e experimentos do protocolo GLOBE no mundo real, como reciclagem e economia de energia, ajudando a reduzir a pegada de carbono."
        />          

        <TeamCard />

        <div className="text-center font-bold text-[#20626b]">
          <h2>
            Desafio da Semana
          </h2>
        </div>

        <div className="p-4 flex justify-center w-full">
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
  );
}
