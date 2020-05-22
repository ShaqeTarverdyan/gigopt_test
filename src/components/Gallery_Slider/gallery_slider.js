import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./gallery_slider.css";

const GallerySlider = ({ images }) => {
  return (
    <div>
      <p className="Gallery_title">Галерея</p>
      <CarouselProvider
        naturalSlideWidth={1200}
        naturalSlideHeight={500}
        totalSlides={images.length}
      >
        <div className="mainSlide">
          <Slider>
            {images.map(({ id, image }) => (
              <Slide key={id} index={id}>
                <img src={image} alt={image} className="image" />
              </Slide>
            ))}
          </Slider>
        </div>
        <div className="thumbnailWrapper">
          <div className="thumbnails">
            {images.map(({ id, image }) => (
              <Dot key={id} index={id - 1} slide={id - 1}>
                <img src={image} alt={image} className="thumbnail" />
              </Dot>
            ))}
          </div>
          <div className="buttonGroup">
            <ButtonBack className="gallery_prev" />
            <ButtonNext className="gallery_next" />
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default GallerySlider;
