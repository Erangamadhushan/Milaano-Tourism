import React  from "react";
import { developers } from "../../assets/Contact/contact";
export default function Contact() {
    return (
        <>
            <div className="py-5">
                <h2 className="text-3xl text-center text-black font-extrabold pb-3">Contact Us</h2>
                <p className="text-2xl text-center text-black font-semibold pb-3">About who we are and what we do</p>
                <p className="text-2xl text-center text-black font-semibold pb-3">We're here to answer any question you may have</p>
            </div>
            <div className="py-[20px] my-5 flex flex-wrap gap-5 justify-center items-center">
                {
                    developers.map((developer) => {
                        return (
                            <div class="w-[75%] max-w-[380px] grid p-3 shadow-md relative hover:shadow-2xl hover:scale-[1.05] duration-300">
                                <div>
                                    <img src={developer.img} alt={developer.desc} className="w-[75%] mx-auto"/>
                                </div>
                                <div className="py-5">
                                    <h2 className="text-center text-2xl">{developer.name}</h2>
                                    <h4 className="text-xl py-2">{developer.title}</h4>
                                    <p className="text-center">{developer.desc}</p>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}