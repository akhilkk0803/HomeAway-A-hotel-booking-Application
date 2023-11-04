import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../UserContext";
const Root = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <div className="p-3 sm:p-7 ">
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

export default Root;
