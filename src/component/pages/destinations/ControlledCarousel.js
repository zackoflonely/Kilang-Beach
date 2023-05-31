import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel from '../../../img/carousel';
import { Container } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    // const renderPreviousImage = () => {
    //     const previousIndex = index === 0 ? carousel.length - 1 : index - 1;
    //     return <img className="carousel-nav-img previous" src={carousel[previousIndex].image} alt="Previous" />;
    //   };
    
    //   const renderNextImage = () => {
    //     const nextIndex = index === carousel.length - 1 ? 0 : index + 1;
    //     return <img className="carousel-nav-img next" src={carousel[nextIndex].image} alt="Next" />;
    //   };
    return (
      <div className="carousel-container">
        <div className="carousel-nav">
          <button
            className="carousel-nav-button"
            onClick={() => {
              setIndex(index === 0 ? carousel.length - 1 : index - 1);
            }}
          >
            Previous
          </button>
          <button
            className="carousel-nav-button"
            onClick={() => {
              setIndex(index === carousel.length - 1 ? 0 : index + 1);
            }}
          >
            Next
          </button>
        </div>
        <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {carousel.map((image, idx) => (
            <Carousel.Item
              key={image.id}
              className={idx === index ? "active" : idx < index ? "previous" : "next"}
            >
              <img
                className="d-block w-100"
                src={image.image}
                alt="Slide"
                style={{ height: '35rem', objectFit:'cover' }}
              />
              <Carousel.Caption>
                <h3>Slide label</h3>
                <p>Slide content</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        </Container>
      </div>
    );
  }  

export default ControlledCarousel;