/** @format */

// import girl_hello from "../assets/hellosction/gallery-6.jpg";
// import boy_hello from "../assets/hellosction/Groom.jpg";
import tampbg from "../assets/hellosction/tamp-bg-1.png";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";

const HelloSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const helloSection = document.getElementById("hello-section");
      const rect = helloSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        helloSection.classList.add("animate-images");
      } else {
        helloSection.classList.remove("animate-images");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='relative min-h-60 flex items-center justify-center bg-gray-100'>
      <div className='absolute top--20px right-0 z-43' style={{ top: "-50px" }}>
        <img src={tampbg} alt='corner_img' />
      </div>
      <div
        className='absolute top- -15px left-0 rotate-180 z-40'
        style={{ top: "-18px" }}>
        <img src={tampbg} alt='corner_img' />
      </div>
      <div className='w-full max-w-4xl mx-auto p-4 sm:p-8'>
        {/* Header Section */}
        <div className='text-center mb-4'>
          <h1 className='text-8xl sm:text-8xl font-GreatVibes font-bold text-pink-500 '>
            Hello!
          </h1>
          <h4 className='text-4xl sm:text-6xl text-gray-600 font-GreatVibes'>
            We invite you to celebrate our wedding
          </h4>
        </div>

        {/* Main Content Section */}
        {/* <div className='relative flex flex-col sm:flex-row items-center justify-evenly w-full max-w-4xl mx-auto px-4 sm:px-0'>
          <div className='w-full sm:w-1/3 text-center mb-8 sm:mb-0'>
            <img
              src={boy_hello}
              alt='Evelyn'
              className='mx-auto rounded-full shadow-lg w-24 h-24 sm:w-48 sm:h-48 object-cover animate-flyInLeft'
            />
            <h3 className='text-xl sm:text-2xl text-pink-600 mt-4'>Evelyn</h3>
            <p className='text-gray-600 mt-2 text-sm sm:text-base'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className='text-center mx-0 sm:mx-10 mb-8 sm:mb-0'>
            <img alt='Heart' className='w-12 h-12 sm:w-20 sm:h-20 mx-auto' />
          </div>

          <div className='w-full sm:w-1/3 text-center'>
            <img
              src={girl_hello}
              alt='Anthony'
              className='mx-auto rounded-full shadow-lg w-24 h-24 sm:w-48 sm:h-48 object-cover animate-flyInRight'
            />
            <h3 className='text-xl sm:text-2xl text-pink-600 mt-4'>Anthony</h3>
            <p className='text-gray-600 mt-2 text-sm sm:text-base'>
              Lorem Ipsum has been the industrys standard dummy text.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HelloSection;
