import React from "react";
import MissionCard from "../board/MissionCard";
import MISSIONS from '../../data/missions.json';

interface MissionsListProps {
  missionIds: number[];
}

const MissionsList: React.FC<MissionsListProps> = ({ missionIds }) => {
  const filteredMissions = MISSIONS.filter(mission => missionIds.includes(mission.id));

  return (
    <div className="flex flex-col items-center gap-4 h-full w-full overflow-y-auto px-2 pt-2">
      {filteredMissions.map((mission, index) => (
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
  );
};

export default MissionsList;
