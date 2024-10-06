import Image from "next/image";

const MissionCard = ({ 
  imageUrl,
  ods,
  title,
  description,
  rating,
  points
 }) => {
  return (
    <div className="max-w-md w-full p-4 bg-slate-200 rounded-lg shadow-md flex items-center space-x-4">
      <div className="w-20 h-20 rounded-lg overflow-hidden">
        {/* <Image
          src={imageUrl}
          alt={title}
          width={80}
          height={80}
          className="object-cover"
        /> */}
        <div>
          {ods}
        </div>
      </div>

      {/* Detalhes do produto */}
      <div className="flex-1">
        <h3 className="text-blue-600 font-semibold text-lg">
          {title}
        </h3>
        <p className="text-gray-500">
          {description}
        </p>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-1">
            <span className="text-green-500">★</span>
            <span className="text-sm font-semibold">{rating}</span>
          </div>
          <div className="text-lg font-bold text-gray-700">+ {points} pts</div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;