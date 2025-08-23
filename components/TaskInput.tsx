import { useState } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");
  return (
    <div className="flex justify-center items-center gap-6">
      <div className="flex justify-center flex-col gap-1">
        <input
          type="text"
          placeholder="Type here"
          className="input input-primary"
          onChange={(e)=>{
            setTask(e.target.value)
          }}
        />
      </div>
      <div>
        <button className="btn btn-primary	">Ajouter</button>
      </div>
    </div>
  );
};

export default TaskInput;
