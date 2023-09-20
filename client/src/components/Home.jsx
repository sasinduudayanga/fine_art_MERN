import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-md-8 mt-5">
              <h1 className=" display-4 fw-bolder mb-4 text-center text-white">
                Feels the fresh business perspective
              </h1>
              <p className="lead text-center fs-4 mv-5 text-white">
                Welcome to Fine Art - Where Creativity Thrives Explore the world
                of art with us, where creativity knows no bounds. Discover
                stunning artworks, connect with talented artists, and immerse
                yourself in the beauty of expression. Join us in celebrating the
                artistry that enriches our lives. Welcome to Fine Art.
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                  Get Quote
                </button>
                <button className="btn btn-outline-light me-4 rounded-pill px-4 py-2">
                  Our Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default Home;
