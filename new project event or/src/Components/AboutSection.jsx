/** @format */

import { FaPhoneSquareAlt } from "react-icons/fa";
import about1 from "../assets/about/about-1.jpg";
import bgFlower from "../assets/about/bg-flower.png";

const AboutSection = () => {
  return (
    <div
      id='about'
      className=' items-center px-16 bg-[#CCE0AC] flex flex-col md:flex-row relative'
      style={{ minHeight: "90vh" }}>
      <img
        src={bgFlower}
        alt=''
        className='absolute bottom-0 right-0 opacity-50 z-0 h-48'
      />
      <img
        src={bgFlower}
        alt=''
        className='absolute top-0 left-0 rotate-180 opacity-50 z-0 h-48'
      />
      <div className='flex items-center justify-center md:w-1/2 sm:wfull border-black'>
        <img
          src={about1}
          alt='Wedding'
          className='h-full object-cover relative z-10'
        />
      </div>
      <div className='flex flex-col justify-center md:p-8 w-full sm:w-full md:w-1/2 h-full gap-5'>
        <h2 className='text-#C7253E text-4xl font-bold '>ABOUT US</h2>
        <h3 className='text-4xl font-bold mt-2 font-GreatVibes'>
          We Make Your Every Moment
        </h3>
        <p className='mt-4 text-gray-700  text-xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s. Lorem Ipsum has been the industrys standard dummy
          text ever since the 1500s.
        </p>

        <div className='mt-6 p-4 bg-pink-100 rounded-lg'>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              src='your-image-url'
              alt='Bride'
              className='w-24 h-24 rounded-full object-cover'
            />
            <div className='mt-4 md:mt-0 md:ml-4 text-center md:text-left'>
              <h4 className='text-2xl font-bold'>Evelyn</h4>
              <p className='text-gray-700'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className='flex justify-center md:justify-start gap-2 mt-4'>
                <a href='#' className='hover:text-pink-600'>
                  {/* <i className='fab fa-facebook-f'></i> */}
                </a>
                <a href='#' className='hover:text-pink-600'>
                  {/* <i className='fab fa-twitter'></i> */}
                </a>
                <a href='#' className='hover:text-pink-600'>
                  {/* <i className='fab fa-instagram'></i> */}
                </a>
                <a href='#' className='hover:text-pink-600'>
                  {/* <i className='fab fa-linkedin'></i> */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-8'>
          <div className='flex items-center mt-4 md:mt-0'>
            <div className=''>
              <FaPhoneSquareAlt size={18} />
            </div>
            <span className='ml-2 text-lg font-bold text-pink-700'>
              +123 456 7890
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
