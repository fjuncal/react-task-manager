import { Task } from "../types/Task";

interface TaskListProps {
  task: Task[];
}

export default function TaskList({ task }: TaskListProps) {
  return (
    <>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {task.text} {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </>
  );
}
