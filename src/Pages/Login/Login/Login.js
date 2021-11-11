import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography, LinearProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import login from "../../../images/login/login.svg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { isLoading, user, error, loginUser, signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(field, value);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    // loginData.email = "";
    e.preventDefault();
  };

  const handleGoogleLogin = (e) => {
    signInUsingGoogle(location, history);
    e.preventDefault();
  };

  return (
    <Container sx={{ flexGrow: 1, my: 7 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Please Login
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                type="email"
                name="email"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                variant="standard"
                type="password"
                name="password"
                onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Pleaser Register</Button>
              </NavLink>
              <Typography variant="h6">OR</Typography>

              <Button onClick={handleGoogleLogin} variant="contained">
                Sign in with google
              </Button>
            </form>
          )}

          {isLoading && <LinearProgress />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
