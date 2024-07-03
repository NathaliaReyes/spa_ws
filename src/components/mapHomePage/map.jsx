import { Card } from 'flowbite-react';
import React from 'react';

const LocationMap = () => {
  return (
    <div className="flex justify-center items-center my-5 mx-auto flex-col md:flex-row">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.342240039929!2d-82.31865332452497!3d27.92215157606008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ce6ccbfed82b%3A0x3c0253f67b7f4dad!2s1941%20W%20Lumsden%20Rd%2C%20Brandon%2C%20FL%2033511!5e0!3m2!1ses!2sus!4v1719541587073!5m2!1ses!2sus"
        width="400"
        height="300"
        className="border-0 md:m-2"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Card className="max-w-sm w-full rounded overflow-hidden shadow-lg m-1 flex flex-col">
        <h2 className="text-2xl font-bold mb-1 flex items-center">
          <i className="fas fa-map-marker-alt mr-2"></i>Location
        </h2>
        <p>
          1941 lumsden Rd <br />
          Brandon, FL 33511<br /> 
          suite 112 USA <br />
          <a className='text-blueMedium' href="https://www.google.com/maps/dir/?api=1&destination=1941+Lumsden+Rd+Brandon+FL+33511+Suite+112+USA" target="_blank" rel="noopener noreferrer">Get Directions  ⭢</a>
          </p>
        <h2 className="text-2xl font-bold mb-2">Business Hours</h2>
        <ul className="list-disc pl-5">
          <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
          <li>Saturday: 10:00 AM - 6:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </Card>
    </div>
  );
}

export default LocationMap;