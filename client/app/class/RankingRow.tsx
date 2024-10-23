interface RankingRowProps {
  position: number;
  name: string;
  points: number;
  className?: string; // className é opcional
}

const RankingRow: React.FC<RankingRowProps> = ({ 
  position, 
  name, 
  points, 
  className 
}) => {
  return (
    <div className={`
      flex justify-between items-center p-3 bg-slate-200 rounded-lg shadow-md mb-2
      ${className} w-full
    `}>
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold text-green-800">
          {position}º
        </span>
        <span className="text-md">{name}</span>
      </div>

      <div className="text-md text-green-600">
        {points} pts
      </div>
    </div>
  );
};

export default RankingRow;