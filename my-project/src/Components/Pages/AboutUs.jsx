import React  from "react";
export default function AboutUs() {
    return (
        <>
            
            <div className=" py-5">
                <div className="p-5 my-5 w-[95%] max-w-[1200px] mx-auto flex justify-center items-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                    <div className="min-h-[50vh]  p-3">
                        <h1 className="text-[3em] font-bold text-blue-500 text-center">About Us</h1>
                        <p class="text-lg p-5 text-center">About We want to create a one platform that helps you plan your trip to any destination. Whether you are a local or a foreign traveler, you will find everything you need to know about your chosen place. You will get a general overview of Sri Lanka and its current situation. You will learn about the weather, the attractions, and the dos and don'ts of each location. You will also discover the best ways to get around and the nearest facilities like police stations, ATMs, banks, pharmacies, and more. Our platform is your one-stop guide to enjoy your travel experience.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-10 p-5 my-10">
                    <div className="min-h-[50vh] max-w-[600px] mx-auto p-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                        <h1 className=" text-[2em] md:text-[3em] font-bold text-blue-500 py-5 text-center">Our Vision</h1>
                        <p class="text-lg text-center">To inspire and empower people to explore the world, create unforgettable memories, and foster a deeper understanding of diverse cultures through seamless and accessible travel experiences.</p>
                    </div>
                    <div className="min-h-[50vh] max-w-[600px] mx-auto p-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                        <h1 className="text-[2em] md:text-[3em] font-bold py-5 text-blue-500 text-center">Our Mission</h1>
                        <p class="text-lg text-center">Our mission is to be the ultimate travel companion, providing comprehensive, reliable, and personalized resources that cater to every traveler's needs. We aim to simplify the journey from planning to booking, offering expert advice, curated experiences, and innovative tools that turn dream destinations into reality. Through our commitment to sustainability and cultural respect, we strive to make travel not just an adventure, but a force for positive change.</p>
                    </div>
                </div>
            </div>
        </>
    )
}