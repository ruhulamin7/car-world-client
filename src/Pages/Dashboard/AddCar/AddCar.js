import axios from "axios";
import React from "react";
import "./AddCar.css";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://shielded-dawn-55052.herokuapp.com/cars", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Car added successfully");
          reset();
        }
      });
  };
  return (
    <Container>
      <div className="add-car my-5">
        <h2 className="text-warning ">Add a new car</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="add-car-form">
          <input
            {...register("brandName", { required: true, maxLength: 20 })}
            placeholder="Brand Name"
          />
          <input
            {...register("model", { required: true, maxLength: 20 })}
            placeholder="Model No"
          />
          <textarea
            className="description-field"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <input type="number" {...register("price")} placeholder="Car Price" />

          <input {...register("img")} placeholder="Image URL" />
          <input className="btn btn-warning" value="Add Car" type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default AddCar;
