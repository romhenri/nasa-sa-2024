'use client'

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const variants = {
  hidden: {
    opacity: .5,
    y: 3
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
interface TeamMember {
  name: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andrea Moreira',
    bio: 'Gerente de Projeto',
    image: 'https://assets.spaceappschallenge.org/media/images/1000102908_Rd6h6GZ.2e16d0ba.fill-64x64.jpg',
  },
  {
    name: 'Larissa Donato',
    bio: 'Gerente de Comunicação',
    image: 'https://assets.spaceappschallenge.org/media/images/IMG_20240311_085631_491.2e16d0ba.fill-64x64.jpg',
  },
  {
    name: 'Sabrina Lopes',
    bio: 'Consultora Técnica',
    image: 'https://assets.spaceappschallenge.org/media/images/IMG_20240816_022215_473.2e16d0ba.fill-64x64.jpg',
  },
  {
    name: 'Luís Eduardo',
    bio: 'Desenvolvedor',
    image: 'https://assets.spaceappschallenge.org/media/images/Luis_WqiSFKh.2e16d0ba.fill-64x64.jpg',
  },
  {
    name: 'Rômulo Henrique',
    bio: 'Tech Leader',
    image: 'https://assets.spaceappschallenge.org/media/images/1689333545287.2e16d0ba.fill-64x64.jpg',
  },
];

const TeamCard: React.FC = () => {
  return (<div className="bg-slate-200 max-w-md w-full min-w-[93%] p-4 rounded-lg shadow-md flex items-center flex-col">
    <div className="">
      <h2
        className="text-center text-bold pb-2"
      >
        Nosso Time:
      </h2>
    </div>
    <motion.div 
      className="flex min-h-24 gap-4 justify-center overflow-x-auto"
      initial="hidden" 
      animate="visible" 
      variants={variants}
    >
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <div className="
            w-[48px] h-[48px]
            min-w-[32px] min-h-[32px] 
            rounded-full overflow-hidden border-2 border-gray-300
          ">
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
  </div>);
};

export default TeamCard;
