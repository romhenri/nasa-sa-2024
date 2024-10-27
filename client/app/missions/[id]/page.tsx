"use client";

import { useParams } from 'next/navigation';
import MissionPage from "../_components/MissionPage";
import MISSIONS from '../../../data/missions.json';

export default function Board() {
  const params = useParams();
  const missionIndex = parseInt(params.id as string, 10) - 1;
  const mission = MISSIONS[missionIndex];

  return (
    <main className="flex-grow flex justify-start items-center bg-slate-300 px-2 pt-2 pb-20 md:pb-0 gap-2 flex-col overflow-hidden">
      <div className="flex flex-col items-center gap-4 h-full max-h-[calc(100vh-130px)] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 px-2 pt-2">
        {mission ? (
          <MissionPage
            key={missionIndex}
            title={mission.title}
            summary={mission.summary}
            context={mission.context}
            count={mission.count}
            description={mission.description}
            rating={mission.rating}
            points={mission.points}
            ods={mission.ods}
            status={["done", "doing", "todo"].includes(mission.status) ? (mission.status as "done" | "doing" | "todo") : "todo"}
          />
        ) : (
          <p>Missão não encontrada</p>
        )}
      </div>
    </main>
  );
}
