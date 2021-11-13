import { maxHeight } from "@mui/system";
import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const SingleReview = (props) => {
  const { name, rating, comment } = props.review;
  return (
    <Col>
      <Card
        style={{
          minHeight: "10rem",
          maxHeight: "10rem",
          overflow: "hidden",
          marginBottom: "3rem",
          padding: "1rem",
        }}
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Rating
              initialRating={`${rating}`}
              readonly
              fullSymbol="fas fa-star text-warning"
              emptySymbol="far fa-star"
            ></Rating>
          </Card.Subtitle>
          <Card.Text>{comment}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleReview;
