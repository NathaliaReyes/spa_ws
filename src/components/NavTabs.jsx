import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo.jpeg';
// import '../styles/Navbar.css';

// const styles = {

// };

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let pageTitle = '';
    switch (currentPage) {
      case '/':
        pageTitle = 'Home';
        break;
      case '/About':
        pageTitle = 'About';
        break;
      case '/Services':
        pageTitle = 'Services';
        break;
      case '/Packages':
        pageTitle = 'Packages';
        break;
      case '/Contact':
        pageTitle = 'Contact Us';
        break;
      default:
        pageTitle = "New Spa"
        break;
    }
    document.title = `${pageTitle} | New Spa`
  }, [currentPage]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-mainBg">
      <div className="flex items-center flex-shrink-0 text-white m-1">
        <img src={logo} alt="logo" className='md:h-24 md:w-24 h-16 w-16 ml-1'></img>
      </div>
      <div className="block md:hidden mr-2">
        <button onClick={toggleMenu} className="flex flex-col justify-around items-center w-10 h-10 rounded-full mt-2 mb-2 bg-customWhite hover:bg-customGray p-2">
          <div className="w-3 h-0.5 bg-stone"></div>
          <div className="w-6 h-0.5 bg-stone"></div>
          <div className="w-3 h-0.5 bg-stone"></div>
        </button>
      </div>
      <div className={`w-full ${isActive ? 'block' : 'hidden'} md:block md:flex md:items-center md:w-auto`} id="navMenu">
        <div className="lg:text-lg md:text-base sm:text-sm md:flex-grow mr-5 ml-2 mb-2">
          <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'font-bold block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-mainBrown mr-4' : 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-clear mr-4'}>Home</Link>
          {/* <Link to="/About" onClick={toggleMenu} className={currentPage === '/About' ? 'block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4'}>About Us</Link> */}
          <Link to="/Services" onClick={toggleMenu} className={currentPage === '/Services' ? 'font-bold block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-mainBrown mr-4' : 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-clear mr-4'}>Services</Link>
          {/* <Link to="/Packages" onClick={toggleMenu} className={currentPage === '/Packages' ? 'font-bold block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-mainBrown mr-4' : 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-clear mr-4'}>Packages</Link> */}
          <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'font-bold block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-mainBrown mr-4' : 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-clear mr-4'}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );

}

export default NavTabs;