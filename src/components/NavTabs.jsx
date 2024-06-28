import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo-no-bg.png';
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
    <nav className="flex items-center justify-between flex-wrap bg-darkBg p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <img src={logo} alt="logo" className='h-28 w-28'></img>
        <span className='font-semibold text-xl tracking-tight' id="nav-name">New Spa</span>
      </div>
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="px-1 py-2 border rounded text-sky-50 border-mainYellow hover:text-white hover:border-white">
          Menu
        </button>
      </div>
      <div className={`w-full ${isActive ? 'block' : 'hidden'} md:block md:flex md:items-center md:w-auto`} id="navMenu">
        <div className="text-sm md:flex-grow">
          <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4'}>Home</Link>
          {/* <Link to="/About" onClick={toggleMenu} className={currentPage === '/About' ? 'block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4'}>About Us</Link> */}
          <Link to="/Services" onClick={toggleMenu} className={currentPage === '/Services' ? 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4'}>Services</Link>
          <Link to="/Packages" onClick={toggleMenu} className={currentPage === '/Packages' ? 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4'}>Packages</Link>
          <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-white mr-4' : 'block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4'}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );

}

export default NavTabs;