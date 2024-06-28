import React from 'react';

const LocationMap = () => {
  return (
    <div style={{
        display: 'flex', // Esto habilita Flexbox
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center', // Centra verticalmente
        margin: '0 auto',
        marginTop: '1.25rem',
        marginBottom: '1.25rem'
    }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.342240039929!2d-82.31865332452497!3d27.92215157606008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ce6ccbfed82b%3A0x3c0253f67b7f4dad!2s1941%20W%20Lumsden%20Rd%2C%20Brandon%2C%20FL%2033511!5e0!3m2!1ses!2sus!4v1719541587073!5m2!1ses!2sus"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default LocationMap;