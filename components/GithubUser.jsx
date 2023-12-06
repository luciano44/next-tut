const GithubUser = async ({ user, time }) => {
  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();

  // console.log({ data });

  await new Promise((resolve) => setTimeout(resolve, time));

  return (
    <div className="bg-slate-600 p-2 rounded-xl my-3">
      <p>User:</p>
      <h1 className="text-2xl font-bold">{data.login}</h1>
      <p>{data.name}</p>
      <img src={data.avatar_url} alt="avatar" className="max-h-10" />
    </div>
  );
};
export default GithubUser;
