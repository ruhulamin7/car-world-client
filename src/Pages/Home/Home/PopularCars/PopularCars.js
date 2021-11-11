import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import Car from "../../../../Shared/Car/Car";

const PopularCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <Container>
      <h1 className="my-5" style={{ color: "#f85f13" }}>
        POPULAR NEW CARS
      </h1>
      <Row lg={3} md={3} sm={2} xs={1} gap="1">
        {cars.slice(0, 6).map((car) => (
          <Car car={car}></Car>
        ))}
      </Row>
    </Container>
  );
};

export default PopularCars;
