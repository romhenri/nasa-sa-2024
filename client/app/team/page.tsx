'use client'

import { useState } from "react";
import ProfileCard from "@radix/profile-card";
import { Line } from "@radix/line";

import TEAM_DATA from '@data/team.json';

const About = () => {
  const [isSeriousMode, setIsSeriousMode] = useState(true);

  return (
    <main className="flex-grow bg-slate-300">
      <Line />

      <div className="flex gap-2 mx-auto justify-center flex-col md:flex-row flex-wrap mb-4 px-4">
        {TEAM_DATA.map((member, index) => (
          <ProfileCard 
            key={index}
            name={member.name}
            bio={isSeriousMode 
              ? member.bio 
              : "Oxe"
            }
            image={member.image}
          />
        ))}
      </div> 

      <Line />
    </main>
  );
};

export default About;
