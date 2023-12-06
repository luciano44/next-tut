import GithubUser from "@/components/GithubUser";
import { Suspense } from "react";
import "./_css/styles.scss";

const Loading = () => {
  return (
    <div className="rounded-xl bg-slate-50 skeleton-anim">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const page = ({ params }) => {
  console.log(params.user);

  return (
    <>
      <h1 className="text-3xl font-bold my-3">User:</h1>
      <Suspense fallback={<Loading />}>
        <GithubUser user={params.user} />
      </Suspense>
    </>
  );
};
export default page;
