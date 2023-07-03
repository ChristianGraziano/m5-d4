import React from 'react';
import { carouselItems } from './CaroselItems';
import Carousel from 'react-bootstrap/Carousel';
import { nanoid } from 'nanoid';


const WelcomeHero = () => {
  return (
    <Carousel interval={3000}>
        {carouselItems.map((item) => {
            return (
                <Carousel.Item key={nanoid()}>
                    <img className="d-block w-100 h-100 w-100" src={item.src} alt={item.alt} />
                    <Carousel.Caption>
                        <h3>{item.captionTitle}</h3>
                        <p>{item.captionDescription}</p>
                    </Carousel.Caption>
                </Carousel.Item>  
            );
        })}

    </Carousel>
  )
}

export default WelcomeHero