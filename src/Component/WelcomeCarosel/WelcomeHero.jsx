import React from "react";
import { carouselItems } from "./CaroselItems";
import Carousel from "react-bootstrap/Carousel";
import { nanoid } from "nanoid";
import "./carousel-style.css";

import logo from "../../images/logo_epic_book.png";

const WelcomeHero = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
        <h1 className="text-center font-title">Epic Books</h1>{" "}
        <img className="logo swing-animation" src={logo} alt="epikBooks_logo" />
      </div>

      <Carousel
        className="m-lg-5 p-lg-5 mt-lg-0 carosellostyle"
        interval={3000}
      >
        {carouselItems.map((item) => {
          return (
            <Carousel.Item key={nanoid()}>
              <img
                className="d-block  h-100 w-100"
                src={item.src}
                alt={item.alt}
              />
              <Carousel.Caption>
                <h3>{item.captionTitle}</h3>
                <p>{item.captionDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default WelcomeHero;
