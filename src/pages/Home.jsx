import React from 'react';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente
import { Link } from 'react-router-dom';
import Image from '../assets/home/portada.jpg';
import bg from '../assets/home/bg-rustic.jpg';
import Image2 from '../assets/home/portada.jpeg';
import LocationMap from '../components/mapHomePage/map';
import '../styles/Home.css'; // Import the CSS file
import CarouselDefault from '../components/home/testimonials';
import TeamCard from '../components/home/professionalProfile';
import GoogleReview from '@/components/home/GoogleReview';


const Home = () => {
	return (
		<>
			<div style={{
				position: 'relative',
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}>
				<div style={{ textAlign: 'center', padding: '8px 0' }}>
					<i className="fas fa-phone mr-1 text-xs sm:text-sm md:text-base text-white"></i>
					<span className='mr-2 md:mr-6 text-white'>
						<strong><a href="tel:+18134686878"> +1 (813) 468 - 6878</a></strong>
					</span>
					<a 
					href="http://harmony-wellness-spa-102368.square.site"
					target="_blank"
					rel="noopener noreferrer"
					>
						<Button className='m-2 lg:text-lg md:text-base sm:text-base  text-black font-bold hover:bg-white hover:text-black hover:border-mainYellow hover:border-2 hover:shadow-lg hover:shadow-yellow-500/50'
							style={{
								backgroundColor: '#DAA520',
								color: 'white',
								padding: '10px 20px',
								border: 'none',
								borderRadius: '5px'
							}}>
							Book Now
						</Button>
					</a>
				</div>
				<div className='text-center px-2'>
					<p className="text-white text-xs md:text-base mb-1">
						Before booking your session, please take a moment to complete our
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSfeKEAu668zy8DtM16AxX05XZTcjhpF3sGme3jOrq3_2hiK1w/viewform?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="text-red-500 font-bold underline ml-1 hover:text-yellow-400"
						>
							Medical History Form.
						</a> <br />
						
					</p>
						<p className="text-white text-xs md:text-base mb-3">This will help us ensure your massage is safe, tailored to your needs, and provides the best possible experience.</p>
				</div>
				<img src={Image2} alt="banner" style={{ width: '100%', height: '50vh', objectFit: 'cover', }} />

			</div>
			<div className="content-container m-6 ">

				{/* <img src={Image2} alt="Harmony Wellness & Spa" className="content-image rounded-lg" /> */}
				<div >
					<p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-2">
						Welcome to Harmony Wellness & Spa, a premier spa located in Brandon, Florida. We specialize in professional massages with personalized attention to ensure the best quality and service. At Harmony Wellness & Spa, you will find well-being and tranquility in one place. Our goal is to create an environment where you can relax, rejuvenate, and find peace.
						<br /><br />
						Our highly skilled therapist offer a variety of services including Relaxing Massage, Therapeutic Massage, Deep Tissue Massage, and more ...
						<br /><br />

					</p>
					<div className="flex justify-center items-center h-full">
						<Link to="/services">
							<Button className="m-2 lg:text-lg md:text-base sm:text-base bg-clearYellow text-black font-bold hover:bg-white hover:text-black hover:border hover:border-mainYellow hover:border-2 hover:shadow-lg hover:shadow-yellow-500/50">View Services</Button>
						</Link>
					</div>
					<TeamCard />
					{/* <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4 text-center">
            Book your appointment via phone call or send us a text on
            <a href="https://wa.me/18134686878" target="_blank" rel="noopener noreferrer" className="underline text-green-500 hover:text-green-600"> WhatsApp. </a>
            <br />We are always ready to help!
          </p> */}
				</div>
			</div>
			<LocationMap />
			<CarouselDefault />
		</>
	);
}

export default Home;
