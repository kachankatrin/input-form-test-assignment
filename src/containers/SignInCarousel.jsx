import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function SignInCarousel() {
  return (
    <div className="carousel-container">
      <Carousel controls={false}>
        <Carousel.Item>
          <div className="img-container">
            <div className="box-shadow"></div>
            <img
              className="d-block mx-auto"
              src="images/img-default.svg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h2>Tokenplace</h2>
            <p>Multi-exchange Trading Terminal</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <div className="box-shadow"></div>
            <img
              className="d-block mx-auto"
              src="images/img-second.svg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h2>Fund Platform</h2>
            <p>Hedge funds wealth management</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <div className="box-shadow"></div>
            <img
              className="d-block mx-auto"
              src="images/img-third.svg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h2>Noviscient</h2>
            <p>Management Platform</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}