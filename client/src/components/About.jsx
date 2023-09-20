import React from "react";
import about1 from "../images/about1.png";

function About() {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={about1} alt="about" className="w-50 mt-5"></img>
            </div>
            <div className="col-md-6 border ">
              <h3 className="fs-5 mt-5">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead">
                Founded on a passion for creativity, we are dedicated to
                bringing art to life. Our mission is to inspire, connect, and
                celebrate the world's artistic talents. Explore our vibrant
                community of artists and enthusiasts, and join us on a journey
                of endless imagination and expression.
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
              <button className="btn btn-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
