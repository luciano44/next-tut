import { EditTask, getTask } from "@/utils/actions";
import EditForm from "@/components/EditForm";
import Link from "next/link";

const SingleTask = async ({ params }) => {
  const task = getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
};
export default SingleTask;
