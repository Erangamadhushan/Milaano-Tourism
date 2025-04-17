import React  from "react";
import useScrollReveal from '../../hooks/scrollReveal.js';
import { staff} from "../../assets/About/content.js";
export default function AboutUs() {
    useScrollReveal();
    return (
        <>
            
            <div className=" py-5">
                <div className="p-5 w-[95%] max-w-[1200px] mx-auto flex justify-center items-center" >
                    <div className="min-h-[50vh]  p-3 scroll-up">
                        <h1 className="text-[3em] font-bold text-zinc-500 text-center">About Us</h1>
                        <p class="text-lg p-5 text-center">About We want to create a one platform that helps you plan your trip to any destination. Whether you are a local or a foreign traveler, you will find everything you need to know about your chosen place. You will get a general overview of Sri Lanka and its current situation. You will learn about the weather, the attractions, and the dos and don'ts of each location. You will also discover the best ways to get around and the nearest facilities like police stations, ATMs, banks, pharmacies, and more. Our platform is your one-stop guide to enjoy your travel experience.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-10 p-5">
                    <div className="min-h-[50vh] max-w-[600px] mx-auto p-3 scroll-reveal" >
                        <h1 className=" text-[2em] md:text-[3em] font-bold text-zinc-500 py-5 text-center">Our Vision</h1>
                        <p class="text-lg text-center">To inspire and empower people to explore the world, create unforgettable memories, and foster a deeper understanding of diverse cultures through seamless and accessible travel experiences.</p>
                    </div>
                    <div className="min-h-[50vh] max-w-[600px] mx-auto p-3 scroll-items">
                        <h1 className="text-[2em] md:text-[3em] font-bold py-5 text-zinc-500 text-center">Our Mission</h1>
                        <p class="text-lg text-center">Our mission is to be the ultimate travel companion, providing comprehensive, reliable, and personalized resources that cater to every traveler's needs. We aim to simplify the journey from planning to booking, offering expert advice, curated experiences, and innovative tools that turn dream destinations into reality. Through our commitment to sustainability and cultural respect, we strive to make travel not just an adventure, but a force for positive change.</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-[1.5em] font-semibold text-zinc-500 text-center">------- Our Team -------</h4>
                    <h1 className="text-[2em] md:text-[2.5em]  text-center"> Explorer Our <span className="text-zinc-500 fond-extrabold">STAFFS</span></h1>
                    <div className="flex flex-wrap justify-center items-center gap-2 p-5">
                        {staff.map((item, index) => {
                            return (
                                <div className="w-[90%] md:w-[300px] bg-white shadow-lg rounded-lg p-3 m-2 scroll-up" key={index}>
                                    <img src={item.image} alt="" className="h-[200px] object-cover " />
                                    <h1 className="text-[1.5em] font-bold text-blue-500 text-center py-3">{item.name}</h1>
                                    <p className="text-lg font-semibold">{item.role}</p>
                                    <p className="text-gray-500">{item.email}</p>
                                    <div className="flex justify-center items-center gap-2 py-3">
                                        <a href={item.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-[1.5em] text-zinc-500 hover:text-zinc-800"></i></a>
                                        <a href={item.facebook} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook text-[1.5em] text-zinc-500 hover:text-zinc-800"></i></a>
                                    </div>

                                </div>
                            )
                        }
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}