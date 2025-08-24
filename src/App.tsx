import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Task 1",
      date: "19 Aug 2025",
      time: "10:10",
    },
    {
      id: 2,
      title: "Task 2",
      date: "23 Aug 2025",
      time: "10:10",
    },
  ]);

  return (
    <div className=" w-[400px] flex justify-center items-center flex-col m-60 gap-6">
      <TaskInput />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
