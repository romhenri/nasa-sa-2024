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
    <div className="max-w-md w-full p-4 bg-slate-200 rounded-lg shadow-md flex items-center space-x-4">
      <div className="w-20 h-20 rounded-lg overflow-hidden flex justify-center items-center">
        <div
          className={`w-14 h-14 ${getODSColor(ods)} rounded shadow-lg flex items-center justify-center text-white font-bold text-xl`}
        >
          {ods}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-blue-600 flex font-semibold text-lg">
            {title}
          </h3>
          <div className="flex items-center space-x-1">
            <span className="text-green-500">★</span>
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
        <p className="text-gray-500">
          {description}
        </p>

        <div className="flex justify-between items-center mt-2">
          <div className={`mt-2 font-bold ${statusInfo.color}`}>
            {statusInfo.text}
          </div>
          <div className="text-lg font-bold text-gray-700">+ {points} pts</div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;