import { Carousel, Typography, Rating } from "@material-tailwind/react";
import Test1 from "../../assets/testimonials/testimonial1.jpg";
import Test2 from "../../assets/testimonials/testimonial2.jpg";
import Test3 from "../../assets/testimonials/testimonial3.jpg";

export default function CarouselDefault() {
  return (
    <div className="p-2 justify-center items-center">
      <h2 className="text-xl font-bold text-center text-gray-800 my-8">What Our Clients Say</h2>
      <Carousel className="rounded-xl ">
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
                "John Marshall."
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-xl opacity-80"
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
                "Lynn McHugh."
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-xl opacity-80"
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
                "Ana L."
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-xl opacity-80"
              >
                "The prenatal massage was exactly what I needed. The staff was very attentive and professional.
                Thank you for taking such good care of me!"
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}