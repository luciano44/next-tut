"use client";
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary join-item" disabled={pending}>
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const TaskForm = async () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here"
          className="input input-bordered join-item w-full"
          name="content"
          required
        />
        {/* <button type="submit" className="btn btn-primary join-item">
          create task
        </button> */}
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;
