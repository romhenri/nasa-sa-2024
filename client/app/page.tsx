'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import HomeCard from './overview/_components/HomeCard';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/overview');
  }, [router]);

  return (
    <main className="flex-grow bg-slate-300 flex flex-col items-center gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 md:p-0 px-4">
      <HomeCard
        title="Seja bem-vindo(a)!"
        description="plataforma proporciona uma experiência gamificada a alunos do ensino médio, sob a supervisão de seus professores, a fim de educá-los sobre os Objetivos de Desenvolvimento Sustentável (ODS) por meio de atividades práticas e experimentos do Protocolo GLOBE."
      />
    </main>
  );
}
