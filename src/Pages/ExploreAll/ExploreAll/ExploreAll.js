import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Car from "../../../Shared/Car/Car";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";

const ExploreAll = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://shielded-dawn-55052.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <Box>
      <Navigation></Navigation>
      <Container>
        <h1 className="my-5" style={{ color: "#f85f13" }}>
          All CARS
        </h1>
        <Row lg={3} md={3} sm={2} xs={1} className="tours-container text-start">
          {cars.map((car) => (
            <Car key={car._id} car={car}></Car>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default ExploreAll;
