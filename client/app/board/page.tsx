import Header from "../_components/Header";
import NavBar from "../_components/NavBar";
import MissionCard from "./MissionCard";

import MISSIONS from '../../data/missions.json';

export default function Board() {
  return (
    <div className="flex flex-col h-full w-full"> 
      <Header>
        Quadro
      </Header>

      <main className="flex flex-grow justify-start items-center bg-slate-300 px-4 pt-2 gap-2 flex-col">
        <div className="flex flex-col gap-4 max-h-[730px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 px-4 pt-2">
          {MISSIONS.map((mission, index) => (
            <MissionCard
              key={index}
              title={mission.title}
              description={mission.description}
              rating={mission.rating}
              points={mission.points}
              ods={mission.ods}
              status={["done", "doing", "todo"].includes(mission.status) ? (mission.status as "done" | "doing" | "todo") : "todo"} 
            />
          ))}
        </div>
      </main>

      <NavBar />
    </div>
  );
}