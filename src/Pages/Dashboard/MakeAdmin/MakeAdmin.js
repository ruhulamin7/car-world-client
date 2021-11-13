import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://shielded-dawn-55052.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Made Admin Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          setEmail("");
        }
        if (data.modifiedCount === 0 && data.matchedCount === 1) {
          Swal.fire({
            text: `This user is already admin`,
          });
        }
        if (data.modifiedCount === 0 && data.matchedCount === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `User not found`,
          });
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
    </div>
  );
};

export default MakeAdmin;
