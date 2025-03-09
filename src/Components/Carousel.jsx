import React from 'react'
import Slider from 'react-slick';

function Carousel() {

    const images = [
        '/src/assets/images/imagen1.jpg',
        '/src/assets/images/imagen2.jpg',
        '/src/assets/images/imagen3.jpeg'
      ];

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
          <img src={image} alt={`Carousel Image ${index + 1}`} className="w-full h-64 object-cover" />
        </div>
      ))}
    </Slider>
  </section>
  )
}

export default Carousel
