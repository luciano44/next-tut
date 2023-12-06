import GithubUser from "@/components/GithubUser";
import { Suspense } from "react";

import "./_css/styles.scss";
const Loading = () => {
  return (
    <div className="rounded-xl bg-slate-50 skeleton-anim my-3">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const page = async ({ params }) => {
  // await new Promise((resolve) => setTimeout(resolve, 1200));

  return (
    <>
      <h1 className="text-3xl font-bold my-3">User:</h1>
      <Suspense fallback={<Loading />}>
        <GithubUser user={params.user} time={1000} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <GithubUser user={"ads"} time={3000} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <GithubUser user={"diego3g"} time={1500} />
      </Suspense>
    </>
  );
};
export default page;
