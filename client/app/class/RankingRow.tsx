import { 
  ArrowBigUp as AscIcon,
  ArrowBigDown as DesIcon,
  Radiation
} from 'lucide-react';

interface RankingRowProps {
  position: number;
  name: string;
  points: number;
  phase: string;
  className?: string;
}

const RankingRow: React.FC<RankingRowProps> = ({ 
  position, 
  name, 
  points,
  phase,
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
        <span className="text-md flex items-center space-x-1">
          {name + " "}
          {phase === "asc" && 
            <AscIcon 
              className="text-green-700"
              strokeWidth={2}
            />
          }
          {phase === "des" && 
            <DesIcon 
              className="text-red-800"
              strokeWidth={2}
            />
          }
        </span>
      </div>

      <div className="text-md text-green-600">
        {points} pts
      </div>
    </div>
  );
};

export default RankingRow;
