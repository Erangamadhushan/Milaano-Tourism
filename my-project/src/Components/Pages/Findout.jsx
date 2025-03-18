import React  from "react";
import { destinationGuide } from "../../assets/Findout/content";
import useScrollReveal from '../../hooks/scrollReveal.js';
function Findout() {
    useScrollReveal();
    return (
        <>
            <div className="w-[95%] max-w-[1000px] mx-auto py-5 my-10">
                <div className="scroll-up">
                    <h2 className="text-xl text-center text-coral">
                        {destinationGuide.introduction}
                    </h2>
                </div>
            </div>
            <div className="w-[95%] scroll-up max-w-[1200px] grid grid-cols-1 md:grid-cols-2 mx-auto p-5 py-10 my-10 shadow-md" id={destinationGuide.bestTime.title}>
                <div className="scroll-up">
                    <h2 className=" text-[1.75em] md:text-[2.5em] text-blue-500 font-semibold py-2">
                        {destinationGuide.bestTime.title}
                    </h2>
                    <ul>
                        {
                            destinationGuide.bestTime.description.map((ele) => {
                                return (
                                    <li className="text-lg ">{ele}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    {/* insert image here */}
                </div>
            </div>
            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-10 shadow-md" id={destinationGuide.mustVisitDestination.title}>
                <h2 className="text-[1.75em] md:text-[2.5em] text-blue-500 scroll-up text-bold py-2">
                    {destinationGuide.mustVisitDestination.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        destinationGuide.mustVisitDestination.description.map((content) => {
                            return (
                                <div className="p-5 my-5 scroll-up">
                                    <h2 className="text-[1.5em] font-semibold">{content.title}</h2>
                                    <p className="text-[1.25em]">{content.content}</p>
                                    <ul>
                                        {
                                            content.example.map((exampleDetails) => {
                                                return (
                                                    <li>
                                                        <h3 className="text-[1.25em] text-coral py-2">{exampleDetails.title}</h3>
                                                        <p>{exampleDetails.content}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.practicalInformation.title}>
                <h2 className="text-[2.5em] font-semibold text-blue-500 py-2">{destinationGuide.practicalInformation.title}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        destinationGuide.practicalInformation.description.map((element) => {
                            return (
                                <div className="py-4">
                                <h3 className="text-[1.5em] text-coral font-bold py-2">{element.title}</h3> 
                                <h4 className="text-[1.1em] font-semibold py-2">{element.content}</h4>
                                <ul>
                                        {
                                            element.example.map((example) => {
                                                return (
                                                    <li>{example}</li>
                                                )
                                            })
                                        }
                                </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.sampleItineraries.title}>
                <h2 className="text-[2em] font-bold">{destinationGuide.sampleItineraries.title}</h2>
                <p>{destinationGuide.sampleItineraries.content}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        destinationGuide.sampleItineraries.example.map((component) => {
                            return (
                                <div className="py-4">
                                    <h3 className="text-[1.5em] text-coral py-2">{component.title}</h3>
                                    <p>{component.content}</p>
                                    <ul>
                                        {
                                            component.example.map((details) => {
                                                return (
                                                    <li>{details}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 content-center gap-4 py-10">
                <div className="w-[95%] max-w-[500px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.packingEssentials.title}>
                    <h2 className="py-2 text-[2em] font-bold">{destinationGuide.packingEssentials.title}</h2>
                    {
                        destinationGuide.packingEssentials.example.map((component) => {
                            return (
                                <p className="text-semibold text-[1.05em]">{component}</p>
                            )
                        })
                    }
                </div>

                <div className="w-[95%] max-w-[500px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.commonExpenses.title}>
                    <h2 className="py-2 text-[2em] font-bold">{destinationGuide.commonExpenses.title}</h2>
                    {
                        destinationGuide.commonExpenses.example.map((component) => {
                            return (
                                <p className="text-semibold text-[1.05em]">{component}</p>
                            )
                        })
                    }
                </div>

                <div className="w-[95%] max-w-[600px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.budgetConsideration.title}>
                    <h2 className="py-2 text-blue-500 text-[1.75em] md:text-[2.2em] font-bold">{destinationGuide.budgetConsideration.title}</h2>
                    {
                        destinationGuide.budgetConsideration.example.map((component) => {
                            return (
                                <p className="text-semibold py-1 text-[1.05em]">{component}</p>
                            )
                        })
                    }
                </div>

                <div className="w-[95%] max-w-[600px] mx-auto p-5 my-5 shadow-md">
                    <h2 className="py-2 text-[2.2em] text-blue-500 font-bold">Additional Tips For You </h2>
                    {
                        destinationGuide.others.map((component) => {
                            return (
                                <div className="p-5 my-5 border-2 scroll-up">
                                    <h2 className="py-4 text-2xl font-semibold text-blue-500">{component.title}</h2>
                                    <ul>
                                        {
                                            component.example.map((tip) => {
                                                return (
                                                    <li className="text-semibold py-1 text-[1.05em]">{tip}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Findout;