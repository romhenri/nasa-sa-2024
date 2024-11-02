'use client';

import React from "react";
import { motion } from 'framer-motion';

import { animPopCenter } from "@common/handleAnimations";

interface HomeCardProps {
  title: string;
  description: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ title, description }) => {
  return (
    <motion.div
      {...animPopCenter}
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
