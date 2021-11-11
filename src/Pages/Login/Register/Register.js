import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import login from "../../../images/login/login.svg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, authError, signInUsingGoogle } =
    useAuth();

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
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password did not match! Please try again...",
      });
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <Container sx={{ flexGrow: 1, my: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Please Register
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
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">
                  Already Registered? Pleaser Login
                </Button>
              </NavLink>
              <Typography variant="h6">OR</Typography>

              <Button onClick={handleGoogleLogin} variant="contained">
                Sign in with google
              </Button>
            </form>
          )}

          {isLoading && <LinearProgress />}
          {/* {user.email && (
            <Alert severity="success">
              Registration Successfull —Please check it out!
            </Alert>
          )} */}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
