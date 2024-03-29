"use client";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder />
      {children}
    </>
  );
};
export default Providers;
