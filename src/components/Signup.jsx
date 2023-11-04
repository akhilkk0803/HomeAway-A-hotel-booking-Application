import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { url } from "../url";
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [nameError, setnameError] = useState(false);
  const [error, seterror] = useState(null);
  const navigate = useNavigate();
  const namechangeHandler = (e) => {
    const temp = e.target.value;
    if (temp.trim().length === 0) {
      setnameError(true);
    } else setnameError(false);
    setname(e.target.value);
  };
  const passwordchangeHandler = (e) => {
    const temp = e.target.value;
    if (temp.trim().length < 5) {
      setpasswordError(true);
    } else setpasswordError(false);
    setPassword(e.target.value);
  };
  const emailchangeHandler = (e) => {
    const temp = e.target.value;
    if (!temp.includes("@") || !temp.includes(".")) {
      setemailError(true);
    } else setemailError(false);
    setemail(e.target.value);
  };
  const submithandler = async (e) => {
    e.preventDefault();
    console.log("signned up");
    console.log(name, password, email);
    try {
      const res = await fetch(url + "/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
      const data = await res.json();
      if (res.status === 401 || res.status === 409) {
        seterror(data.msg);
        return;
      } else seterror(null);
      alert("Registration Completed Log in with the same details");
      navigate("/login");
      console.log(data);
    } catch (e) {
      alert("Registration Failed try again later");
    }
  };
  return (
    <div>
      <Typography variant="h4" mb={2} textAlign="center">
        Sign up{" "}
      </Typography>
      {error && (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      )}
      <form onSubmit={submithandler}>
        <Stack gap={2} alignItems="center" justifyContent="center">
          <TextField
            label="name"
            name="name"
            sx={{
              width: {
                md: "50%",
                xs: "100%",
              },
            }}
            type="text"
            onChange={namechangeHandler}
          />
          <TextField
            label="email"
            sx={{
              width: {
                md: "50%",
                xs: "100%",
              },
            }}
            name="email"
            type="email"
            onChange={emailchangeHandler}
            error={emailError ? true : false}
            helperText={emailError ? "Must include @" : ""}
          />
          <TextField
            label="password"
            sx={{
              width: {
                md: "50%",
                xs: "100%",
              },
            }}
            onChange={passwordchangeHandler}
            error={passwordError ? true : false}
            helperText={passwordError ? "Minimum of length 5" : ""}
            name="password"
            type="password"
          />
          <Button
            variant="contained"
            color="error"
            sx={{
              color: "white",
              width: {
                md: "50%",
                xs: "100%",
              },
            }}
            type="submit"
            disabled={
              nameError ||
              emailError ||
              passwordError ||
              name === "" ||
              password == "" ||
              email === ""
                ? true
                : false
            }
          >
            Signup
          </Button>
        </Stack>
      </form>
      <Typography variant="subtitle1" color="secondary" textAlign="center">
        Already have an account?<NavLink to="/login">Login</NavLink>
      </Typography>
    </div>
  );
};

export default Signup;
