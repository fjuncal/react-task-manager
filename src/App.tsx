import GlobalStyles from "./styles/GlobalStyles";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContextType";
import TaskFilter from "./components/TaskFilter";

function App() {
  return (
    <>
      <GlobalStyles />
      <TaskProvider>
        <div>
          <h1>Gerenciador de Tarefas</h1>
          <TaskForm />
          <TaskFilter />
          <TaskList />
        </div>
      </TaskProvider>
    </>
  );
}

export default App;
