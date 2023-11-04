import React, { useContext } from "react";
import { Usercontext } from "../UserContext";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import Profile from "./Profile";
import Accomodation from "./Accomodation";
import Bookings from "./Bookings";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { motion } from "framer-motion";
import BedIcon from "@mui/icons-material/Bed";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
const Account = () => {
  const { user, ready } = useContext(Usercontext);
  const { subpage } = useParams();
  const navigate = useNavigate();

  if (!ready) {
    return "...loading";
  }
  if (ready && !user) {
    return navigate("/login");
  }
  return (
    <>
      <div className="flex justify-around items-center w-full  overflow-auto gap-6 mb-3">
        <NavLink
          to="/account"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              padding: "11px 16px",
              borderRadius: "30px",
              backgroundColor: !subpage ? "#F31559" : "",
              color: !subpage ? "white" : "black",
              textDecoration: isActive ? "green" : "none",
            };
          }}
        >
          <div className="flex md:flex-row  flex-col items-center sm:px-5 sm:py-3 md:py-2 md:px-4 gap-2">
            <div>
              <PermIdentityIcon />
            </div>
            <div>My Profile</div>
          </div>
        </NavLink>
        <NavLink
          to="/account/bookings"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              borderRadius: "30px",
              padding: "11px 16px",

              backgroundColor: isActive ? "#F31559" : "",
              color: isActive ? "white" : "black",
              textDecoration: isActive ? "green" : "none",
            };
          }}
        >
          <div className="flex md:flex-row  sm:text-sm text-xs flex-col justify-center items-center md:py-2 md:px-4 gap-2">
            <MenuOpenIcon />
            My Bookings
          </div>
        </NavLink>
        <NavLink
          to="/account/places"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              borderRadius: "30px",
              padding: "11px 16px",

              backgroundColor: isActive ? "#F31559" : "",
              color: isActive ? "white" : "black",
              textDecoration: isActive ? "green" : "none",
            };
          }}
        >
          <div className="flex md:flex-row  flex-col  items-center md:py-2 md:px-4 gap-2">
            <BedIcon />
            My Accomodation
          </div>
        </NavLink>
      </div>
      {!subpage && <Profile />}
      {subpage === "places" && <Accomodation />}
      {subpage === "bookings" && <Bookings />}
    </>
  );
};

export default Account;
