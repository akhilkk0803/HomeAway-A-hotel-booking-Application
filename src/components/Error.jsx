import React, { useContext, useEffect } from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { Usercontext } from "../UserContext";

const Error = () => {
  const error = useRouteError();
  const { setuser } = useContext(Usercontext);
  console.log(error);
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  return (
    <div className="text-2xl  flex flex-col">
      Oops an Error Occured
      <NavLink to="/login"> Login in once again</NavLink>
    </div>
  );
};

export default Error;
