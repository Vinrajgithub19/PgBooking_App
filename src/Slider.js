import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"; // Optional: For custom styling

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      url: "https://images.stockcake.com/public/a/0/6/a064a162-526a-47d8-be24-ea61387f2aea_large/sunlit-forest-lake-stockcake.jpg",
    },
    {
      id: 2,
      url: "https://images.stockcake.com/public/d/b/5/db5d4c6d-be54-434f-9779-0e3c39517049_large/festive-urban-wonderland-stockcake.jpg",
    },
    {
      id: 3,
      url: "https://images.stockcake.com/public/5/b/e/5bee6b00-decd-4eab-a993-7624cea662dd_large/smart-home-interface-stockcake.jpg",
    },
  ];

  return (
    <Slider {...settings} className="slider">
      {slides.map((slide) => (
        <div key={slide.id}>
          <img
            src={slide.url}
            alt={`Slide ${slide.id}`}
            className="slider-image"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
