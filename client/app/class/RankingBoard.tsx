"use client";

import { useEffect, useState } from 'react';
import RankingRow from './RankingRow';

interface RankingData {
  name: string;
  score: number;
  phase: string;
}

interface RankingBoardProps {
  rankingData: RankingData[];
}

export default function RankingBoard({ rankingData }: RankingBoardProps) {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;
    setCurrentDate(formattedDate);

    const calculateTimeRemaining = () => {
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = endOfDay.getTime() - new Date().getTime();

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeRemaining(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-4 w-full">
      <div className="flex text-md font-[550] justify-between text-center text-slate-600 mb-2 mx-2">
        <div>
          Classificação
          {" " + currentDate}:
        </div>
        <div>
          {timeRemaining}
        </div>
      </div>

      {rankingData.map((person, index) => (
        <RankingRow
          key={index}
          position={index + 1}
          name={person.name}
          points={person.score}
          phase={person.phase}
          className={`${
            index === 0 || index === 1 || index === 2
              ? 'border-4 border-yellow-400'
              : ''
          }`}
        />
      ))}
    </div>
  );
}
