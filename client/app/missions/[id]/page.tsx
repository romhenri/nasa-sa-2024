"use client";

import { useParams } from 'next/navigation';
import MissionPage from "../_components/MissionPage";
import MISSIONS from '../../../data/missions.json';
import MissionsList from '@/app/_components/MissionsList';

export default function Board() {
  const params = useParams();
  const missionIndex = parseInt(params.id as string, 10) - 1;
  const mission = MISSIONS[missionIndex];

  const getNumbers = (current: number) => {
    const numbers = [];
    for (let i = 0; i < MISSIONS.length; i++) {
        if (i + 1 !== current) {
            numbers.push(i + 1);
        }
    }
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers.slice(0, 3);
  };

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
        <div className="text-sm border-x-2 border-slate-200">
          <p className="text-center">
            Outras Missões:
          </p>
          <MissionsList missionIds={getNumbers(mission.id)} />
        </div>
      </div>
    </main>
  );
}
