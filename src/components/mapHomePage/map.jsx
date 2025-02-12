import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import GoogleReview from '../home/GoogleReview';

const ResponsiveIframe = () => {
  // Initial state for iframe height
  const [iframeHeight, setIframeHeight] = useState('300px'); // Default height

  useEffect(() => {
    // Function to update height based on window width
    const updateHeight = () => {
      if (window.innerWidth < 640) { // Example breakpoint for 'sm'
        setIframeHeight('200px'); // Smaller screens
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) { // 'md' to 'lg'
        setIframeHeight('400px'); // Medium screens
      } else {
        setIframeHeight('450px'); // Larger screens
      }
    };

    // Update height on mount and window resize
    updateHeight();
    window.addEventListener('resize', updateHeight);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.342240039929!2d-82.31865332452497!3d27.92215157606008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ce6ccbfed82b%3A0x3c0253f67b7f4dad!2s1941%20W%20Lumsden%20Rd%2C%20Brandon%2C%20FL%2033511!5e0!3m2!1ses!2sus!4v1719541587073!5m2!1ses!2sus"
      width="400"
      height={iframeHeight}
      className="border-0 w-full ml-2 mr-2 shadow-lg p-4"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

const LocationMap = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Map section */}
      <div className="w-full lg:w-7/12 py-4">
        <ResponsiveIframe />
        {/* Text section */}
        {/* <div className="text-center m-3">
          <p className="md:text-lg text-base mt-2">
            To schedule an appointment, you can reach us by phone, <a href="https://wa.me/18134686878" target="_blank" rel="noopener noreferrer" className=" text-green-500 hover:text-green-600">WhatsApp</a>, or fill out the form in our <a href="/Contact" className="text-blueMedium">Contact</a> section. <br /><br />We appreciate you choosing Harmony Wellness & Spa!
          </p>
        </div> */}
      </div>

      {/* Content section */}
      <div className="lg:w-5/12 w-full my-3 md:my-auto  mx-auto text-center">
        <div className=' flex justify-between gap-1 px-2'>
          <div className="w-1/2">
            <h2 className="md:text-xl text-lg font-bold md:mb-2">
              <i className="fas fa-clock mr-2"></i>Hours
            </h2>
            <ul className="list-none leading-normal space-y-0.5">
              <li><span className="font-bold">Mon - Fri</span>: 14:00 - 19:00</li>
              <li><span className="font-bold">Sat</span>: 9:00 - 16:00</li>
              <li><span className="font-bold">Sun</span>: Closed</li>
            </ul>
          </div>

          <div className="w-1/2 max-w-xs md:mx-1 overflow-hidden">
            <h2 className="md:text-xl text-lg font-bold md:mb-2">
              <i className="fas fa-envelope mr-2"></i>Contact Us
            </h2>
            <p className='truncate w-full whitespace-nowrap overflow-hidden'>
              <a className=" text-blueMedium hover:text-blue-gray-600" href="tel:+18134686878">+1 (813) 468-6878</a>
            </p>
            <p className='truncate w-full whitespace-nowrap overflow-hidden'>
              <a className="text-blueMedium hover:text-blue-gray-600" href="mailto:harmonywellnessandspafl@gmail.com">harmonywellnessandspafl@gmail.com</a>
            </p>
          </div>
        </div>

        <div className='my-4 text-center'>
          <h2 className="md:text-xl text-lg font-bold roboto600">
            <i className="fas fa-map-marker-alt mr-2 mb-2"></i>Location
          </h2>
          <p>
            1941 W Lumsden Rd Brandon, FL 33511<br />
            Suite 112 USA <br />
            <a className="text-blueMedium hover:text-blue-gray-600" href="https://maps.app.goo.gl/bCp54YKbTA2kjqcH8" target="_blank" rel="noopener noreferrer">
              Get Directions ⭢
            </a>
          </p>
        </div>
        <div className='w-full flex justify-center'>
          <GoogleReview />
        </div>
      </div>
    </div>
  );
};

export default LocationMap;