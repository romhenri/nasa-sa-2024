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
    <main className="flex-grow flex justify-start items-center bg-slate-300 px-2 pt-2 pb-20 md:pb-0 gap-2 flex-col overflow-hidden">
      <div className="flex flex-col gap-4 h-full max-h-[calc(100vh-130px)] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 px-2 pt-2">
        {CLASS_DATA.map((classItem: ClassData, index: number) => (
          <div key={index} className="flex justify-center">
            <ClassCard
              title={classItem.title}
              teacher={classItem.teacher}
              school={classItem.school}
              year={classItem.year}
              classScore={getClassScore(RANKING_DATA)}
            />
          </div>
        ))}
        <div className="w-full">
          <RankingBoard rankingData={RANKING_DATA} />
        </div>
      </div>
    </main>
  );
}