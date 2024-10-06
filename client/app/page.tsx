'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavBar from "./_components/NavBar";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/overview');
  }, [router]);

  return (
    <div className="flex flex-col h-full w-full"> 
      <div className={`
        w-full
        h-16 /* Define a altura fixa do header */
        flex justify-center items-center 
      `}>
        <h1
          className={`text-xl font-bold`}
        >
          Home
        </h1>
      </div>

      <main className="flex-grow bg-gblue-100">
        a
      </main>

      <NavBar/>
    </div>
  );
}
