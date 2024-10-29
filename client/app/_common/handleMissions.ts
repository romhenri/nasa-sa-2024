export const getStatusText = (status: "done" | "doing" | "todo"): { text: string; color: string } => {
    switch (status) {
      case "done":
        return { text: "Concluída!", color: "text-green-600" };
      case "doing":
        return { text: "Pendente!", color: "text-yellow-600" };
      case "todo":
        return { text: "Pendente!", color: "text-red-600" };
      default:
        return { text: "Pendente!", color: "text-gray-600" };
    }
};