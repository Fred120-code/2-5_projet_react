import { useState } from "react";

type Task = {
  id: number;
  title: string;
};

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskInput = ({ tasks, setTasks }: TaskListProps) => {
  const [name, setName] = useState("");

  //add task
  function addTask() {
    if (name.trim() == "") {
      alert("veuiller entre le nom de votre tache");
    }

    const newTask: Task = {
      id: Date.now(),
      title: name.trim(),
    };

    const newTasks = [newTask, ...tasks];
    setTasks(newTasks), setName("");
    console.log(newTasks);
  }

  
  return (
    <div className="flex justify-center items-center gap-6">
      <div className="flex justify-center flex-col gap-1">
        <input
          type="text"
          placeholder="Type here"
          className="input input-primary focus:outline-none placeholder:italic"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={addTask}>
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
