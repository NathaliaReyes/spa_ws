import React, { useState } from 'react';
import Modal from 'react-modal';
import FormfacadeEmbed from '@/components/form/FormfacadeEmbed';
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
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showForm, setShowForm] = useState(false);

	const openModal = () => setModalIsOpen(true);

	const closeModal = () => {
		setModalIsOpen(false);
		setShowForm(false);
	};

	const handleReturningClient = () => {
		closeModal();
		window.location.href = "http://harmony-wellness-spa-102368.square.site";
	};

	const handleNewClient = () => {
		// closeModal();
		// window.location.href = "https://formfacade.com/include/108276575865294431338/form/1FAIpQLSfeKEAu668zy8DtM16AxX05XZTcjhpF3sGme3jOrq3_2hiK1w/classic.js/?div=ff-compose";
		// console.log('Form submitted');
		setShowForm(true);
	};

	return (
		<>
			<div style={{
				position: 'relative',
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}>
				<div style={{ textAlign: 'center', padding: '10px 0' }}>
					<i className="fas fa-phone mr-2 text-white"></i>
					<span style={{ marginRight: '20px', color: 'white' }}>
						Phone Number:<strong><a href="tel:+18134686878"> +1 (813) 468-6878</a></strong>
					</span>
					<a href="#" onClick={openModal}>
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

					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						contentLabel="Book Now"
						className="modal w-11/12 md:w-2/3"
						overlayClassName="overlay"
					>
						<button onClick={closeModal} className='hover:border hover:border-gray-400 hover:bg-blue-gray-50 p-1' style={{ float: "right" }}>
							❌
						</button>
						{!showForm ? (
							// Step 1: Show the client selection buttons
							<div className='w-11/12' style={{ textAlign: "center", padding: "20px" }}>
								<h2 className='mb-2 font-semibold'>Before You Book</h2>
								<p className='mb-2'>Are you a returning client or is this your first visit?</p>
								<button
									onClick={handleReturningClient}
									className="bg-amber-600 text-gray-800 px-5 py-2.5 m-2 rounded-md cursor-pointer hover:bg-amber-700 hover:text-blue-gray-900"

								>
									I'm a Returning Client
								</button>
								<button
									onClick={handleNewClient}
									className="bg-blue-600  text-white px-5 py-2.5 m-2 rounded-md cursor-pointer hover:bg-blue-700"
								>
									I'm a New Client
								</button>
							</div>
						) : (
							// Step 2: Show the embedded form if "New Client" was selected
							<div >
								<h2 className='text-center mt-2 font-semibold'>New Client Information</h2>
								<p className='text-red-600 py-2 text-sm sm:text-base text-center'>Please fill out the medical questionnaire before booking.</p>
								{/* <FormfacadeEmbed
									formFacadeURL="https://formfacade.com/include/108276575865294431338/form/1FAIpQLSfeKEAu668zy8DtM16AxX05XZTcjhpF3sGme3jOrq3_2hiK1w/classic.js/?div=ff-compose"
									onSubmitForm={() => console.log("Form submitted")}
								/> */}
								<iframe
									src="https://docs.google.com/forms/d/e/1FAIpQLSfeKEAu668zy8DtM16AxX05XZTcjhpF3sGme3jOrq3_2hiK1w/viewform?usp=sf_link"
									width="100%"
									height="500px"
									frameBorder="0"
									marginHeight="0"
									marginWidth="0"
									className="border-0"
								>
									Loading…
								</iframe>
							</div>
						)}
					</Modal>

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
