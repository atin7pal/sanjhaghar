import React, { useState, useEffect } from "react";

function Aboutcarousel({ imgslides, height, mobileheight = `50vh` }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === imgslides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div
      className={`relative w-full  overflow-hidden rounded-3xl h-[${height}] max-sm:h-[${mobileheight}]`}
    >
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {imgslides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-[${height}] flex-shrink-0 bg-center bg-cover rounded-3xl max-sm:h-[${mobileheight}]`}
            style={{ backgroundImage: `url(${slide.src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Aboutcarousel;
