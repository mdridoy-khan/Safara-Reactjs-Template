import React from "react";
import BannerImage from "../../assets/banner.jpg";
import TravelSearchForm from "../../components/TravelSearchForm";
const Hero = () => {
    return (
        <section className="w-full pt-32 md:pt-40 lg:pt-48 pb-96 sm:pb-48 lg:pb-48  relative bg-cover bg-center" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="container mx-auto overflow-x-hidden flex flex-col items-center xl:items-start justify-center lg:justify-start text-center lg:text-left h-full px-4 lg:px-0">
                <span className="text-white text-sm sm:text-md block mb-1 lg:mb-4">Lorem Ipsum is simply dummy</span>
                <h1>
                    <span className="text-2xl sm:text-4xl font-bold text-primary block mb-1 lg:mb-4">Welcome to Our Travel Agency</span>
                    <span className="text-2xl sm:text-4xl font-bold text-white block mb-2">Explore the World with Us</span>
                </h1>
                <p className="text-white text-sm sm:text-md mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition duration-300 block w-max">
                    Explore Now
                </button>
            </div>
            <div className="container mx-auto absolute bottom-0 md:bottom-8 left-0 right-0 w-full">
                <TravelSearchForm />
            </div>
        </section>
    )
}
export default Hero;