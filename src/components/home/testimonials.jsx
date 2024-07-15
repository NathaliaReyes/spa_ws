import { Carousel, Typography, Rating } from "@material-tailwind/react";
import Test1 from "../../assets/testimonials/testimonial1.jpg";
import Test2 from "../../assets/testimonials/testimonial2.jpg";
import Test3 from "../../assets/testimonials/testimonial3.jpg";
import Test4 from "../../assets/testimonials/testimonial4.jpg";

export default function CarouselDefault() {
  return (
    <div className="p-2 justify-center items-center">
      <h2 className="text-xl font-bold text-center text-gray-800 my-8">What Our Clients Say</h2>
      <Carousel className="rounded-xl ">
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
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-xl"
              >
                "Lynn McHugh. ~ Brandon, FL"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-base opacity-80"
              >
                "Nancy is a fantastic therapist skilled in Therapeutic massage, cupping, and hot stone massage.
                Her knowledge and nurturing nature helped me feel better. Her great smile and care kept me coming back.
                I'm grateful we met!"
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
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
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-xl mt-2"
              >
                "John Marshall. ~ Brandon, FL"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-base opacity-80"
              >
                "Enjoyed another great massage and wanted to recommend Nancy,
                who was very professional and a super nice person. The deep
                tissue was assume."
              </Typography>
              <Rating className="mb-10" value={5} readonly />
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
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-xl"
              >
                "Alma Santana."
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-xl opacity-80"
              >
                "I had a great experience with the service I received! <br />
                Definitely will go back again!"
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Test4}
            alt="image 4"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-xl"
              >
                "Lance E. ~ Brandon, FL"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-sm opacity-80"
              >
                "I can't say enough pleasant things about Nancy.  I’ve seen her several 
                times and always a great experience. I like deep tissue for my back and 
                shoulder pain and Nancy provides the perfect pressure.  She also 
                confirms the pressure is OK throughout the massage."
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}