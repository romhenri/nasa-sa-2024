'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import TEAM_DATA from '@data/team.json';

const variants = {
  hidden: {
    opacity: 0.5,
    y: 3,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface TeamMember {
  name: string;
  bio: string;
  image: string;
}

// const teamMembers: TeamMember[] = 

const TeamCard: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/team');
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-slate-200 max-w-md w-full min-w-[93%] p-4 rounded-lg shadow-md flex items-center flex-col cursor-pointer hover:bg-slate-300 transition-colors"
    >
      <div className="">
        <h2 className="text-center text-bold pb-2">
          Nosso Time:
        </h2>
      </div>
      <motion.div
        className="flex min-h-24 gap-4 justify-center overflow-x-auto"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {TEAM_DATA.map((member, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div
              className="w-[48px] h-[48px] min-w-[32px] min-h-[32px] rounded-full overflow-hidden border-2 border-gray-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
                width={720}
                height={720}
              />
            </div>
            <p className="text-gray-600 text-xs text-center">
              {member.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamCard;
