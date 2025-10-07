import React  from "react";
import { developers, contact, contactContent } from "../assets/Contact/contact.js";
import useScrollReveal from '../hooks/scrollReveal.js';

// ---------------------------------------------------------------------------------------
// This component displays the contact information and details for the tourism company.
import { ListItem } from '../Components/ui/contact/ListItem';

export default function Contact() {
    useScrollReveal();
    return (
        <>
            <div className="py-5 my-5 scroll-up">
                <h2 className="text-[1.5em] md:text-[2.5em] text-center text-zinc-700 font-semibold pb-3">Contact Us</h2>
                <p className="text-2xl text-center text-zinc-700 font-semibold pb-3">About who we are and what we do</p>
                <p className="text-2xl text-center text-zinc-500 font-semibold pb-3">We're here to answer any question you may have</p>
            </div>
            <div className="w-[90%] max-w-[1400px] mx-auto py-5 my-5">
                {
                    contact.map((item, index) => {
                        return (
                            <div className="pb-5 scroll-up">
                                <h3 className="text-2xl text-center">{item.desc}</h3>
                            </div>
                        )
                    })
                }
                <div className="flex flex-wrap justify-center items-center gap-5">
                    <div className="shadow-md shadow-zinc-600 w-[380px] max-w-[400px] scroll-up p-5 my-10 min-h-[200px] grid items-center duration-300  hover:text-coral ">
                        <h3 className="text-2xl text-zinc-600">{contactContent[0].addressTitle}</h3>
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

                    <div className="shadow-md shadow-zinc-500 w-[380px] max-w-[400px]  p-5  my-10 scroll-up min-h-[200px] grid items-center  duration-300 ">
                        <div className=" scroll-up">
                            <p className="text-2xl text-zinc-500">{contactContent[1].informationTitle}</p>
                            <p>Email : {contactContent[1].email}</p>
                            <p>Customer Support : {contactContent[1].customerSupportEmail}</p>
                        </div>
                    </div>

                    <div className="shadow-md shadow-zinc-500 p-5 w-[380px] max-w-[400px]  scroll-up my-10 min-h-[200px] grid items-center duration-300 ">
                        <div className="scroll-up">
                            <p className="text-2xl text-zinc-500">{contactContent[2].operationTitle}</p>
                            <p>{contactContent[2].duration1}</p>
                            <p>{contactContent[2].duration2}</p>
                        </div>
                    </div>

                    <div className="shadow-md shadow-zinc-500 p-5 scroll-up my-10 w-[380px] max-w-[400px]  min-h-[200px] grid items-center duration-300 hover:scale-y-[1.05] hover:text-coral">
                        <div className="scroll-up">
                            <h3 className="text-2xl text-zinc-500">{contactContent[3].responseTitle}</h3>
                            <ul>
                                {
                                    contactContent[3].responseDetails.map((details, index) => {
                                        return (
                                            <ListItem key={index} content={details}/>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="shadow-md shadow-zinc-500 p-5 scroll-up my-10 w-[380px] max-w-[400px]  min-h-[200px] grid items-center duration-300 hover:scale-y-[1.05] hover:text-coral">
                        <div className="scroll-up">
                            <h3 className="text-zinc-500 text-2xl">{contactContent[4].socialTitle}</h3>
                            <ul>
                                {
                                    contactContent[4].socialMedia.map((details, index) => {
                                        return (
                                            <ListItem key={index} content={details}/>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="w-[380px] max-w-[400px] shadow-md shadow-zinc-500 p-5 scroll-up my-10 min-h-[200px] grid items-center duration-300 hover:scale-y-[1.05] hover:text-coral">
                        <div className="scroll-up">
                            <h3 className="text-2xl text-zinc-500">{contactContent[5].additinalInformation}</h3>
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
            
        </>
    )
}