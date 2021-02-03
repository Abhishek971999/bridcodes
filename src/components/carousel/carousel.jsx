import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./carousel.css";
import carousel from "./carousel.json";
import Card from "../../utls/card/card";
function Carousel() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const noOfSlides = width < 600 ? 1 : 3;
  return (
    <div className="carousel-section container">
      <p className="text-center carousel-para">DESIGN CONCEPT</p>
      <h3 className="text-center carousel-heading-text">
        The best design for your studio website
      </h3>
      <div className="carousel">
        <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={100}
          totalSlides={6}
          visibleSlides={noOfSlides}
        >
          <Slider>
            {carousel &&
              carousel.map((c, key) => (
                <Slide index={key} key={key}>
                  <Card
                    title={c?.title}
                    desc={c?.desc}
                    descFooter={c?.descFooter}
                    descFooterLink={c?.descFooterLink}
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
  );
}

export default Carousel;
