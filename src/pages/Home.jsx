import React from 'react';
import Image from '../assets/home/portada.jpg';
import LocationMap from '../components/mapHomePage/map';

const Home = () => {
  return (
    <>
    <div style={{ position: 'relative' }}>
      <img src={Image} alt="banner-plane" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
    </div>
    <div className="text-center">
        <h1 className="text-lg font-bold mt-5 ml-1 mr-1">Welcome to The Spa</h1>
        <p className="text-base mt-4 ml-2 mr-2 mb-4">
          Step into our serene massage spa and embark on a journey of relaxation and renewal. Nestled in a tranquil 
          oasis, our sanctuary offers a magical retreat where guests escape the hustle and bustle of daily life. 
          With expert therapists and a soothing atmosphere, we specialize in melting away tension and restoring 
          harmony to body and mind. Whether you seek therapeutic relief or simply a moment of pampering, our spa 
          promises a rejuvenating experience that leaves you feeling blissfully refreshed.
        </p>
      </div>
      <LocationMap />
    </>
  )
}

export default Home
