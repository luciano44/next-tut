"use client";

import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        required
        defaultValue={content}
        className="input input-bordered w-full"
      />
      {/* completed */}
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        edit
      </button>
    </form>
  );
};
export default EditForm;

// const EditForm = ({ task }) => {
//   console.log(task);
//   return (
//     <div className="bg-slate-300 w-fit p-3 rounded-xl mt-3">
//       <form action={editTask}>
//         <div className="bg-slate-900 p-3 w-fit rounded-xl mb-1">
//           <small>{task.id}</small>
//           <h1 className="text-2xl">{task.content}</h1>
//         </div>
//         <p className="text-gray-950 font-bold">Edit task</p>
//         <input type="hidden" name="id" value={task.id} />
//         <input
//           type="text"
//           name="content"
//           className="mb-1 rounded-xl pl-2 w-full"
//         />
//         <br />
//         <button type="submit" className="btn btn-secondary btn-xs">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };
// export default EditForm;
