import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Car.css";

const Car = (props) => {
  const { _id, brandName, description, model, price, img } = props.car;
  return (
    <Col>
      <Card className="car-card" style={{ marginBottom: "40px" }}>
        <Card.Img variant="top" className="p-3" height="250px" src={img} />
        <Card.Body>
          <Card.Title>{brandName}</Card.Title>
          <p style={{ textAlign: "left" }}>{description.slice(0, 180)}</p>
          <span className="d-flex align-center border rounded px-2 m-1">
            <p className="model">Model: {model}</p>
            <p className="ms-auto price">$ {price}</p>
          </span>
          <Link to={`/puschase-car/${_id}`}>
            <button className="btn-purchase ">Purchase Now</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Car;
