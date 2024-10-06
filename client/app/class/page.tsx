import Image from "next/image";
import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

import CLASS_DATA from "../../data/class.json";
import RANKING_DATA from "../../data/ranking.json";

import ClassCard from "./ClassCard";
import RankingBoard from "./RankingBoard";

const getClassScore = (rankingData) => {
  return rankingData.reduce((acc, person) => acc + person.score, 0);
}

export default function ClassPage() {
  return (
    <div className="flex flex-col h-full w-full"> 
      <Header>
        Turma
      </Header>
      <main className="flex-grow bg-gblue-100 justify-center items-center">
        {CLASS_DATA.map((classItem, index) => (
          <div key={index} className="mb-4">
            <ClassCard
              title={classItem.title}
              description={classItem.description}
              teacher={classItem.teacher}
              school={classItem.school}
              year={classItem.year}
              classScore={getClassScore(RANKING_DATA)}
            />
          </div>
        ))}
        <RankingBoard rankingData={RANKING_DATA}/>
      </main>

      <NavBar/>
    </div>
  );
}
