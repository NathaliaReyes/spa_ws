import React from 'react';
import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/facebookIcon";
import LinkedinButtonIcon from "@/components/icons/linkedInIcon";
import WhatsAppIcon from "@/components/icons/whatsappIcon";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="bottom-0 w-full flex flex-col items-center justify-center p-3 bg-black">
      <div>
        <p className="m-3 text-center text-gray-200 text-xs opacity-50">Connect with us!</p>
      </div>
      <div className="flex gap-4">
        <WhatsAppIcon />
        <InstagramButtonIcon />
        <FacebookIcon />
        <LinkedinButtonIcon />
      </div>
      <div>
        <p className="m-3 text-center text-gray-200 text-xs opacity-50">© 2024 All rights reserved</p>
        <p className=" text-center text-gray-200 text-xs opacity-50" style={{ fontSize: '8px' }}>MADE WITH LOVE BY 
          <a href="https://silviareyes.netlify.app/" target="_blank" rel="noopener noreferrer" className='underline-link'> SILVIA REYES</a>
        </p>
        <p className="m-5 text-center text-gray-200 text-xs opacity-50">Privacy Policy</p>
      </div>

    </footer>
  );
}

export default Footer;
