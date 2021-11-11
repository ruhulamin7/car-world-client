import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Container className="my-5">
      <h2 className="text-warning my-5">Please Login</h2>

      <button onClick={handleGoogleLogin} className="btn btn-warning">
        Sign in with google
      </button>
    </Container>
  );
};

export default Login;
