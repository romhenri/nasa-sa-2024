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
    <div className="flex flex-col h-screen w-full"> 
      <Header>
        Turma
      </Header>
      <main className="flex-grow bg-slate-300 flex flex-col justify-start items-center gap-4">
        <div className="flex flex-col gap-4 max-h-[calc(100vh-160px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 px-4 pt-2">
          {CLASS_DATA.map((classItem: ClassData, index: number) => (
            <div key={index} className="flex justify-center mb-4">
              <ClassCard
                title={classItem.title}
                teacher={classItem.teacher}
                school={classItem.school}
                year={classItem.year}
                classScore={getClassScore(RANKING_DATA)}
              />
            </div>
          ))}
          {/* O RankingBoard agora usa o scroll do container externo */}
          <div className="w-full">
            <RankingBoard rankingData={RANKING_DATA} />
          </div>
        </div>
      </main>
      <NavBar />
    </div>
  );
}