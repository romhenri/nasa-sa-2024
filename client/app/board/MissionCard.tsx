enum ODSColors {
  ODS_1 = 'bg-red-500',
  ODS_2 = 'bg-yellow-500',
  ODS_3 = 'bg-green-500',
  ODS_4 = 'bg-[#c41f2d]',
  ODS_5 = 'bg-[#ec402a]',
  ODS_6 = 'bg-[#24bce1]',
  ODS_7 = 'bg-orange-500',
  ODS_8 = 'bg-purple-500',
  ODS_9 = 'bg-teal-500',
  ODS_10 = 'bg-indigo-500',
  ODS_11 = 'bg-gray-500',
  ODS_12 = 'bg-lime-500',
  ODS_13 = 'bg-[#3e7d44]',
  ODS_14 = 'bg-[#1795d2]',
  ODS_15 = 'bg-[#5bb846]',
  ODS_16 = 'bg-blue-700',
  ODS_17 = 'bg-indigo-700'
}

interface MissionCardProps {
  ods: number;
  title: string;
  description: string;
  rating: number;
  points: number;
  status: "done" | "doing" | "todo";
}

const getODSColor = (ods: number): string => {
  return ODSColors[`ODS_${ods}` as keyof typeof ODSColors] || 'bg-gray-500';
};

const getStatusText = (status: "done" | "doing" | "todo"): { text: string; color: string } => {
  switch (status) {
    case "done":
      return { text: "Concluída ✔", color: "text-green-600" };
    case "doing":
      return { text: "Em Andamento...", color: "text-yellow-600" };
    case "todo":
      return { text: "Pendente!", color: "text-red-600" };
    default:
      return { text: "Pendente!", color: "text-gray-600" };
  }
};

const MissionCard: React.FC<MissionCardProps> = ({ 
  ods = 0,
  title,
  description,
  rating,
  points,
  status = "todo"
}) => {
  const statusInfo = getStatusText(status);

  return (
    <div className="max-w-md w-full p-2 bg-slate-200 rounded-lg shadow-md flex items-center space-x-4 min-h-[100px]">
      <div className="w-16 h-16 rounded-lg overflow-hidden flex justify-center items-center">
        <div
          className={`w-14 h-14 ${getODSColor(ods)} rounded shadow-lg flex items-center justify-center text-white font-bold text-xl`}
        >
          {ods}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-green-800 flex font-semibold text-md">
            {title}
          </h3>
          <div className="flex items-center space-x-1">
            <span className="text-green-600">★</span>
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-xs line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between mt-2 items-baseline">
          <div className={`mt-0 font-bold text-sm ${statusInfo.color}`}>
            {statusInfo.text}
          </div>
          <div className="text-sm font-bold text-gray-700 mt-2">
            + {points} pts
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;