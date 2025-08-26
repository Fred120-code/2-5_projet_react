import { Trash } from "lucide-react";

type Task = {
  id: number;
  title: string;
  completed?: boolean;
};

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  //deleteTask
  function deletedTask(id: number) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  //toggle complete
  //   Cette fonction prend en paramètre l’id d’une tâche.
  // Elle utilise setTasks pour mettre à jour la liste des tâches.
  // Elle parcourt toutes les tâches avec tasks.map(...).
  // Pour chaque tâche :
  // Si l’id de la tâche correspond à celui passé en paramètre (task.id === id), elle crée une nouvelle tâche identique (...task) mais inverse la valeur de la propriété completed (completed: !task.completed).
  // → Si la tâche était cochée, elle devient décochée, et inversement.
  // Si l’id ne correspond pas, elle laisse la tâche inchangée.
  // Résultat : seule la tâche dont l’id correspond voit son état completed modifié, toutes les autres restent identiques.
  // En résumé :
  // Cette fonction permet d’activer ou désactiver l’état « complétée » d’une tâche en cliquant sur la checkbox, en mettant à jour la liste des tâches de façon réactive.

  function toggleCompleted(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <div className="w-[85%] flex justify-center items-center flex-col gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-700 rounded-2xl flex justify-between p-2 items-center w-full h-[4rem]"
        >
          <input
            type="checkbox"
            checked={!!task.completed}
            className="checkbox checkbox-info "
            onChange={() => {
              toggleCompleted(task.id);
            }}
          />
          <div className="bg-gray-800 w-[80%] h-[3.3rem] rounded-xl p-3">
            <h1
              className={`text-blue-500 text-md font-bold ${
                task.completed ? "line-through text-red-600" : "text-blue-500"
              }`}
            >
              {task.title}
            </h1>
          </div>
          <Trash
            className=" hover:text-red-500 cursor-pointer duration-300"
            onClick={() => deletedTask(task.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
