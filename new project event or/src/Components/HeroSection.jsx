/** @format */

import { useEffect, useState } from "react";
import carousel1 from "../assets/carousel/carousel-1.jpg";
import carousel2 from "../assets/carousel/carousel-2.jpg";
import carousel3 from "../assets/carousel/carousel-3.png";
// import boy_hello from "../assets/hellosction/Groom.jpg";

const images = [carousel1, carousel2, carousel3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className='w-full h-full object-cover'
          />
        </div>
      ))}

      {/* <div class='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <p class='text-white text-xl'>Overlay Text</p>
      </div> */}

      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h2 className='text-white text-4xl md:text-6xl lg:text-8xl font-GreatVibes animate-pulse'>
          Your Animated Text
        </h2>
        {/* <button className='mt-4 px-8 py-4 bg-red-500 text-white font-bold rounded hover:bg-red-700 transition'>
          RSVP Now
        </button> */}
      </div>

      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
