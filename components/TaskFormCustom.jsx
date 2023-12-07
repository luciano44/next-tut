"use client";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { toast } from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary join-item" disabled={pending}>
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an Error");
      return;
    }
    if (state.message) {
      toast.success("Task Created");
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* {state.message && <p className="mb-2 text-orange-300">{state.message}</p>} */}
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here"
          className="input input-bordered join-item w-full"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskFormCustom;
