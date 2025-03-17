import React  from "react";
import { developers, contact, contactContent } from "../../assets/Contact/contact";
import useScrollReveal from '../../hooks/scrollReveal.js';
export default function Contact() {
    useScrollReveal();
    return (
        <>
            <div className="py-5 my-5 scroll-up">
                <h2 className="text-[1.5em] md:text-[2.5em] text-center text-blue-500 font-semibold pb-3">Contact Us</h2>
                <p className="text-2xl text-center text-blue-500 font-semibold pb-3">About who we are and what we do</p>
                <p className="text-2xl text-center text-blue-500 font-semibold pb-3">We're here to answer any question you may have</p>
            </div>
            <div className="w-[75%] max-w-[1200px] mx-auto py-5 my-5">
                {
                    contact.map((item, index) => {
                        return (
                            <div className="pb-5 scroll-up">
                                <h3 className="text-2xl">{item.desc}</h3>
                            </div>
                        )
                    })
                }
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="shadow-md scroll-up p-5 my-10 min-h-[200px] grid items-center duration-300  hover:text-coral ">
                        <h3 className="text-2xl text-blue-500">{contactContent[0].addressTitle}</h3>
                        <ul>
                            {
                                contactContent[0].address.map((item, index) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="shadow-md p-5  my-10 scroll-up min-h-[200px] grid items-center  duration-300 ">
                        <div className=" scroll-up">
                            <p className="text-2xl text-blue-500">{contactContent[1].informationTitle}</p>
                            <p>Email : {contactContent[1].email}</p>
                            <p>Customer Support : {contactContent[1].customerSupportEmail}</p>
                        </div>
                    </div>

                    <div className="shadow-md p-5 scroll-up my-10 min-h-[200px] grid items-center duration-300 ">
                        <div className="scroll-up">
                            <p className="text-2xl text-blue-500">{contactContent[2].operationTitle}</p>
                            <p>{contactContent[2].duration1}</p>
                            <p>{contactContent[2].duration2}</p>
                        </div>
                    </div>

                    <div className="shadow-md p-5 scroll-up my-10 min-h-[200px] grid items-center duration-300 hover:scale-y-[1.05] hover:text-coral">
                        <div className="scroll-up">
                            <h3 className="text-2xl text-blue-500">{contactContent[3].responseTitle}</h3>
                            <ul>
                                {
                                    contactContent[3].responseDetails.map((details) => {
                                        return (
                                            <li>{details}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="shadow-md p-5 scroll-up my-10 min-h-[200px] grid items-center duration-300 hover:scale-y-[1.05] hover:text-coral">
                        <div className="scroll-up">
                            <h3 className="text-blue-500 text-2xl">{contactContent[4].socialTitle}</h3>
                            <ul>
                                {
                                    contactContent[4].socialMedia.map((details) => {
                                        return (
                                            <li>{details}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="shadow-md p-5 scroll-up my-10 min-h-[200px] grid items-center duration-300 hover:scale-y-[1.05] hover:text-coral">
                        <div className="scroll-up">
                            <h3 className="text-2xl text-blue-500">{contactContent[5].additinalInformation}</h3>
                            <ul>
                                {
                                    contactContent[5].additionalDetails.map((details) => {
                                        return (
                                            <li>{details}</li>
                                        )
                                    })
                                }
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="container py-5 text-center">
                <h2 className="text-3xl text-blue-500">Who We are ?</h2>
            </div>
            <div className="py-[20px] my-5 flex flex-wrap gap-5 justify-center items-center">
                
                {
                    developers.map((developer, $index) => {
                        return (
                            <div class="w-[75%] max-w-[380px] grid p-3 shadow-md relative hover:shadow-2xl hover:scale-[1.01] duration-300">
                                <div>
                                    <img src={developer.img} alt={developer.desc} className="w-[75%] mx-auto"/>
                                </div>
                                <div className="py-5">
                                    <h2 className="text-center text-2xl font-semibold text-blue-500">{developer.name}</h2>
                                    <h4 className="text-xl text-center py-2 text-blue-600">{developer.title}</h4>
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