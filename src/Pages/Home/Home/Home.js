import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import PopularCars from "../PopularCars/PopularCars";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <PopularCars></PopularCars>
      <CustomerReviews></CustomerReviews>
      <Achievement></Achievement>
      <Footer></Footer>
    </div>
  );
};

export default Home;
