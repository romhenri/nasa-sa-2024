import React from 'react';

import { Card } from './card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./avatar";

interface IProfileCard {
  name: string;
  bio?: string;
  image?: string;
  email?: string;
};

const ProfileCard : React.FC<IProfileCard>  = (
  { name, bio, image, email }
) => {
  return (
    <Card className="flex items-start py-4 px-3 gap-4 w-full 
    bg-slate-200 border-gray-300">
      <div>
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </div>
      {/* Div with text */}
      <div>
        <h2>{name}</h2>
        <p className="text-neutral-500 text-sm">
          {bio}
        </p>

        {
          email && <p>{email}</p>
        }

      </div>
    </Card>
  )
};

export default ProfileCard;