import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

import HomeCard from "../_components/HomeCard";
import TeamCard from "../_components/TeamCard";
import MissionCard from "../board/MissionCard";

import MISSIONS from '../../data/missions.json';

const weekMission = MISSIONS[4];

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

        <MissionCard 
          title={weekMission.title}
          description={weekMission.description}
          rating={weekMission.rating}
          points={weekMission.points}
          ods={weekMission.ods}
          status={weekMission.status}
        />
      </main>
  );
}
