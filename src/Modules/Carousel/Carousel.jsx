import React, { useState } from "react";
import { Reviews } from "../../assets/Arrays/Reviewsarray";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ slides, title = "Our Customers love our lovely food" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center mt-2">
        {[...Array(filledStars)].map((_, index) => (
          <span key={`filled-${index}`} className="text-yellow-500 text-lg">
            ★
          </span>
        ))}
        {halfStar && (
          <span className="text-yellow-500 text-lg">★</span> // Optional half-star logic
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300 text-lg">
            ★
          </span>
        ))}
      </div>
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Reviews.length) % Reviews.length
    );
  };

  return (
    <div className="relative w-[600px] h-[80vh] mx-auto overflow-hidden flex flex-col justify-center items-start max-sm:w-full max-sm:h-full max-[850px]:h-full max-[850px]:w-full">
      <h2 className="text-5xl font-bold py-5 themetext max-sm:text-3xl">
       {title}
      </h2>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Reviews.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-start flex-col gap-3"
          >
            <p className="text-start mt-2 text-lg font-normal text-gray-600 w-full">
              {slide.review}
            </p>
            <StarRating rating={slide.rating} />
            <p className="text-xl font-bold">{slide.name}</p>
            <p className="text-gray-600">{slide.country}</p>
          </div>
        ))}
      </div>
      <div className="w-[150px] mt-4 flex justify-between items-center py-3 text-[#009688]">
        <button
          onClick={prevSlide}
          className="rounded-full px-4 py-4 bg-white shadow-lg shadow-gray-200 border border-gray-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full px-4 py-4 bg-white shadow-lg shadow-gray-200 border border-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
