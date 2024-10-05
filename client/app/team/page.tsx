
'use client'

import { useState } from "react";
import ProfileCard from "../../components/ui/profile-card";
import LineTitle from "../../components/ui/line-title";
import { Line } from "../../components/ui/line";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { on } from "events";

// @ts-nocheck
const About = () => {
  const [isSeriousMode, setIsSeriousMode] = useState(true);

  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Lari & Outros
      </LineTitle>
      <Line />
        <div className="flex items-center justify-between space-x-2">

        <Label 
          htmlFor="airplane-mode"
        >
          <p className="text-xs pr-2">
            Modo Sério
          </p>
        </Label>
        <Switch 
          id="airplane-mode"
          checked={isSeriousMode}
          onCheckedChange={() => setIsSeriousMode(!isSeriousMode)}
        />
          
        </div>
      <Line />

      <div className="flex gap-2 mx-auto justify-center
       flex-col md:flex-row flex-wrap mb-4">
        <ProfileCard 
          name="Rômulo Henrique"
          bio={
            isSeriousMode
              ? "Tech Leader"
              : "AAAAAAA"
          }
          image="https://assets.spaceappschallenge.org/media/images/1689333545287.2e16d0ba.fill-64x64.jpg"
          />

        <ProfileCard
          name="Larissa Donato"
          bio={
            isSeriousMode
              ? "Gerente de Comunicação | Designer"
              : "AAAAAAA"
          }
          image="https://assets.spaceappschallenge.org/media/images/73b9c47cff9e95d2510d25d1b07cf6de.2e16d0ba.fill-64x64.jpg"
        />

        <ProfileCard
          name="Andrea Moreira"
          bio={
            isSeriousMode
              ? "Gerente de Projeto"
              : "AAAAAAA"
          }
          image="https://assets.spaceappschallenge.org/media/images/1000102908_Rd6h6GZ.2e16d0ba.fill-64x64.jpg"
        />

        <ProfileCard
            name="Sabrina Lopes"
            bio={
              isSeriousMode
                ? "Consultora Técnica"
                : "AAAAAAA"
            }
            image="https://assets.spaceappschallenge.org/media/images/IMG_20240816_022215_473.2e16d0ba.fill-64x64.jpg"
        />

        <ProfileCard
          name="Luís Eduardo"
          bio={
            isSeriousMode
              ? "Desenvolvedor"
              : "AAAAAAA"
          }
          image="https://assets.spaceappschallenge.org/media/images/Luis_WqiSFKh.2e16d0ba.fill-64x64.jpg"
        />
      </div>

      <Line />
    </main>
  )
};

export default About;
