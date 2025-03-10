import React from "react";
import Slider from "react-slick";
import image1 from "../assets/imagen1.jpg";
import image2 from "../assets/imagen2.jpg";
import image3 from "../assets/imagen3.jpeg";

function Carousel() {
  const images = [image1, image2, image3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="carousel mt-20  ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Carousel;
