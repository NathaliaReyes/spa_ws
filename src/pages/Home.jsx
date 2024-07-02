import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import Image from '../assets/home/portada.jpg';
import Image2 from '../assets/home/portada.jpeg';
import LocationMap from '../components/mapHomePage/map';
import '../styles/Home.css'; // Import the CSS file
import CarouselDefault from '../components/home/testimonials';

const Home = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <img src={Image2} alt="banner" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />

      </div>
      <div className="content-container m-6">

        {/* <img src={Image2} alt="Harmony Wellness & Spa" className="content-image rounded-lg" /> */}
        <div>
          <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-10 mr-10 mb-4">
            Welcome to Harmony Wellness & Spa, a premier spa located in Brandon, Florida. We specialize in professional massages with personalized attention to ensure the best quality and service. At Harmony Wellness & Spa, you will find well-being and tranquility in one place. Our goal is to create an environment where you can relax, rejuvenate, and find peace.
            <br /><br />
            Our highly skilled therapist offer a variety of services including Relaxing Massage, Therapeutic Massage, Deep Tissue Massage, and more ... 
            <br /><br />

          </p>
          <div className="flex justify-center items-center h-full">
          <Link to="/services">
              <Button className="m-4 lg:text-lg md:text-base sm:text-base">View Services</Button>
            </Link>
          </div>            
          <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-10 mr-10 mb-4 text-center">Book your appointment via phone call or send us a text on WhatsApp. We are always ready to help!</p>
        </div>
      </div>
      <LocationMap />
      <CarouselDefault />
    </>
  );
}

export default Home;
