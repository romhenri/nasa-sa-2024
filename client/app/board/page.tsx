import MissionCard from "./MissionCard";
import MISSIONS from '../../data/missions.json';

export default function Board() {
  return (
    <main className="flex-grow flex justify-start items-center bg-slate-300 px-2 pt-2 pb-20 md:pb-0 gap-2 flex-col overflow-hidden">
      <div className="flex flex-col items-center gap-4 h-full max-h-[calc(100vh-130px)] w-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 px-2 pt-2">

        {MISSIONS.map((mission, index) => (
          <MissionCard
            key={index}
            id={mission.id}
            title={mission.title}
            description={mission.description}
            summary={mission.summary}
            rating={mission.rating}
            points={mission.points}
            ods={mission.ods}
            anim="right"
            status={["done", "doing", "todo"].includes(mission.status) ? (mission.status as "done" | "doing" | "todo") : "todo"}
          />
        ))}
      </div>
    </main>
  );
}
