import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

const ResponsiveIframe = () => {
  // Initial state for iframe height
  const [iframeHeight, setIframeHeight] = useState('300px'); // Default height

  useEffect(() => {
    // Function to update height based on window width
    const updateHeight = () => {
      if (window.innerWidth < 640) { // Example breakpoint for 'sm'
        setIframeHeight('200px'); // Smaller screens
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) { // 'md' to 'lg'
        setIframeHeight('300px'); // Medium screens
      } else {
        setIframeHeight('400px'); // Larger screens
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
      className="border-0 w-full ml-2 mr-2 shadow-lg"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

const LocationMap = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-5 mx-3">
      {/* Map section */}
      <div className="md:w-5/12 md:mx-2">
        <ResponsiveIframe />
        {/* Text section */}
        <div className="text-center mt-3">
          <p className="text-lg mt-4 ml-3 mr-3">
            To schedule an appointment, you can reach us by phone, <a href="https://wa.me/18134686878" target="_blank" rel="noopener noreferrer" className=" text-green-500 hover:text-green-600">WhatsApp</a>, or fill out the form in our <a href="/Contact" className="text-blueMedium">Contact</a> section. <br /><br />We appreciate you choosing Harmony Wellness & Spa!
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="md:w-5/12 md:mx-2 w-full flex justify-center">
        <Card className="max-w-lg w-full rounded overflow-hidden shadow-lg m-1 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-1 flex items-center justify-center">
            <i className="fas fa-map-marker-alt mr-2"></i>Location
          </h2>
          <p>
            1941 W Lumsden Rd <br />
            Brandon, FL 33511<br />
            Suite 112 USA <br />
            <a className="text-blueMedium" href="https://www.google.com/maps/dir/?api=1&destination=1941+Lumsden+Rd+Brandon+FL+33511+Suite+112+USA" target="_blank" rel="noopener noreferrer">Get Directions ⭢</a>
          </p>
          <h2 className="text-2xl font-bold mb-1 flex items-center justify-center">
            <i className="fas fa-phone mr-2"></i>Phone
          </h2>
          <p>
            <a className="text-blueMedium" href="tel:+18134686878">+1 (813) 468-6878</a>
          </p>
          <h2 className="text-2xl font-bold mb-1 flex items-center justify-center">
            <i className="fas fa-clock mr-2"></i>Hours
          </h2>
          <ul className="list-none pl-5">
            <li><span className="font-bold">Mon</span>: 14:00 - 19:00</li>
            <li><span className="font-bold">Tue</span>: 14:00 - 19:00</li>
            <li><span className="font-bold">Wed</span>: 14:00 - 19:00</li>
            <li><span className="font-bold">Thu</span>: 14:00 - 19:00</li>
            <li><span className="font-bold">Fri</span>: 14:00 - 19:00</li>
            <li><span className="font-bold">Sat</span>: 9:00 - 17:00</li>
            <li><span className="font-bold">Sun</span>: Closed</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default LocationMap;