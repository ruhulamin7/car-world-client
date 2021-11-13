import { LinearProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import "./PurchaseCar.css";
import { Box } from "@mui/system";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

const PurchaseCar = () => {
  const { user, isLoading } = useAuth();
  const { carId } = useParams();
  const [car, setCar] = useState({});

  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = (data) => {
    data.status = "Pending";
    axios
      .post("https://shielded-dawn-55052.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          // order successfull modal
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://shielded-dawn-55052.herokuapp.com/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setValue("name", user?.displayName);
        setValue("email", user?.email);
        setValue("brandName", car?.brandName);
        setValue("model", car?.model);
      });
  }, [car]);

  return (
    <Box>
      <Navigation></Navigation>
      <Container className="mb-5">
        <h2 className="text-warning py-5">Purchase your dream car </h2>
        <div className="purchase-car-container">
          <div className="card mb-3 car-detail-info">
            <div
              className="row g-0 display-flex "
              style={{ alignItems: "center" }}
            >
              <div className="col-md-7 ps-3">
                <img
                  src={car.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title ">
                    Car Brand/Model: {car.brandName}
                  </h5>
                  <p className="card-text m-2">{car.description}</p>
                  <span className="d-flex border">
                    <b>{car.model}</b>
                    <b className="ms-auto text-warning">$ {car.price}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="car-detail-form">
            <h4> Give us your details please</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("brandName", { required: true })}
                placeholder="Brand Name"
              />
              <input
                {...register("model", { required: true })}
                placeholder="Model No"
              />
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
              />
              <input
                {...register("email", { required: true })}
                placeholder="Your Email"
              />

              <textarea
                className="address-field"
                {...register("address", { required: true, maxLength: 100 })}
                placeholder="Your Address"
              />
              <input
                type="number"
                {...register("phone")}
                placeholder="Phone Number"
              />
              <input
                type="submit"
                className="btn btn-warning"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default PurchaseCar;
