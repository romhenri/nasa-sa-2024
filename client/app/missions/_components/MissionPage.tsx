import React from 'react';
import { 
  getODSBgColor,
} from '@common/handleODS';
import ODSCard from './ODSCard';
import { getStatusText } from '@common/handleMissions';

interface MissionPageProps {
  ods: number;
  title: string;
  description: string;
  rating: number;
  points: number;
  status: "done" | "doing" | "todo";
  context: string;
  count: number;
  summary: string;
}

const MissionPage: React.FC<MissionPageProps> = ({ 
  ods,
  title,
  description,
  rating,
  points,
  status,
  context,
  count,
  summary
}) => {
  const statusInfo = getStatusText(status);

  React.useEffect(() => {
    console.log(getODSBgColor(14));
  }, []);

  return (
    <div className="max-w-2xl w-full p-4 bg-slate-200 rounded-lg shadow-md flex flex-col">
      <div className="">
        <h3 className="text-green-800 font-semibold text-lg">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-2">
          {description}
        </p>
      </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="text-green-600">★</span>
            <span className="text-sm font-semibold">{rating}</span>
          </div>
          <div className="text-sm font-semibold text-gray-700">
            {count} Concluintes
          </div>
        </div>

      <div className="my-4">
        <ODSCard ods={ods}/>
      </div>

      <div className="flex flex-col space-y-2">
        <div>
          <h4 className="text-green-800 font-semibold">Contexto</h4>
          <p className="text-gray-600 text-sm">{context}</p>
        </div>
      </div>

      <div className="mt-2">
        <div className={`font-bold text-sm ${statusInfo.color}`}>
          {statusInfo.text}
        </div>
      </div>
    </div>
  );
};

export default MissionPage;