import MissionCard from "../../board/MissionCard";
import MISSIONS from '../../../data/missions.json';

const weekMission = MISSIONS[4];

const WeekMissionCard = () => {
  return (
    <div className="text-[#20626b] border-[#31919e] border-2
    pb-4 max-w-md w-full min-w-[93%] px-4 rounded-lg shadow-md items-center
    ">
        <h2
          className="font-bold  p-2 text-center"
        >
          Desafio da Semana
        </h2>

        <MissionCard
          id={weekMission.id}
          title={weekMission.title}
          summary={weekMission.summary}
          description={weekMission.description}
          rating={weekMission.rating}
          points={weekMission.points}
          ods={weekMission.ods}
          status={["done", "doing", "todo"].includes(weekMission.status) ? (weekMission.status as "done" | "doing" | "todo") : "todo"}
        />
    </div>
  )
}

export default WeekMissionCard;