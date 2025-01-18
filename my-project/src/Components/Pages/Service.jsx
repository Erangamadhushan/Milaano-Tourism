import React  from "react";
import { services, subServices } from "../../assets/Services/content";
export default function Service() {
    return (
        <>
            <div className="grid py-5">
                <h2 className="text-[2.5em] text-center">Welcome to Milaano Tourism - Your Complete Travel Solutions </h2>
                <p className="text-center text-[1.25em]"> Your gateway to unforgettable experience and luxury accommodations</p>
            </div>

            <div className="grid grid-cols-1 mx-auto">
                {
                    services.map((service, index) => {
                        return (
                            <div className="p-5 my-5 shadow-md mx-auto w-[95%] max-w-[1200px] hover:shadow-lg">
                                <h2 className="text-3xl font-bold pb-3 ">{service.title}</h2>
                                <hr/>
                                <h3 className="text-2xl font-semibold py-3 underline">{service.subTitle}</h3>
                                <p className=" text-xl py-2">{service.description}</p>
                                <ul>
                                    {
                                        service.ex.map((example) => {
                                            return (
                                                <li className=" text-lg text-green-600">{example}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <p className="py-2 text-lg underline">{service.featureTitle}</p>
                                <ul>
                                    {
                                        service.featureList.map((feature) => {
                                            return (
                                                <li className=" text-md text-green-600">{feature}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

            <div className="grid grid-cols-1 mx-auto">
                {
                    subServices.map((subservice) => {
                        return (
                            <div>
                                
                            </div>
                        )
                    })
                }
            </div>

            <div className=" p-5 py-5 my-5 mx-auto w-[95%] max-w-[1200px]">
                <h2 class="text-2xl">Ready to Plan Your Perfect Trip ?</h2>
                <p className="text-xl py-5">Contact our travel experts for personalized assistance and exclusive offers</p>
                <a href="./contact" className="bg-green-400 p-5 rounded-md text-white hover:bg-green-500">Contact Us Now</a>
            </div>
        </>
    )
}