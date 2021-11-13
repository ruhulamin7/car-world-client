import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Row } from "react-bootstrap";
import SingleReview from "./SingleReview/SingleReview";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-dawn-55052.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container>
      <hr />
      <h1 className="my-5" style={{ color: "#f85f13" }}>
        CUSTOMER REVIEWS
      </h1>
      <Row lg={4} md={4} sm={2} xs={1}>
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReviews;
