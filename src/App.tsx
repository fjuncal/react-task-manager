import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Task } from "./types/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Estudar React com TypeScript	", completed: false },
    { id: 2, text: "Fazer exercícios", completed: true },
  ]);

  const addTask = (text: string) => {
    const newTask = { id: tasks.length + 1, text, completed: false };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Gerenciador de tarefas</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList task={tasks} onToggleTask={toggleTask} />
      </div>
    </>
  );
}

export default App;
