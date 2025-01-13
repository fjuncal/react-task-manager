import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Task } from "./types/Task";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Estudar React com TypeScript	", completed: false },
    { id: 2, text: "Fazer exercícios", completed: true },
  ]);
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Gerenciador de tarefas</h1>
        <TaskList task={tasks} />
      </div>
    </>
  );
}

export default App;
