import RankingRow from './RankingRow';

interface RankingData {
  name: string;
  score: number;
}

interface RankingBoardProps {
  rankingData: RankingData[];
}

export default function RankingBoard({ rankingData }: RankingBoardProps) {
  return (
    <div className="px-4 pb-4 max-h-[560px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
      {rankingData.map((person, index) => (
        <RankingRow
          key={index}
          position={index + 1}
          name={person.name}
          points={person.score}
          className={`${
            index === 0 || index === 1 || index === 2
              ? 'border-4 border-yellow-400'
              : ''
          }`}
        />
      ))}
    </div>
  );
}