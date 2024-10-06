import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

import CLASS_DATA from "../../data/class.json";
import RANKING_DATA from "../../data/ranking.json";

import ClassCard from "./ClassCard";
import RankingBoard from "./RankingBoard";

interface ClassData {
  title: string;
  teacher: string;
  school: string;
  year: number;
}

interface RankingData {
  name: string;
  score: number;
}

const getClassScore = (rankingData: RankingData[]): number => {
  return rankingData.reduce((acc, person) => acc + person.score, 0);
};

export default function ClassPage() {
  return (
    <div className="flex flex-col h-full w-full"> 
      <Header>
        Turma
      </Header>
      <main className="flex-grow bg-slate-300 justify-center items-center">
        {CLASS_DATA.map((classItem: ClassData, index: number) => (
          <div key={index} className="mb-4">
            <ClassCard
              title={classItem.title}
              teacher={classItem.teacher}
              school={classItem.school}
              year={classItem.year}
              classScore={getClassScore(RANKING_DATA)}
            />
          </div>
        ))}
        <RankingBoard rankingData={RANKING_DATA} />
      </main>

      <NavBar />
    </div>
  );
}