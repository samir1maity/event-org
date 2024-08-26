/** @format */

// /** @format */

// import { AiOutlineFacebook } from "react-icons/ai";

// // import React from "react";

// const Timeline = () => {
//   return (
//     <div id='timeline' className='min-h-screen bg-[#fff] py-10'>
//       <h2 className='text-center text-3xl md:text-4xl font-bold text-red mb-8'>
//         Wedding Planning Timeline
//       </h2>
//       <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 max-w-5xl mx-auto'>
//         <div className='relative p-6 bg-[#f4f5ef] rounded-lg shadow-lg flex gap-6'>
//           <div className='flex items-center'>
//             <AiOutlineFacebook size={42} />
//           </div>
//           <div className='flex items-start justify-center flex-col'>
//             <h3 className='text-xl font-bold'>Dinner</h3>
//             <p className='text-gray-700'>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry.
//             </p>
//           </div>
//         </div>

//         <div className='relative p-6 bg-[#fbfcf4] rounded-lg shadow-lg'>
//           <div className='flex items-center mb-4'>
//             <img
//               src='path_to_photoshoot_icon'
//               alt='Photoshoot Icon'
//               className='h-8 w-8 text-red-500'
//             />
//             <span className='ml-2 text-red-500 font-bold text-sm'>
//               10:00AM - 11:00AM
//             </span>
//           </div>
//           <h3 className='text-xl font-semibold mb-2'>Photoshoot</h3>
//           <p className='text-gray-700'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>

//         <div className='relative p-6 bg-[#fbfcf4] rounded-lg shadow-lg'>
//           <div className='flex items-center mb-4'>
//             <img
//               src='path_to_reception_icon'
//               alt='Reception Icon'
//               className='h-8 w-8 text-red-500'
//             />
//             <span className='ml-2 text-red-500 font-bold text-sm'>
//               10:00AM - 11:00AM
//             </span>
//           </div>
//           <h3 className='text-xl font-semibold mb-2'>Reception</h3>
//           <p className='text-gray-700'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>

//         <div className='relative p-6 bg-[#fbfcf4] rounded-lg shadow-lg'>
//           <div className='flex items-center mb-4'>
//             <img
//               src='path_to_ceremony_icon'
//               alt='Ceremony Icon'
//               className='h-8 w-8 text-red-500'
//             />
//             <span className='ml-2 text-red-500 font-bold text-sm'>
//               10:00AM - 11:00AM
//             </span>
//           </div>
//           <h3 className='text-xl font-semibold mb-2'>Ceremony</h3>
//           <p className='text-gray-700'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>

//         <div className='relative p-6 bg-[#fbfcf4] rounded-lg shadow-lg'>
//           <div className='flex items-center mb-4'>
//             <img
//               src='path_to_ceremony_icon'
//               alt='Ceremony Icon'
//               className='h-8 w-8 text-red-500'
//             />
//             <span className='ml-2 text-red-500 font-bold text-sm'>
//               10:00AM - 11:00AM
//             </span>
//           </div>
//           <h3 className='text-xl font-semibold mb-2'>Ceremony</h3>
//           <p className='text-gray-700'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>

//         <div className='relative p-6 bg-[#fbfcf4] rounded-lg shadow-lg'>
//           <div className='flex items-center mb-4'>
//             <img
//               src='path_to_ceremony_icon'
//               alt='Ceremony Icon'
//               className='h-8 w-8 text-red-500'
//             />
//             <span className='ml-2 text-red-500 font-bold text-sm'>
//               10:00AM - 11:00AM
//             </span>
//           </div>
//           <h3 className='text-xl font-semibold mb-2'>Ceremony</h3>
//           <p className='text-gray-700'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

const services = [
  {
    icon: "✈️", // Replace with actual icon component if needed
    title: "Air Ticket Booking",
    description:
      "Say goodbye to the hassle of Quick booking flights. We have a dedicated team here to streamline your travel plans, ensuring you can explore both domestic and international destinations with convenience and efficiency.",
  },
  {
    icon: "📍", // Replace with actual icon component if needed
    title: "Tour Packages",
    description:
      "With our Domestic & International tour services, we curate the perfect travel packages for you. So, forget the hassle and discover the beauty of diverse landscapes, cultures, and experiences.",
  },
  {
    icon: "🏨", // Replace with actual icon component if needed
    title: "Hotel & Resort Booking",
    description:
      "We provide instant hotel and resort booking services, designed to make your travel affordable & enjoyable. Whether you're seeking a cozy luxurious hotel or a beachside resort on a budget, we are here to serve.",
  },
  {
    icon: "✈️", // Replace with actual icon component if needed
    title: "Air Ticket Booking",
    description:
      "Say goodbye to the hassle of Quick booking flights. We have a dedicated team here to streamline your travel plans, ensuring you can explore both domestic and international destinations with convenience and efficiency.",
  },
  {
    icon: "📍", // Replace with actual icon component if needed
    title: "Tour Packages",
    description:
      "With our Domestic & International tour services, we curate the perfect travel packages for you. So, forget the hassle and discover the beauty of diverse landscapes, cultures, and experiences.",
  },
  {
    icon: "🏨", // Replace with actual icon component if needed
    title: "Hotel & Resort Booking",
    description:
      "We provide instant hotel and resort booking services, designed to make your travel affordable & enjoyable. Whether you're seeking a cozy luxurious hotel or a beachside resort on a budget, we are here to serve.",
  },
  // Add more services as needed
];

const Timeline = () => {
  return (
    <section className='bg-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12'>OUR SERVICES</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-lg shadow-lg text-center'>
              <div className='text-orange-500 text-6xl mb-4'>
                {service.icon}
              </div>
              <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
              <p className='text-gray-700'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
