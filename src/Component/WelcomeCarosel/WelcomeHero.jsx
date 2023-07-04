import React from 'react';
import { carouselItems } from './CaroselItems';
import Carousel from 'react-bootstrap/Carousel';
import { nanoid } from 'nanoid';
import { Container } from 'react-bootstrap';


const WelcomeHero = () => {
  return (
    

    <Carousel className='m-5 p-5'  interval={3000}>
        {carouselItems.map((item) => {
            return (
                <Carousel.Item  key={nanoid()}>
                    <img className="d-block  h-100 w-100" src={item.src} alt={item.alt} />
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