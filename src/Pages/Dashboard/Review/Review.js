import React, { useEffect, useState } from "react";
import "./Review.css";

import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Paper } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const Review = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState({});
  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://shielded-dawn-55052.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          // order successfull modal
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thanks for review us",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  //   useEffect(() => {
  //     fetch(`https://shielded-dawn-55052.herokuapp.com/reviews/`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setReviews(data);
  //         setValue("name", user?.displayName);
  //       });
  //   }, []);

  return (
    <Paper className="review-form" sx={{ mt: 10 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4> Give us your details please</h4>
        <input
          value={user.displayName}
          {...register("name", { required: true })}
          placeholder="Your Name"
        />
        <input
          type="number"
          {...register("rating")}
          placeholder="Rating Must Between 1-5"
        />
        <textarea
          className="textarea-field"
          {...register("comment", { required: true })}
          placeholder="Write Your Comment"
        />
        <input
          type="submit"
          className="btn btn-primary review-btn"
          value="Review Submit"
        />
      </form>
    </Paper>
  );
};

export default Review;
