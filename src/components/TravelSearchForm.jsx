import React from "react";

const TravelSearchForm = () => {
  return (
    <div className="container mx-auto w-full bg-white/20 backdrop-blur-md rounded shadow-lg p-4 md:px-4">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center justify-between">
            <div className="form_group grid grid-cols-1 sm:grid-cols-5 gap-2 rounded sm:rounded-full bg-white w-full">

                <select className="p-3 rounded-full bg-white w-full focus:outline-none">
                  <option>Destinations</option>
                  <option>Paris</option>
                  <option>London</option>
                  <option>Tokyo</option>
                </select>

                <select className="p-3 bg-white w-full focus:outline-none">
                  <option>Duration</option>
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                  <option>1 Week+</option>
                </select>

                <select className="p-3 bg-white w-full focus:outline-none">
                  <option>Children</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>

                <select className="p-3 bg-white w-full focus:outline-none">
                  <option>Total People</option>
                  <option>1-3</option>
                  <option>4-7</option>
                  <option>10+</option>
                </select>

                <input type="date" placeholder="Date & Time" className="p-3 rounded-full bg-white w-full focus:outline-none"/>
            </div>
            <button className="form_button bg-primary text-white rounded-full py-3 px-8 md:px-2 flex items-center justify-center max-w-52">
                Find Now
            </button>
        </div>
    </div>
  );
};

export default TravelSearchForm;
