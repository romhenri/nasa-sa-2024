import { 
  ArrowBigUp as AscIcon,
  ArrowBigDown as DesIcon,
  CircleDot as PointIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import ArrowIcon from './ArrowIcon';

import { Baloo_Chettan_2 } from 'next/font/google';

const balooChettan = Baloo_Chettan_2({
  weight: '600',
  subsets: ['latin'],
});
interface RankingRowProps {
  position: number;
  name: string;
  points: number;
  phase: string;
  className?: string;
}

const animationConfig = {
  initial: { opacity: .5, y: -5 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
  whileHover: { x: 5, scale: 1.0 }
};

const RankingRow: React.FC<RankingRowProps> = ({ 
  position, 
  name, 
  points,
  phase,
  className 
}) => {
  return (
    <motion.div
      {...animationConfig}
      className={`flex justify-between items-center p-3 bg-slate-200 rounded-lg shadow-md mb-2 ${className} w-full hover:bg-[#d5dfeb] transition-colors`}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold text-[#20626b]">
          {position}º
        </span>
        <span className="text-md flex items-center space-x-4">
          {name + " "}
          {phase === "asc" && 
            <ArrowIcon
              color="#3e7d4490"
            />
          }
          {phase === "des" && 
            <ArrowIcon
              direction="down"
              color="#991b1b90"
            />
          }
        </span>
      </div>

      <div className={`flex items-center text-md bold text-blue-700 ${balooChettan.className}`}>
        {points}
        <PointIcon
          className="text-blue-700 mx-1"
          size={12}
          strokeWidth={3}
        />
      </div>
    </motion.div>
  );
};

export default RankingRow;
