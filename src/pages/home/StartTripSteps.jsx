import React from "react";
import StepItem from "../../components/StepItem.jsx";
import { MapPin, CreditCard, PlaneTakeoff, Heart, Play } from "lucide-react";
import tripGirl from "../../assets/women.png"

const StartTripSteps = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-10 px-4">
        {/* Left side - steps */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Start Your Next Trip in Just 3 Steps
          </h2>

          <StepItem
            icon={<MapPin size={28} />}
            title="Choose Your Destination"
            description="Select the place you want to explore."
            bgColor="bg-yellow-500"
          />

          <StepItem
            icon={<CreditCard size={28} />}
            title="Easy Payment Method"
            description="Choose from a variety of payment options."
            bgColor="bg-red-500"
          />

          <StepItem
            icon={<PlaneTakeoff size={28} />}
            title="Travel Preparation"
            description="We help you plan everything ahead."
            bgColor="bg-sky-500"
          />
        </div>

        <div className="flex-1 relative">
          <img
            src={tripGirl}
            alt="Travel Girl"
            className="max-w-sm mx-auto"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-400 text-black font-semibold text-sm px-4 py-2 rounded-full shadow">
            👩‍🦰 Follow This Steps
          </div>
          <div className="absolute top-28 xl:top-20 left-20 bg-red-600  font-semibold text-sm p-2 rounded-full shadow">
            <Heart className="text-white"/>
          </div>
          <div className="absolute top-0 lg:top-auto lg:bottom-2 right-2 xl:right-8 bg-sky-600  font-semibold text-sm p-2 rounded-full shadow">
            <Play className="text-white"/>
          </div>
          <div className="count_places absolute top-0 left-8 xl:left-auto xl:right-0 text-center bg-white text-gray-900 font-bold text-2xl px-8 py-4 rounded-xl shadow shadow-primary">
            2k+
            <span className="text-sm block font-normal">Top Places</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartTripSteps;
