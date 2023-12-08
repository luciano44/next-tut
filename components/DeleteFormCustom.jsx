"use client";
import { deleteTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { toast } from "react-hot-toast";

const initialState = {
  message: null,
};

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "deleting..." : "delete"}
    </button>
  );
};

const DeleteFormCustom = ({ id }) => {
  // const [state, formAction] = useFormState(deleteTaskCustom, initialState);

  // useEffect(() => {
  //   console.log({ state });
  //   if (state.message === "error") {
  //     toast.error("Error, Task not Deleted");
  //     return;
  //   }
  //   if (state.message) {
  //     toast.success("Task Deleted");
  //     return;
  //   }
  // }, [state]);

  return (
    <form action={deleteTaskCustom}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
};
export default DeleteFormCustom;
