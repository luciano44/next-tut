const createTask = async (formData) => {
  "use server";
  const content = formData.get("content");
  console.log(content);
};

const taskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here"
          className="input input-bordered join-item w-full"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  );
};
export default taskForm;
