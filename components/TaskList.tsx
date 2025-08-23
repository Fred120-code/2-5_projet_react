import { Trash } from "lucide-react";

const TaskList = () => {
  let tasksArr = [
    {
      id: 1,
      title: "Task 1",
      description: "task 1 description",
      date: "19 Aug 2025",
      time: "10:10",
    },
    {
      id: 2,
      title: "Task 2",
      description: "task 2 description",
      date: "23 Aug 2025",
      time: "10:10",
    },
    {
      id: 3,
      title: "Task 3",
      description: "task 3 description",
      date: "23 Aug 2025",
      time: "10:10",
    },
    {
      id: 4,
      title: "Task 4",
      description: "task 4 description",
      date: "23 Aug 2025",
      time: "10:10",
    },
  ];

  return (
    <div className="w-[85%] flex justify-center items-center flex-col gap-4">
      {tasksArr.map((data, index) => (
        <div className="bg-gray-700 rounded-2xl flex justify-between p-2 items-center w-full h-[7rem]">
          <div className="bg-gray-800 w-[90%] h-[6rem] rounded-xl p-2">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <Trash className=" hover:text-red-500 cursor-pointer duration-300" />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
