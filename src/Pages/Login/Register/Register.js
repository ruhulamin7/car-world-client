import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import login from "../../../images/banner-images/banner-6.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Register = () => {
  const { registerUser, isLoading, user, authError, signInUsingGoogle } =
    useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  // console.log(loginData);

  const location = useLocation();
  const history = useHistory();

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form form onSubmit={handleRegisterSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                variant="standard"
                type="text"
                name="name"
                onBlur={handleOnBlur}
              />
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
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Re-Type Password"
                variant="standard"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Regiser
              </Button>
              <NavLink to="/login">
                <Button variant="text">
                  Already Registered? Pleaser Login
                </Button>
              </NavLink>
            </form>
          )}
          <p>======================</p>

          <Button onClick={handleGoogleLogin} variant="contained">
            Sign in with google
          </Button>
          {isLoading && <LinearProgress />}
          {user.email && (
            <Alert severity="success">
              Registration Successfull —Please check it out!
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "80%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
