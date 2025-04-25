import React from "react";
import CustomerImg from "../../assets/boy.png";
import { Star } from "lucide-react" 

const Testimonial = () => {
    return (
        <section className="py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center px-4">
                Here What <span className="text-yellow-500">Our Customers</span> Says?
            </h2>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-4 lg:py-12 px-4 xl:px-0 max-w-6xl">
                <div className="customer_content max-w-full">
                    <p className="text-sm text-secondary mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, autem, laudantium accusamus mollitia tenetur quia nihil quisquam voluptates qui tempora atque iusto pariatur iure voluptate corporis asperiores, recusandae sit? Accusamus aut numquam asperiores recusandae sed repellat doloremque. Nihil qui nemo consequatur facere itaque alias necessitatibus perspiciatis iste ullam soluta illum, corrupti tempora voluptas dolore error numquam saepe provident atque nulla dolores eligendi iusto! Cupiditate ab assumenda fuga eum doloribus illum 
                    </p>
                    <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition duration-300 block w-max">
                        Explore Now
                    </button>
                </div>
                <div className="customer_info">
                    <div>
                        <img src={CustomerImg} alt="customer image" className="max-h-52" />
                        <div className="bg-white shadow-lg p-4 rounded-md mt-4 border-2 border-l-primary">
                            <p className="text-sm text-secondary mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil ad corrupti error molestiae doloremque!
                            </p>
                            <div className="flex items-center justify-between">
                                <h4>
                                    John Doe
                                </h4>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <span className="flex items-center justify-center gap-1">
                                        <Star className="inline-block text-yellow-500" size={16} /> 
                                        <Star className="inline-block text-yellow-500" size={16} /> 
                                        <Star className="inline-block text-yellow-500" size={16} /> 
                                        <Star className="inline-block text-yellow-500" size={16} /> 
                                        <Star className="inline-block" size={16} /> 
                                    </span>
                                    <span className="text-sm text-secondary">4.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;