import React  from "react";
import { services, subServices } from "../../assets/Services/content";
import useScrollReveal from '../../hooks/scrollReveal.js';
export default function Service() {
    useScrollReveal();
    return (
        <>
            <div className="grid py-5 my-10 scroll-up" >
                <h2 className="text-[2.5em] text-center text-blue-500">Welcome to Milaano Tourism - Your Complete Travel Solutions </h2>
                <p className="text-center text-[1.25em] text-blue-500"> Your gateway to unforgettable experience and luxury accommodations</p>
            </div>

            <div className="grid grid-cols-1 mx-auto py-4">
                <div>
                    {
                        services.map((service, index) => {
                            return (
                                <div className="p-5 my-10  mx-auto w-[95%] max-w-[1000px] scroll-reveal" >
                                    <h2 className="text-3xl font-bold text-blue-500 pb-3 ">{service.title}</h2>
                                    <hr/>
                                    <h3 className="text-2xl font-semibold text-blue-500 py-3 underline">{service.subTitle}</h3>
                                    <p className=" text-xl py-2">{service.description}</p>
                                    <ul>
                                        {
                                            service.ex.map((example) => {
                                                return (
                                                    <li className=" text-lg text-black">{example}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <p className="py-2 text-lg text-blue-500 underline">{service.featureTitle}</p>
                                    <ul className="py-4">
                                        {
                                            service.featureList.map((feature) => {
                                                return (
                                                    <li className="py-2 text-md text-black">{feature}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="py-3">
                                        <a href="./findout" className="my-5 p-5 px-10 text-white bg-coral">Find Out</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
                {
                    subServices.map((subservice) => {
                        return (
                            <div className="p-5 scroll-up py-5 my-5  mx-auto w-[95%] max-w-[600px] shadow-lg">
                                <h2 className="text-3xl text-blue-500 py-3">{subservice.title}</h2>
                                <p className="text-xl">{subservice.subTitle}</p>
                                <ul className="py-4">
                                    {
                                        subservice.item.map((item) => {
                                            return (
                                                <li className="py-1">
                                                    <p className=" text-lg">{item.title}</p>
                                                    <p className="">-{item.content}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="py-3">
                                    <a href="./findout" className="my-5 p-5 px-10 text-white bg-coral">Find Out</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className=" p-5 py-[2em] my-5 mx-auto w-[95%] max-w-[1000px] scroll-up">
                <h2 class="text-3xl text-blue-500">Ready to Plan Your Perfect Trip ?</h2>
                <p className="text-xl py-5">Contact our travel experts for personalized assistance and exclusive offers</p>
                <a href="./contact" className="bg-coral p-5 rounded-md text-white hover:bg-green-500">Contact Us Now</a>
            </div>
        </>
    )
}