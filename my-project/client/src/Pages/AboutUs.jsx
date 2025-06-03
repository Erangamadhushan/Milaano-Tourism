import React  from "react";
import useScrollReveal from '../hooks/scrollReveal.js';
import { staff } from "../assets/About/content.js";

// ---------------------------------------------------------------------------------------
import { Vision, Mission, AboutIntro } from "../Components/ui/About/Vision&Mission.jsx";
import { Cards } from "../Components/ui/About/Cards.jsx";
export default function AboutUs() {
    useScrollReveal();
    return (
        <>
            
            <div className=" py-5">

                <AboutIntro />
                
                <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-10 p-5">

                    <Vision />
                    <Mission />
                    
                </div>
                <div>
                    <h4 className="text-[1.5em] font-semibold text-zinc-500 text-center">------- Our Team -------</h4>
                    <h1 className="text-[2em] md:text-[2.5em]  text-center"> Explorer Our <span className="text-zinc-500 fond-extrabold">STAFFS</span></h1>
                    <div className="flex flex-wrap justify-center items-center gap-2 p-5">
                        {staff.map((item, index) => {
                            return (
                                <Cards key={index} person={item} />
                            )
                        }
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}