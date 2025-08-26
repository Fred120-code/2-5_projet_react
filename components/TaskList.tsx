import { Trash } from "lucide-react";

type Task = {
  id: number;
  title: string;
};

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;

};

const TaskList = ({ tasks, setTasks }: TaskListProps) => {

  //deleteTask
  function deletedTask(id: number){
    const newTask = tasks.filter((task) => task.id !== id)
    setTasks(newTask)
  }

  return (
    <div className="w-[85%] flex justify-center items-center flex-col gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-700 rounded-2xl flex justify-between p-2 items-center w-full h-[4rem]">
          <div className="bg-gray-800 w-[90%] h-[3.3rem] rounded-xl p-3">
            <h1 className="text-blue-500 text-md font-bold">{task.title}</h1>
          </div>
          <Trash className=" hover:text-red-500 cursor-pointer duration-300" onClick={() => deletedTask(task.id)}/>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
