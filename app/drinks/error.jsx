"use client";
const Error = (error) => {
  return (
    <>
      <h1 className="text-7xl font-bold ">Error 404</h1>
      <br />
      <p>Everything went absolutely wrong.</p>
      <small className="opacity-60">{error.error.message}</small>
    </>
  );
};
export default Error;
