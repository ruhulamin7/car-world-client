import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import login from "../../../images/mc20-hero.jpg";

const Login = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={login} width="100%" alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <TextField
              sx={{ mb: 1 }}
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              sx={{ mb: 1 }}
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              sx={{ mb: 1 }}
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              sx={{ mb: 1 }}
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              sx={{ mb: 1 }}
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
