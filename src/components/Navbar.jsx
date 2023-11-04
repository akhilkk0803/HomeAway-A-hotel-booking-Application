import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Usercontext } from "../UserContext";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
const Navbar = () => {
  const { user } = useContext(Usercontext);
  return (
    <div className="shadow">
      <div className="flex justify-around w-full  sm:flex-row gap-2 flex-col p-4  items-center">
        <Box display="flex" alignItems="center">
          <NavLink to="/">
            <img className="logo" src={logo} alt="airbnbLogo" />
          </NavLink>
          <Typography
            variant="h6"
            color="red"
            sx={{
              fontWeight: "bold",
            }}
          >
            HomeAway
          </Typography>
        </Box>

        <div className=" hidden md:block">
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              component={motion.div}
              whileHover={{
                y: -2,
                x: 1,
              }}
            >
              <Typography variant="body" color="initial">
                HomeAway your home
              </Typography>
            </Button>
          </NavLink>
        </div>

        <div>
          <NavLink
            to={user ? "/account" : "/login"}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Stack
              sx={{
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              }}
              flexDirection="row"
              gap={1}
              component={motion.div}
              whileHover={{
                x: 1,
                y: -2,
              }}
            >
              <MenuIcon />
              <PersonIcon />
              {!!user && (
                <Typography variant="subtitle2" color="initial">
                  {user.name}
                </Typography>
              )}
            </Stack>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
