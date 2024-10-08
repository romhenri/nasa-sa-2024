interface ClassCardProps {
  title: string;
  teacher: string;
  school: string;
  year: number;
  classScore: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ 
  title,
  teacher,
  school,
  year,
  classScore
}) => {
  return (
    <div className="
      max-w-md w-full min-w-full
      p-4 mx-4 mt-4
      flex justify-center
      bg-slate-200 rounded-lg shadow-md flex-col space-y-2">
      <h4 className="text-blue-600 font-semibold text-xl">
        {title} - Turma {year}
      </h4>

      <p className="text-gray-600">
        Professor: 
        <span className="font-bold">{" " + teacher}</span>
      </p>

      <p className="text-gray-600">
        Escola: <span className="font-bold">{school}</span>
      </p>

      <hr />

      <p className="text-gray-600">
        Pontuação da Turma: 
        <span className="font-bold">{" " + classScore} pts</span>
      </p>
    </div>
  );
};

export default ClassCard;