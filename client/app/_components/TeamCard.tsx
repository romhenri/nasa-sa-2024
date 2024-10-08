import React from 'react';
import Image from 'next/image';

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
  return (<>
    <div className="text-center text-bold">
      <h2>Nosso Time:</h2>
    </div>
    <div className="flex min-w-32 min-h-32 gap-4 justify-center overflow-x-auto p-4">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full"
              width={64}
              height={64}
            />
          </div>
          <p className="text-gray-600 text-sm text-center">
            {member.name}
          </p>
        </div>
      ))}
    </div>
  </>);
};

export default TeamCard;
