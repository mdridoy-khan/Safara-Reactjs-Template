import React from 'react';
import Hero from './Hero';
import BestDestinations from './BestDestinations';
import StartTripSteps from './StartTripSteps';
import WhyChooseUs from './WhyChooseUs';
import Testimonial from './Testimonial';
import Subscribe from './Subscribe';
import TopPlaces from './TopPlaces';

const Home = () => {
    return (
        <>
            <Hero />
            <BestDestinations />
            <StartTripSteps />
            <TopPlaces />
            <WhyChooseUs />
            <Testimonial />
            <Subscribe />
        </>
    )
}
export default Home;