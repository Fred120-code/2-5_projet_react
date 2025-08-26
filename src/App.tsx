import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

type Task= {
  id: number;
  title: string;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className=" w-[400px] flex justify-center items-center flex-col m-60 gap-6">
      <TaskInput tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
