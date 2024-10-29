import MyAccount from "./MyAccount";
import MissionsList from "../_components/MissionsList";

const getRandomVisitorUsername = () => {
  let username = "@visitor_"
  username += Math.floor(Math.random() * 1000);

  return username;
}

export default function ClassPage() {
  return (
    <main className="flex-grow flex justify-start items-center bg-slate-300 px-2 pt-2 pb-20 md:pb-0 gap-2 flex-col overflow-hidden">
      <div className="flex flex-col gap-4 h-full max-h-[calc(100vh-130px)] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300 px-2 pt-2">
        <MyAccount
          name="Visitante"
          username={getRandomVisitorUsername()}
          profileImage="https://avatars.githubusercontent.com/u/55753589?v=4"
          points={450}
          stars={0}
          bio="[Cadastra-se para ter uma bio personalizada!]"
        />
        <div className="border-x-2 border-slate-200">
          <p className="text-center text-sm">
            Missões Concluídas:
          </p>
          <MissionsList missionIds={[3, 4, 7]} />
        </div>
      </div>
    </main>
  );
}