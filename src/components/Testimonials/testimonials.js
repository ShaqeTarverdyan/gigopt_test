import React from "react";
import "./testimonials.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Testimonial from "./testimonial";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <p className="tsTitle">отзывы наших клиентов</p>
      <CarouselProvider
        naturalSlideWidth={1200}
        naturalSlideHeight={700}
        totalSlides={testimonials.length}
        className="tsSlides"
      >
        <Slider>
          {testimonials.map(({ id, image, name, text }) => (
            <Slide key={id} index={id}>
              <Testimonial image={image} name={name} text={text} />
            </Slide>
          ))}
        </Slider>
        <div className="ts_slider_dots">
          {testimonials.map(({ id }) => (
            <Dot key={id} index={id - 1} slide={id - 1} />
          ))}
        </div>
        <div className="tsButtonGroup">
          <ButtonBack className="prev" />
          <ButtonNext className="next" />
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Testimonials;
