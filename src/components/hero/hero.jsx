import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import carousel from "./hero.json";
import "./hero.css";
import heroSlider from "../../images/hero-slider.png";
import { ButtonPrimary } from "../../utls/button/button";
import Navbar from "../navbar/navbar";

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-section">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="container">
              <div className="hero-text-box">
                <p className="hero-text-top-para">DESIGN INSPIRATION</p>
                <h1 className="hero-header-text">
                  Convallis turpis erat tempus, viverra aliquet.
                </h1>
                <ButtonPrimary text="Get in touch" />
                <p className="hero-author-review">
                  I feel so much less stressed ❤️ as I now know by the book.”
                </p>
                <div className="hero-author d-flex">
                  <img
                    className="hero-author-img"
                    src="https://randomuser.me/api/portraits/women/47.jpg"
                    alt=""
                  />
                  <div className="hero-author-name">
                    <p>Andry Ford</p>
                    <small>CEO at Whatever</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 hero-carousel-box">
            <div className="carousel">
              <CarouselProvider
                naturalSlideWidth={60}
                naturalSlideHeight={50}
                totalSlides={6}
                visibleSlides={1}
              >
                <Slider>
                  {carousel &&
                    carousel.map((c, key) => (
                      <Slide index={key} key={key}>
                        <img
                          src={heroSlider}
                          alt=""
                          style={{ maxWidth: "70%" }}
                        />
                      </Slide>
                    ))}
                </Slider>
                <ButtonBack>
                  <i class="fas fa-arrow-left"></i>
                </ButtonBack>
                <ButtonNext>
                  <i class="fas fa-arrow-right"></i>
                </ButtonNext>
              </CarouselProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
