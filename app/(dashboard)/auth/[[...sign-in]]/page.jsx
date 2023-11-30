const SignInPage = ({ params }) => {
  console.log(params);
  return <h1 className="text-7xl">SignInPage, params: {params["sign-in"]}</h1>;
};
export default SignInPage;
