"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getODSColor } from '@common/handleODS';
import { getStatusText } from '@common/handleMissions';

import { MissionCardProps } from '@/types/MissionProps';

import {
  CircleDot as PointIcon,
} from 'lucide-react';

import { Baloo_Chettan_2 } from 'next/font/google';

const balooChettan = Baloo_Chettan_2({
  weight: '600',
  subsets: ['latin'],
});

const MissionCard: React.FC<MissionCardProps> = ({ 
  id,
  ods = 0,
  title,
  summary,
  rating,
  points,
  status = "todo",
  anim = "center"
}) => {
  const router = useRouter();
  const statusInfo = getStatusText(status);

  const handleClick = () => {
    router.push(`/missions/${id}`);
  };

  const animationConfig =
    anim === "right"
      ? {
          initial: { opacity: 0, x: -11 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.2, ease: "easeOut" },
          whileHover: { x: 5 },
          whileTap: { x: 15 },
        }
      : {
          initial: { opacity: .5, scale: 0.98 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, ease: "easeOut" },
          whileHover: { scale: 1 },
          whileTap: { scale: 0.95 },
        };

  return (
    <motion.div 
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d"
      }}
      onClick={handleClick}
      {...animationConfig}
      className="max-w-md w-full p-2 bg-slate-200 rounded-lg shadow-md flex items-center space-x-4 min-h-[104px] cursor-pointer hover:bg-[#d2dde9] transition-colors"
    >
      <div className="w-16 h-full rounded-lg overflow-hidden flex justify-center flex-col items-center">
        <div
          className={`w-12 h-12 ${getODSColor(ods)} rounded shadow-lg flex items-center justify-center text-white font-bold text-xl mt-2`}
        >
          {ods}
        </div>
        <div className={`flex text-xs font-bold text-blue-700  mt-2 items-center ${balooChettan.className}`}>
          {points}
          <PointIcon
            className="ml-1"
            size={12}
            strokeWidth={3}
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-[#20626b] flex font-semibold text-md">
            {title}
          </h3>
        </div>

        <p className="text-gray-500 text-xs line-clamp-2 min-h-[32px]">
          {summary}
        </p>

        <div className="flex justify-between mt-2 items-baseline">
          <div className="flex items-center space-x-1">
            <div>
              <span className="text-green-600">★</span>
              <span className="text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <div className={`w-28 mt-0 text-xs uppercase ${statusInfo.color}`}>
            <div
              className={`${
                status === 'done'
                  ? 'bg-[#65ac88] text-gray-200' 
                  : status === 'todo'
                  ? 'border-2 border-gray-300 text-gray-500' 
                  : status === 'doing'
                  ? 'border-2 border-gray-300 text-gray-500' 
                  : 'bg-[#2d8f5e90]'
              } text-center rounded`}
            >
              {statusInfo.text}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCard;
