import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full"> {/* h-full e w-full fazem com que o div ocupe o tamanho do contêiner pai */}
      
      {/* Header com tamanho fixo */}
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

      {/* Main que cresce para ocupar o espaço restante */}
      <main className="flex-grow bg-slate-100">
        a
      </main>

      <NavBar/>
    </div>
  );
}
