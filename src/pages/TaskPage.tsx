import TaskFilter from "../components/TaskFilter";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function TaskPage() {
  return (
    <div>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
}
