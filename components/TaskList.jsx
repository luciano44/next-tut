import Link from "next/link";
import DeleteFormCustom from "./DeleteFormCustom";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();

  const NoTaskElement = (
    <h2 className="mt-8 font-medium text-lg">No Tasks to Show</h2>
  );

  if (tasks.length === 0) return NoTaskElement;

  return (
    <ul className="mt-8 ">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex justify-between items-center px-6 py-4 mb-4 border-base-300 rounded-lg shadow-lg"
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through" : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-accent btn-xs"
              >
                edit
              </Link>
              <DeleteFormCustom id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
