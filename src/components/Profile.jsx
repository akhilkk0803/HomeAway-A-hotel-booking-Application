import React, { useContext } from "react";
import { Usercontext } from "../UserContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setuser } = useContext(Usercontext);
  const navigate = useNavigate();
  const logouthandler = () => {
    localStorage.removeItem("token");
    setuser(null);
    navigate("/login");
  };
  return (
    <Stack justifyContent="center" alignItems="center" gap={2}>
      <Typography variant="h6" color="initial">
        Logged In as {user.name}
      </Typography>
      <Typography variant="subtitle1" color="">
        Email :{user.email}
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{
          color: "white",
          width: "25%",
        }}
        onClick={logouthandler}
      >
        Log Out
      </Button>
    </Stack>
  );
};

export default Profile;
