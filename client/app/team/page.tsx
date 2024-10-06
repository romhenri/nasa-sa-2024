'use client'

import { useState } from "react";
import ProfileCard from "../../components/ui/profile-card";
import { Line } from "../../components/ui/line";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

const About = () => {
  const [isSeriousMode, setIsSeriousMode] = useState(true);

  return (
    <div className="flex flex-col h-full w-full">
      <Header>
        Nosso Time
      </Header>

      <main className="flex-grow bg-slate-300">
        <Line />

        <div className="flex gap-2 mx-auto justify-center flex-col md:flex-row flex-wrap mb-4 px-4">
          <ProfileCard
            name="Andrea Moreira"
            bio={isSeriousMode 
              ? "Gerente de Projeto" 
              : "Oxe"
            }
            image="https://assets.spaceappschallenge.org/media/images/1000102908_Rd6h6GZ.2e16d0ba.fill-64x64.jpg"
          />

          <ProfileCard
            name="Larissa Donato"
            bio={isSeriousMode 
              ? "Gerente de Comunicação" 
              : "Entidade Cósmica"
            }
            image="https://assets.spaceappschallenge.org/media/images/73b9c47cff9e95d2510d25d1b07cf6de.2e16d0ba.fill-64x64.jpg"
          />

          <ProfileCard
            name="Sabrina Lopes"
            bio={isSeriousMode 
              ? "Consultora Técnica" 
              : "Army"
            }
            image="https://assets.spaceappschallenge.org/media/images/IMG_20240816_022215_473.2e16d0ba.fill-64x64.jpg"
          />

          <ProfileCard
            name="Luís Eduardo"
            bio={isSeriousMode 
              ? "Desenvolvedor" 
              : "Fã de Kobold"
            }
            image="https://assets.spaceappschallenge.org/media/images/Luis_WqiSFKh.2e16d0ba.fill-64x64.jpg"
          />
          
          <ProfileCard 
            name="Rômulo Henrique"
            bio={isSeriousMode 
              ? "Tech Leader" 
              : "Pro-player de Minecraft"
            }
            image="https://assets.spaceappschallenge.org/media/images/1689333545287.2e16d0ba.fill-64x64.jpg"
          />          
        </div>

        <Line />
      </main>

      <NavBar />
    </div>
  );
};

export default About;
