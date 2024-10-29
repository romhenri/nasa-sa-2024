'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  CircleDot as PointIcon,
  Star as StarIcon,
} from 'lucide-react';

import { Baloo_Chettan_2 } from 'next/font/google';

const balooChettan = Baloo_Chettan_2({
  weight: '600',
  subsets: ['latin'],
});

interface AccountPageProps {
  name: string;
  username: string;
  profileImage: string;
  points: number;
  stars: number;
  bio?: string;
}

const animationConfig = {
  initial: { opacity: 1, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: 'easeOut' },
  whileHover: { scale: 1.0 },
};

const MyAccount: React.FC<AccountPageProps> = ({ 
  name,
  username,
  profileImage,
  points,
  stars,
  bio = "Nenhuma biografia fornecida."
}) => {
  return (
    <motion.div
      {...animationConfig}
      className="max-w-2xl w-full p-4 bg-slate-200 rounded-lg shadow-md flex flex-col items-center"
    >
      <div className="relative w-full h-32 bg-cover bg-center rounded-lg mb-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582741099331-e0918de0565f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-[#20626b]">
          <Image 
            src={profileImage}
            alt={`${name}'s profile picture`}
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-[#20626b] font-semibold text-2xl">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">{username}</p>
      </div>

      <div className="flex justify-center items-center w-72 mt-4 rounded-md shadow-md font-bold">
        <div className={`flex items-center text-md text-blue-700 p-2 ${balooChettan.className}`}>
          <span className="">{points}</span>
          <PointIcon
            className="text-blue-700 ml-1"
            size={12}
            strokeWidth={3}
          />
        </div>
        <div className={`flex items-center text-md text-yellow-500 p-2 ${balooChettan.className}`}>
          <span className="">{stars}</span>
          <StarIcon 
            className="mx-1" 
            size={16} 
            strokeWidth={2.5}
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 text-sm text-center">
          {bio}
        </p>
      </div>
    </motion.div>
  );
};

export default MyAccount;
