const ClassCard = ({ 
  title,
  teacher,
  school,
  year,
  classScore
 }) => {
  return (
    <div className="
      max-w-md w-full min-w-[94%]
      p-4 mx-4 mt-4
      flex justify-center
      bg-white rounded-lg shadow-md flex-col space-y-2">
      {/* Nome da Turma */}
      <h4 className="text-blue-600 font-semibold text-xl">
        {title} - Turma {year}
      </h4>

      {/* Nome do Professor */}
      <p className="text-gray-600">
        Professor: 
        <span className="font-bold">
          {" " + teacher}
        </span>
      </p>

      {/* Nome da Escola */}
      <p className="text-gray-600">
        Escola: <span className="font-bold">{school}</span>
      </p>

      <hr />

      {/* Pontuação da Turma */}
      <p className="text-gray-600">
        Pontuação da Turma: 
        <span className="font-bold">
          {" " + classScore} pts
        </span>
      </p>

    </div>
  );
};

export default ClassCard;