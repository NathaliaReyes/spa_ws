import React from 'react';
import Service1 from '../assets/services/service1.jpg'; 
import Service2 from '../assets/services/service2.jpg';
import Service3 from '../assets/services/service3.jpg';
import Service4 from '../assets/services/service4.jpg';
import Service5 from '../assets/services/service5.jpg';
import Service6 from '../assets/services/service6.jpg';
import Service7 from '../assets/services/service7.jpg';
import Service8 from '../assets/services/service8.jpg';
import Service9 from '../assets/services/service9.jpg';
import Service10 from '../assets/services/service10.jpg';
import Service11 from '../assets/services/service11.jpg';
import Service12 from '../assets/services/service12.jpg';
import Service13 from '../assets/services/service13.jpg';
import Service14 from '../assets/services/service14.jpg';

const services = [
  { 
    title: "Relaxing Massage",
    description: "Experience deep relaxation and stress relief with our relaxing massage, designed to soothe your body and mind, promoting a sense of tranquility and well-being.", 
    image: Service1,
    hashtags: ["#relaxingMassage", "#stressRelief", "#tranquility"]
  },
  {
    title: "Therapeutic Massage",
    description: "Our therapeutic massage targets specific areas of tension and pain, using a variety of techniques to alleviate discomfort and promote healing.", 
    image: Service2,
    hashtags: ["#therapeuticMassage", "#painRelief", "#healing"]
  },
  { 
    title: "Deep Tissue Massage", 
    description: "Designed to relieve severe tension in the muscles and connective tissues, our deep tissue massage focuses on the deeper layers of muscle tissue to release chronic pain.", 
    image: Service3,
    hashtags: ["#deepTissueMassage", "#chronicPain", "#muscleRelief"]
  },
  { 
    title: "Chair Massage", 
    description: "Perfect for those on the go, our chair massage offers a quick and effective way to relieve tension and stress, focusing on the back, shoulders, and neck.", 
    image: Service4,
    hashtags: ["#chairMassage", "#quickRelief", "#stressBuster"]
  },
  { 
    title: "Sports Massage", 
    description: "Ideal for athletes and active individuals, our sports massage helps prevent and treat injuries, improve flexibility, and enhance performance.", 
    image: Service5,
    hashtags: ["#sportsMassage", "#injuryPrevention", "#performanceBoost"]
  },
  { 
    title: "Body Stretching", 
    description: "Enhance your range of motion and flexibility with our body stretching sessions, which involve gentle and assisted stretches to help you feel more limber and relaxed.", 
    image: Service6,
    hashtags: ["#bodyStretching", "#flexibility", "#rangeOfMotion"]
  },
  { 
    title: "Body Scrub", 
    description: "Rejuvenate your skin with our invigorating body scrub, which exfoliates dead skin cells and leaves your skin feeling smooth, soft, and revitalized.", 
    image: Service7,
    hashtags: ["#bodyScrub", "#skinCare", "#rejuvenation"]
  },
  { 
    title: "Cryotherapy", 
    description: "Boost your recovery and reduce inflammation with cryotherapy, a treatment that uses extremely cold temperatures to promote healing and reduce pain.", 
    image: Service8,
    hashtags: ["#cryotherapy", "#recovery", "#inflammation"]
  },
  { 
    title: "Reflexology", 
    description: "Our reflexology treatment focuses on applying pressure to specific points on the feet, hands, and ears to promote overall health and well-being.", 
    image: Service9,
    hashtags: ["#reflexology", "#holisticHealth", "#pressurePoints"]
  },
  { 
    title: "Hot Stone Massage", 
    description: "Experience the soothing warmth of heated stones as they are placed on key points of your body, providing deep relaxation and relief from muscle tension.", 
    image: Service10,
    hashtags: ["#hotStoneMassage", "#muscleRelief", "#deepRelaxation"]
  },
  { 
    title: "Body Chocolate Therapy", 
    description: "Indulge in our luxurious body chocolate therapy, which uses the nourishing properties of chocolate to hydrate and revitalize your skin.", 
    image: Service11,
    hashtags: ["#chocolateTherapy", "#skinHydration", "#luxurySpa"]
  },
  { 
    title: "Scalp Massage", 
    description: "Relieve tension and promote relaxation with our scalp massage, which focuses on the head, neck, and shoulders to improve circulation and reduce stress.", 
    image: Service12,
    hashtags: ["#scalpMassage", "#tensionRelief", "#circulation"]
  },
  // { 
  //   title: "Prenatal Massage", 
  //   description: "Specially designed for expectant mothers, our prenatal massage provides gentle relief from the aches and pains of pregnancy, promoting overall well-being.", 
  //   image: Service13,
  //   hashtags: ["#prenatalMassage", "#pregnancyRelief", "#maternityCare"]
  // },
  { 
    title: "Lymphatic Drainage", 
    description: "Improve your body's natural detoxification process with our lymphatic drainage massage, which encourages the flow of lymph fluids to reduce swelling and enhance circulation.", 
    image: Service14,
    hashtags: ["#lymphaticDrainage", "#detoxification", "#circulation"]
  },
];

const Card = ({ title, description, image, hashtags }) => (
  <div className="max-w-sm w-full rounded overflow-hidden shadow-lg m-2 flex flex-col">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="flex flex-col flex-grow px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base flex-grow">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {hashtags.map((hashtag, index) => (
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashtag}</span>
      ))}
    </div>
  </div>
);

const ServiceCards = () => (
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center">
      {services.map((service, index) => (
        <div key={index} className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex justify-center">
          <Card title={service.title} description={service.description} image={service.image} hashtags={service.hashtags} />
        </div>
      ))}
    </div>
  </div>
);

export default ServiceCards;
