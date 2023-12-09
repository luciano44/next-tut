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
  return (
    <form action={deleteTaskCustom}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
};
export default DeleteFormCustom;
