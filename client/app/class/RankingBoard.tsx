import RankingRow from './RankingRow';

const rankingData = [
  { position: 1, name: "João", points: 250 },
  { position: 2, name: "Maria", points: 220 },
  { position: 3, name: "Carlos", points: 200 }
];

export default function RankingBoard() {
  return (
    <div className="p-4">
      {rankingData.map((person, index) => (
        <RankingRow
          key={index}
          position={person.position}
          name={person.name}
          points={person.points}
        />
      ))}
    </div>
  );
}
