"use client";

import { useRouter } from 'next/navigation';
import { getODSColor } from '@common/handleODS';
import { getStatusText } from '@common/handleMissions';

interface MissionCardProps {
  id: number;
  ods: number;
  title: string;
  description: string;
  summary: string;
  rating: number;
  points: number;
  status: "done" | "doing" | "todo";
}

const MissionCard: React.FC<MissionCardProps> = ({ 
  id,
  ods = 0,
  title,
  summary,
  rating,
  points,
  status = "todo"
}) => {
  const router = useRouter();
  const statusInfo = getStatusText(status);

  const handleClick = () => {
    router.push(`/missions/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="max-w-md w-full p-2 bg-slate-200 rounded-lg shadow-md flex items-center space-x-4 min-h-[104px] cursor-pointer hover:bg-slate-300 transition-colors"
    >
      <div className="w-16 h-full rounded-lg overflow-hidden flex justify-center flex-col items-center">
        <div
          className={`w-12 h-12 ${getODSColor(ods)} rounded shadow-lg flex items-center justify-center text-white font-bold text-xl mt-2`}
        >
          {ods}
        </div>
        <div className="text-xs font-bold text-gray-700 mt-2">
          {points} pts
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-green-800 flex font-semibold text-md">
            {title}
          </h3>
        </div>

        <p className="text-gray-500 text-xs line-clamp-2 
        min-h-[32px]">
          {summary}
        </p>

        <div className="flex justify-between mt-2 items-baseline">
          <div className="flex items-center space-x-1">
            <div>
              <span className="text-green-600">★</span>
              <span className="text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <div className={`w-36 mt-0 font-bold text-sm ${statusInfo.color} border-2 border-[#338F9B50]  border-t-0 border-l-0 text-right rounded-ee`}  
          >
            {statusInfo.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
