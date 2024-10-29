'use client';

import React from "react";
import { motion } from 'framer-motion';

interface HomeCardProps {
  title: string;
  description: string;
}

const animationConfig = {
  initial: { opacity: 1, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: 'easeOut' },
  whileHover: { scale: 1.0 },
};

const HomeCard: React.FC<HomeCardProps> = ({ title, description }) => {
  return (
    <motion.div
      {...animationConfig}
      className="max-w-md w-full min-w-[93%] p-4 mt-4 bg-[#338F9B30] rounded-lg shadow-md flex items-center space-x-4"
    >
      <div className="flex-1">
        <h3 className="text-[#20626b] font-semibold text-lg">
          {title}
        </h3>
        <p className="text-gray-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default HomeCard;
