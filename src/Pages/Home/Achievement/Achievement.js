import React from "react";
import "./Achievement.css";
import { Container } from "react-bootstrap";

const Achievement = () => {
  return (
    <div className="achievement my-5">
      <Container>
        <div className="row py-5">
          <div className="col-md-3 col-6 bb">
            <h1 className="text-warning">23</h1>
            <h4 className="text-white my-4 p-2 rounded">Year Of Experience</h4>
            <p className="achievement-text">
              We have 23 year of Experience in thid field. And so far we are
              successful.
            </p>
          </div>
          <div className="col-md-3 col-6">
            <h1 className="text-warning">59</h1>
            <h4 className="text-white my-4 p-2 rounded">Numbers Engineer</h4>
            <p className="achievement-text">
              We have lot of Experienced engineers. They always try to help you
              better.{" "}
            </p>
          </div>
          <div className="col-md-3 col-6">
            <h1 className="text-warning">15</h1>
            <h4 className="text-white my-4 p-2 rounded">Professional Awards</h4>
            <p className="achievement-text">
              So far we have 15 Professional award as a best car selling
              organization !
            </p>
          </div>
          <div className="col-md-3 col-6">
            <h1 className="text-warning">100%</h1>
            <h4 className="text-white my-4 p-2 rounded">Satisfied Clients</h4>
            <p className="achievement-text">
              Our clients are satisfied with us. We are proud to be a part of
              your nice journey!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Achievement;
