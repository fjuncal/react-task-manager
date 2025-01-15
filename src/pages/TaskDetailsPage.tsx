import { useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContextType";

export default function TaskDetailsPage() {
  const { id } = useParams();
  const { tasks } = useTaskContext();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return <p>Tarefa não encontrada.</p>;
  }

  return (
    <div>
      <h2>Detalhes da Tarefa</h2>
      <p>
        <strong>ID:</strong> {task.id}
      </p>
      <p>
        <strong>Descrição:</strong> {task.text}
      </p>
      <p>
        <strong>Status:</strong> {task.completed ? "Concluída" : "Ativa"}
      </p>
    </div>
  );
}
