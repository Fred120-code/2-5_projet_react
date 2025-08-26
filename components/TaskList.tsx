import { Trash } from "lucide-react";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
};

type TaskListProps = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskListProps) => {

  return (
    <div className="w-[85%] flex justify-center items-center flex-col gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-700 rounded-2xl flex justify-between p-2 items-center w-full h-[7rem]">
          <div className="bg-gray-800 w-[90%] h-[6rem] rounded-xl p-3">
            <h1 className="text-blue-500 text-md font-bold">{task.title}</h1>
          </div>
          <Trash className=" hover:text-red-500 cursor-pointer duration-300" />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
