import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLinkedinIn } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import profile from "@/assets/home/profile.jpeg";
import bg from "@/assets/home/bg.jpg";

export default function TeamCard() {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center">
            <Card className="xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 mt-3">
                <CardHeader className="pt-20 flex flex-col items-center rounded-t-lg" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #ffffff 50%), url(${bg})`,
                    backgroundSize: 'cover', // Esto asegura que la imagen cubra completamente el espacio disponible sin distorsionarse
                    backgroundPosition: 'center'
                }}>
                    <div className="w-48 h-48 rounded-full overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 mb-5 border-4 border-white">
                        <img src={profile} alt="owner's potrait" className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="font-semibold">Nancy Pulido R.</CardTitle>
                    <CardDescription>Massage Therapist</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center items-center">
                        <Button variant="ghost" size="icon" className="rounded-full border border-black hover:border-yellow-500 hover:bg-white bg-clearYellow">
                            <FaLinkedinIn />
                        </Button>
                    </div>
                    <p className="lg:text-xl md:text-lg sm:text-base text-justify p-1 mt-3">
                        Nancy, the founder of Harmony Wellness & Spa, has over 23 years of experience in wellness and health. With a background in physical therapy, she helps people achieve optimal relaxation and well-being.
                        <br />
                        <br />
                        Her vision for Harmony Wellness & Spa is to create a stress-free space for clients to rejuvenate body and mind. Her dedication and passion are evident in every aspect of the spa.
                        <br />
                        <br />
                        In her free time, Nancy enjoys nature walks and traveling, which inspire her holistic wellness approach and bring fresh ideas to her practice.
                    </p>

                </CardContent>
            </Card>
        </div>


    )
}
