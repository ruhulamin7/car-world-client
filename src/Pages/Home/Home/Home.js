import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import PopularCars from "./PopularCars/PopularCars";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCars></PopularCars>
      <Achievement></Achievement>
    </div>
  );
};

export default Home;
