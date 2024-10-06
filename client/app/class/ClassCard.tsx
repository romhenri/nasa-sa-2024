const ClassCard = ({ 
  className,
  teacherName,
  schoolName,
  year
 }) => {
  return (
    <div className="max-w-md w-full p-4 flex justify-center bg-white rounded-lg shadow-md flex-col space-y-2 m-4">
      {/* Nome da Turma */}
      <h3 className="text-blue-600 font-semibold text-xl">
        {className}
      </h3>

      {/* Nome do Professor */}
      <p className="text-gray-600">
        Professor: <span className="font-bold">{teacherName}</span>
      </p>

      {/* Nome da Escola */}
      <p className="text-gray-600">
        Escola: <span className="font-bold">{schoolName}</span>
      </p>

      {/* Ano */}
      <p className="text-gray-600">
        Ano: <span className="font-bold">{year}</span>
      </p>
    </div>
  );
};

export default ClassCard;
