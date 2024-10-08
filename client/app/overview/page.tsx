import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

import HomeCard from "./_components/HomeCard";
import TeamCard from "./_components/TeamCard";
import WeekMissionCard from "./_components/WeekMissionCard";

export default function Overview() {
  return (
    <main className="flex-grow bg-slate-300 flex flex-col items-center gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 md:p-0 px-4">
      <HomeCard
        title="Seja bem-vindo(a)!"
        description="plataforma proporciona uma experiência gamificada a alunos do ensino médio, sob a supervisão de seus professores, a fim de educá-los sobre os Objetivos de Desenvolvimento Sustentável (ODS) por meio de atividades práticas e experimentos do Protocolo GLOBE."
      />          
    
      <TeamCard />
    
      <WeekMissionCard />
    </main>
  );
}
