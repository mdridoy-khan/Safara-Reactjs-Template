import React from "react";
import SubscribeImg from "../../assets/subscribe.jpg"; 
const Subscribe = () => {
    return (
        <section style={{ backgroundImage: `url(${SubscribeImg})`}} className="min-h-60 sm:min-h-80 w-full bg-cover bg-bottom flex items-end justify-end bg-no-repeat">
            <div className="container mx-auto mb-8">
                <form action="#" className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center gap-4 px-4">
                    <fieldset className="shadow-lg w-full mx-auto relative">
                        <input className="w-full bg-white py-4 px-8 rounded-full focus:outline-none shadow" type="text" placeholder="Enter Your Email"/>
                        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition duration-300 inline-block absolute right-2 top-2" type="submit">
                            Subscribe
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}
export default Subscribe;