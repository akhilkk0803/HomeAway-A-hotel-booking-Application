import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { url } from "../url";
import { Usercontext } from "../UserContext";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [error, seterror] = useState(null);
  const { setuser } = useContext(Usercontext);

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const data = { email: email, password: password };
      const res = await fetch(url + "/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const op = await res.json();
      if (res.status === 401 || res.status == 404) {
        seterror(op.msg);
        return;
      } else seterror(null);
      console.log(op.user);
      setuser(op.user);
      alert("Log in Successful");
      setautologout();
      localStorage.setItem("token", op.token);
      navigate("/");
    } catch (e) {}
  };
  function setautologout() {
    setTimeout(() => {
      localStorage.removeItem("token");
      setuser(null);
      navigate("/login");
    }, 1000 * 60 * 60);
  }
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
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <Typography variant="h5" color="initial" mb={3} textAlign="center">
        LOGIN
      </Typography>
      {error && (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      )}
      <form action="" onSubmit={submithandler}>
        <Stack alignItems="center" gap={2}>
          <TextField
            id="email"
            label="Email"
            name="email"
            value={email}
            sx={{
              width: {
                md: "50%",
                xs: "100%",
              },
            }}
            onChange={emailchangeHandler}
            type="email"
            error={emailError ? true : false}
            helperText={emailError ? "Must include @" : ""}
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            value={password}
            sx={{
              width: {
                md: "50%",
                xs: "100%",
              },
            }}
            onChange={passwordchangeHandler}
            error={passwordError ? true : false}
            helperText={passwordError ? "Minimum of length 5" : ""}
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
              borderRadius: "30px",
            }}
            type="submit"
            disabled={
              emailError || passwordError || password == "" || email === ""
                ? true
                : false
            }
          >
            submit
          </Button>
          <Typography variant="subtitle1" color="secondary">
            Dont have an account ?
            <NavLink to="/signup">click here to register</NavLink>
          </Typography>
        </Stack>
      </form>
    </div>
  );
};

export default Login;
