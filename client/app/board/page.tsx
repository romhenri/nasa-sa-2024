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

      <main className="flex flex-col bg-gblue-100 p-4 gap-2">
        {MISSIONS.map((mission, index) => (
          <MissionCard
            key={index}
            imageUrl={mission.imageUrl}
            title={mission.title}
            description={mission.description}
            rating={mission.rating}
            points={mission.points}
          />
        ))}
      </main>

      <NavBar />
    </div>
  );
}
