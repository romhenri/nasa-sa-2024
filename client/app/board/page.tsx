import Header from "../_components/Header";
import NavBar from "../_components/NavBar";
import MissionCard from "./MissionCard";
import MISSIONS from '../../data/missions.json';

export default function Board() {
  return (
    <main className="flex-grow flex justify-start items-center bg-slate-300 px-2 pt-2 pb-20 gap-2 flex-col overflow-hidden">
      <div className="flex flex-col gap-4 h-full max-h-[calc(100vh-130px)] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 px-2 pt-2">
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
  );
}
