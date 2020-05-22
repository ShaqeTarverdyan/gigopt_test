import React from "react";
import "./top_slider.css";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const TopSlider = ({ images }) => {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={1200}
        naturalSlideHeight={380}
        totalSlides={images.length}
        className="top_slider"
        isPlaying={true}
        interval={3000}
      >
        <div className="top_slider_mainSlide">
          <Slider>
            {images.map(({ id, image }) => (
              <Slide key={id} index={id}>
                <img src={image} alt={image} className="image" />
              </Slide>
            ))}
          </Slider>
        </div>
        <div className="top_slider_dots">
          {images.map(({ id, image }) => (
            <Dot key={id} index={id - 1} slide={id - 1} />
          ))}
        </div>
      </CarouselProvider>
    </div>
  );
};

export default TopSlider;
