import { Carousel, Typography, Rating } from "@material-tailwind/react";
import Test1 from "../../assets/testimonials/testimonial1.jpg";
import Test2 from "../../assets/testimonials/testimonial2.jpg";
import Test3 from "../../assets/testimonials/testimonial3.jpg";

export default function CarouselDefault() {
    return (
        <div className="m-7 p-7 justify-center items-center">
            <h2 className="text-3xl font-bold text-center text-gray-800 my-8">What Our Clients Say</h2>
            <Carousel className="rounded-xl">
                <div className="relative h-full w-full">
                    <img
                        src={Test1}
                        alt="image 1"
                        className="h-80 w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                "Maria G."
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                "The best relaxing massage experience I've ever had! The 
                                atmosphere at Harmony Wellness & Spa is simply enchanting. 
                                I will definitely be back."
                            </Typography>
                            <Rating className="mb-10" value={5} readonly/>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={Test2}
                        alt="image 2"
                        className="h-80 w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                "Carlos M."
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                "Incredible sports massage service. They helped me recover quickly 
                                from an injury. Highly recommended for athletes!"
                            </Typography>
                            <Rating className="mb-10" value={5} readonly/>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={Test3}
                        alt="image 3"
                        className="h-80 w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                "Ana L."
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                "The prenatal massage was exactly what I needed. The staff was very attentive and professional. 
                                Thank you for taking such good care of me!" 
                            </Typography>
                            <Rating className="mb-10" value={5} readonly/>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}