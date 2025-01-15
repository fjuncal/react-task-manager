import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import TaskPage from "./pages/TaskPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import { TaskProvider } from "./context/TaskContextType";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Gerenciador de Tarefas</h1>
        <div>
          <TaskProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<TaskPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/task/:id" element={<TaskDetailsPage />} />
            </Routes>
          </TaskProvider>
        </div>
      </div>
    </>
  );
}

export default App;
