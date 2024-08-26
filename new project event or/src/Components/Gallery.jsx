/** @format */
import carousel1 from "../assets/carousel/carousel-1.jpg";
import carousel2 from "../assets/carousel/carousel-2.jpg";
import carousel3 from "../assets/carousel/carousel-3.png";

const images = [
  { src: carousel1, alt: "Wedding on the beach" },
  { src: carousel2, alt: "Wedding on the beach" },
  { src: carousel3, alt: "Wedding on the beach" },
  { src: carousel1, alt: "Wedding on the beach" },
  { src: carousel2, alt: "Wedding on the beach" },
  { src: carousel3, alt: "Wedding on the beach" },
  { src: carousel1, alt: "Wedding on the beach" },
  { src: carousel2, alt: "Wedding on the beach" },
];

const Gallery = () => {
  return (
    <div className='text-center px-4 lg:px-24 bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>Wedding Gallery</h1>
      <p className='text-gray-500 mb-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>

      <div className='flex flex-wrap justify-center gap-6'>
        {images.map((image, index) => (
          <div
            key={index}
            className='w-full sm:w-1/2 md:w-1/3 lg:w-23 overflow-hidden rounded-lg shadow-lg'>
            <img
              className='w-full h-64 object-cover'
              src={image.src}
              alt={image.alt}
            />
            <div className='p-4'>
              <p className='text-gray-700 italic'>Wedding on the beach</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
