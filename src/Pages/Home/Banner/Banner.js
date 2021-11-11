import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../images/banner-images/banner-4.jpg";
import slider2 from "../../../images/banner-images/banner-1.jpg";
import slider3 from "../../../images/banner-images/banner-6.jpg";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block h-50 w-100" src={slider1} alt="First slide" />
        <Carousel.Caption className="slider-caption">
          <div className="w-50 me-auto">
            <h1>
              Find your dream car with
              <span className="carworld"> Carworld </span> !
            </h1>
            <p>
              It is a long established fact that a reader will distracted by the
              readable contant of a page when looking.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />

        <Carousel.Caption className="slider-caption">
          <div className="">
            <h1>
              Find your dream car with
              <span className="carworld"> Carworld </span> !
            </h1>
            <p>
              It is a long established fact that a reader will distracted by the
              readable contant of a page when looking.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />

        <Carousel.Caption className="slider-caption">
          <div className="w-50 ms-auto">
            <h1>
              Find your dream car with
              <span className="carworld"> Carworld </span> !
            </h1>
            <p>
              It is a long established fact that a reader will distracted by the
              readable contant of a page when looking.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
