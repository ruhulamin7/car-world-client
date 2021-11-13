import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        // authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                sx={{ width: "50%" }}
                label="Email"
                type="email"
                name="email"
                autoComplete="current-password"
                onBlur={handleOnBlur}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Button type="submit" variant="contained">
                Make Admin
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      {/* {success && <Alert severity="success">Made Admin successfully!</Alert>} */}
    </div>
  );
};

export default MakeAdmin;
