import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Car from "../../../Shared/Car/Car";

const ExploreAll = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <Container>
      <div className="my-5">
        <h2 className="text-warning ">All Cars</h2>
        <p>We have a unique way of meeting your adventurous expectations!</p>
      </div>
      <Row lg={3} md={3} sm={2} xs={1} className="tours-container text-start">
        {cars.map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreAll;
