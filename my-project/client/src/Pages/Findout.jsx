import React  from "react";
import { destinationGuide } from "../assets/Findout/content.js";
import useScrollReveal from '../hooks/scrollReveal.js';
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
            <div className="w-[95%] scroll-up max-w-[1000px] grid grid-cols-1 md:grid-cols-2 mx-auto p-5 py-10 my-10 " id={destinationGuide.bestTime.title}>
                <div className="scroll-up">
                    <h2 className=" text-[1.75em] md:text-[2.5em] text-zinc-500 font-semibold py-2">
                        {destinationGuide.bestTime.title}
                    </h2>
                    <ul className="space-y-2">
                        {
                            destinationGuide.bestTime.description.map((ele, index) => {
                                return (
                                    <li key={index} className="text-lg leading-relaxed">{ele}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    {/* insert image here */}
                </div>
            </div>
            <div className="w-[95%] max-w-[1000px] mx-auto p-5 my-10" id={destinationGuide.mustVisitDestination.title}>
                <h2 className="text-[1.75em] md:text-[2.5em] text-zinc-500 scroll-up text-bold py-2">
                    {destinationGuide.mustVisitDestination.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        destinationGuide.mustVisitDestination.description.map((content, index) => {
                            return (
                                <div key={index} className="p-5 my-5 scroll-up bg-white rounded-lg shadow-md">
                                    <h3 className="text-[1.5em] font-semibold text-zinc-700 mb-3">{content.title}</h3>
                                    <p className="text-[1.25em] text-gray-600 mb-4 leading-relaxed">{content.content}</p>
                                    <ul className="space-y-2">
                                        {
                                            content.example.map((exampleDetails, exampleIndex) => {
                                                return (
                                                    <li key={exampleIndex} className="border-l-4 border-blue-500 pl-4">
                                                        <h4 className="text-[1.25em] text-blue-600 py-2 font-medium">{exampleDetails.title}</h4>
                                                        <p className="text-gray-600">{exampleDetails.content}</p>
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
            <div className="w-[95%] max-w-[1000px] mx-auto p-5 my-5 " id={destinationGuide.practicalInformation.title}>
                <h2 className="text-[2.5em] font-semibold text-zinc-500 py-2">{destinationGuide.practicalInformation.title}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        destinationGuide.practicalInformation.description.map((element, index) => {
                            return (
                                <div key={index} className="py-4 scroll-reveal bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-[1.5em] text-zinc-700 font-bold py-2 border-b border-gray-200 mb-4">{element.title}</h3> 
                                    <h4 className="text-[1.1em] font-semibold py-2 text-gray-700">{element.content}</h4>
                                    <ul className="space-y-2 mt-4">
                                        {
                                            element.example.map((example, exampleIndex) => {
                                                return (
                                                    <li key={exampleIndex} className="text-gray-600 pl-4 border-l-2 border-blue-200">{example}</li>
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

            <div className="w-[95%] max-w-[1000px] mx-auto p-5 my-5 " id={destinationGuide.sampleItineraries.title}>
                <h2 className="text-[2em] font-bold text-zinc-500">{destinationGuide.sampleItineraries.title}</h2>
                <p>{destinationGuide.sampleItineraries.content}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        destinationGuide.sampleItineraries.example.map((component, index) => {
                            return (
                                <div key={index} className="py-4 bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-[1.5em] text-zinc-700 py-2 font-semibold border-b border-gray-200 mb-4">{component.title}</h3>
                                    <p className="text-gray-600 mb-4">{component.content}</p>
                                    <ul className="space-y-2">
                                        {
                                            component.example.map((details, detailIndex) => {
                                                return (
                                                    <li key={detailIndex} className="text-gray-600 pl-4 border-l-2 border-green-200">{details}</li>
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

            <div className="flex flex-wrap justify-center items-center content-stretch gap-5 py-10">
                <div className="w-[95%] max-w-[500px] min-h-[380px] py-10 p-5 my-5 bg-white rounded-lg shadow-lg scroll-up" id={destinationGuide.packingEssentials.title}>
                    <h2 className="py-2 text-[2em] font-bold text-zinc-600 border-b border-gray-200 mb-4">{destinationGuide.packingEssentials.title}</h2>
                    <div className="space-y-2">
                        {
                            destinationGuide.packingEssentials.example.map((component, index) => {
                                return (
                                    <p key={index} className="text-semibold text-[1.05em] text-gray-600 pl-4 border-l-2 border-orange-200">{component}</p>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="w-[95%] max-w-[500px] min-h-[380px] py-10 p-5 my-5 bg-white rounded-lg shadow-lg scroll-up" id={destinationGuide.commonExpenses.title}>
                    <h2 className="py-2 text-[2em] font-bold text-zinc-600 border-b border-gray-200 mb-4">{destinationGuide.commonExpenses.title}</h2>
                    <div className="space-y-2">
                        {
                            destinationGuide.commonExpenses.example.map((component, index) => {
                                return (
                                    <p key={index} className="text-semibold text-[1.05em] text-gray-600 pl-4 border-l-2 border-purple-200">{component}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <div className="w-[95%] max-w-[600px] mx-auto p-5 my-5 bg-white rounded-lg shadow-md" id={destinationGuide.budgetConsideration.title}>
                    <h2 className="py-2 text-zinc-600 text-[1.75em] md:text-[2.2em] font-bold border-b border-gray-200 mb-4">{destinationGuide.budgetConsideration.title}</h2>
                    <div className="space-y-2">
                        {
                            destinationGuide.budgetConsideration.example.map((component, index) => {
                                return (
                                    <p key={index} className="text-semibold py-1 text-[1.05em] text-gray-600 pl-4 border-l-2 border-blue-200">{component}</p>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="w-[95%] max-w-[600px] mx-auto p-5 my-5 bg-white rounded-lg shadow-md">
                    <h2 className="py-2 text-[2.2em] text-zinc-500 font-bold border-b border-gray-200 mb-4">Additional Tips For You</h2>
                    {
                        destinationGuide.others.map((component, index) => {
                            return (
                                <div key={index} className="p-5 my-5 scroll-up bg-gray-50 rounded-lg">
                                    <h3 className="py-4 text-2xl font-semibold text-zinc-600">{component.title}</h3>
                                    <ul className="space-y-2">
                                        {
                                            component.example.map((tip, tipIndex) => {
                                                return (
                                                    <li key={tipIndex} className="text-semibold py-1 text-[1.05em] text-gray-600 pl-4 border-l-2 border-green-200">{tip}</li>
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