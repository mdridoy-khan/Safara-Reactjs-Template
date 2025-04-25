import React from "react";
import DestinationCard from "../../components/DestinationCard";

const destinations = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYMJkWoTaqweUjTJdf4OfmRfF1JqRY90P3A&s",
    title: "Taj Mahal, India",
    price: "USD $620",
    duration: "5 Days Trip",
  },
  {
    image: "https://images.pexels.com/photos/2675268/pexels-photo-2675268.jpeg?cs=srgb&dl=pexels-silvia-trigo-545701-2675268.jpg&fm=jpg",
    title: "Eiffel Tower, Paris",
    price: "USD $850",
    duration: "5 Days Trip",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9W2Fg_TNVSpYwGmyeCn88Rd3OYZxhL0SQg&s",
    title: "Great Wall, China",
    price: "USD $960",
    duration: "5 Days Trip",
  },
];

const BestDestinations = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        <span className="text-yellow-500">Best</span> Destinations
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae
        praesentium veniam.
      </p>
      <div className="grid gap-6 md:gap-4 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 px-4 max-w-6xl mx-auto">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default BestDestinations;
