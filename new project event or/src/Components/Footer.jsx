/** @format */

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8' id='footer'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Logo and Company Description */}
          <div className='text-center md:text-left md:w-1/3 mb-6 md:mb-0'>
            <img
              src='/path/to/logo.png'
              alt='Company Logo'
              className='mx-auto md:mx-0 mb-4'
            />
            <p className='text-sm'>
              We are one of the best travel agencies in Kolkata, offering a wide
              range of services tailored to meet the unique needs and
              preferences of our clients. Whether you are planning a family
              vacation, a romantic getaway, or a group excursion.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='text-center md:text-left md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-lg font-bold mb-4'>Browse</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-orange-500'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500'>
                  Our Services
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className='text-center md:text-left md:w-1/3'>
            <h3 className='text-lg font-bold mb-4'>Quick Contact</h3>
            <ul className='space-y-2'>
              <li>📍 new town, kolkata, kolkata, West Bengal 721001</li>
              <li>✉️ dummy.foruse@gmail.com</li>
              <li>📞 +91 99856 00000</li>
              <li>📞 +91 770132 00000</li>
              <li>🕒 Open 10am - 7pm, Sunday closed</li>
            </ul>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className='mt-8 border-t border-gray-700 pt-4 text-center md:flex md:justify-between'>
          <div className='mb-4 md:mb-0'>
            <a href='#' className='text-blue-500 mx-2'>
              Facebook
            </a>
            <a href='#' className='text-red-500 mx-2'>
              Instagram
            </a>
            <a href='#' className='text-pink-500 mx-2'>
              Pinterest
            </a>
          </div>
          <p className='text-sm'>
            © 2024 heres and now | Designed & Managed by{" "}
            <span className='text-orange-500'>Prince Globe</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
