import React, { Component ,useState } from 'react';
import { Carousel } from "react-bootstrap";


export function MySlider() {
 
     const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-5">
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/7610459/pexels-photo-7610459.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        //   className="d-block w-100"
          src="https://images.pexels.com/photos/6483626/pexels-photo-6483626.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/6045232/pexels-photo-6045232.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
    )
  }

