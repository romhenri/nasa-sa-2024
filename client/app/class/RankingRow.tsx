const RankingRow = ({
   position, name, points, className
  }) => {
  return (
    <div className={`
      flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-2

      ${className}
    `}>
      {/* Posição no ranking */}
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold text-blue-600">    
          {position}º
        </span>
        <span className="text-md font-semibold">{name}</span>
      </div>

      {/* Pontuação */}
      <div className="text-lg font-bold text-green-600">
        {points} pts
      </div>
    </div>
  );
};

export default RankingRow;
