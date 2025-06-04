import React  from "react";
import { services, subServices } from "../assets/Services/content.js";
import useScrollReveal from '../hooks/scrollReveal.js';

// ---------------------------------------------------------------------------------------
// This component displays the main services offered by the tourism company.

import MainServices from "../Components/ui/Service/MainServices";
import SubServices from '../Components/ui/Service/SubServices';
export default function Service() {
    useScrollReveal();
    return (
        <>
            <div className="grid py-5 my-10 scroll-down" >
                <h2 className="text-[2em] font-bold md:text-[3em] text-center text-zinc-700">Welcome to Milaano Tourism - Your Complete Travel Solutions </h2>
                <p className="text-center text-[1.25em] text-zinc-700"> Your gateway to unforgettable experience and luxury accommodations</p>
            </div>

            <div className="grid grid-cols-1 mx-auto py-4">
               <MainServices />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
                <SubServices />
            </div>

            <div className=" p-5 py-[2em] my-5 mx-auto w-[95%] max-w-[1000px] scroll-up">
                <h2 class="text-3xl text-zinc-700">Ready to Plan Your Perfect Trip ?</h2>
                <p className="text-xl py-5">Contact our travel experts for personalized assistance and exclusive offers</p>
                <a href="./contact" className="bg-coral p-5 rounded-md text-white hover:bg-green-500">Contact Us Now</a>
            </div>
        </>
    )
}