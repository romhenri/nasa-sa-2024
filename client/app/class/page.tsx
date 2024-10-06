import Image from "next/image";
import Header from "../_components/Header";
import NavBar from "../_components/NavBar";

import ClassCard from "./ClassCard";
import RankingBoard from "./RankingBoard";

export default function Overview() {
  return (
    <div className="flex flex-col h-full w-full"> 
      <Header>
        Turma
      </Header>

      <main className="flex-grow bg-gblue-100">
        <ClassCard
          title="Aula 1"
          description="Aula de introdução ao React"
          date="20/09/2021"
          time="19:00"
        />
        <RankingBoard/>
      </main>

      <NavBar/>
    </div>
  );
}
