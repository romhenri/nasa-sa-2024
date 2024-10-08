'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import NavBar from "./_components/NavBar";
import Header from "./_components/Header";

import HomeCard from './_components/HomeCard';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/overview');
  }, [router]);

  return (
    <main className="flex-grow bg-slate-300">
      <HomeCard
        title="Meta Verde"
        description="O Meta Verde é um projeto que visa a preservação do meio ambiente e a conscientização da população sobre a importância da preservação do meio ambiente."
      />
    </main>
  );
}
