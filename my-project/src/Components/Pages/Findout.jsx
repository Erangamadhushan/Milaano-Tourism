import React  from "react";
import { destinationGuide } from "../../assets/Findout/content";
function Findout() {

    return (
        <>
            <div className="w-[95%] max-w-[1200px] mx-auto py-5 my-5">
                <h2 className="text-xl text-center">
                    {destinationGuide.introduction}
                </h2>
            </div>
            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.bestTime.title}>
                <h2 className="text-2xl py-2">
                    {destinationGuide.bestTime.title}
                </h2>
                <ul>
                    {
                        destinationGuide.bestTime.description.map((ele) => {
                            return (
                                <li className="text-lg">{ele}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.mustVisitDestination.title}>
                <h2 className="text-2xl py-2">
                    {destinationGuide.mustVisitDestination.title}
                </h2>
                {
                    destinationGuide.mustVisitDestination.description.map((content) => {
                        return (
                            <div className="p-5 my-5">
                                <h2>{content.title}</h2>
                                <p>{content.content}</p>
                                <ul>
                                    {
                                        content.example.map((exampleDetails) => {
                                            return (
                                                <li>
                                                    <h3>{exampleDetails.title}</h3>
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
            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.practicalInformation.title}>
                <h2>{destinationGuide.practicalInformation.title}</h2>
                {
                    destinationGuide.practicalInformation.description.map((element) => {
                        return (
                            <div className="py-4">
                               <h3>{element.title}</h3> 
                               <h4>{element.content}</h4>
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

            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.sampleItineraries.title}>
                <h2>{destinationGuide.sampleItineraries.title}</h2>
                <p>{destinationGuide.sampleItineraries.content}</p>
                {
                    destinationGuide.sampleItineraries.example.map((component) => {
                        return (
                            <div className="py-4">
                                <h3>{component.title}</h3>
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

            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.packingEssentials.title}>
                <h2 className="py-2">{destinationGuide.packingEssentials.title}</h2>
                {
                    destinationGuide.packingEssentials.example.map((component) => {
                        return (
                            <p>{component}</p>
                        )
                    })
                }
            </div>

            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.commonExpenses.title}>
                <h2 className="py-2">{destinationGuide.commonExpenses.title}</h2>
                {
                    destinationGuide.commonExpenses.example.map((component) => {
                        return (
                            <p>{component}</p>
                        )
                    })
                }
            </div>

            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md" id={destinationGuide.budgetConsideration.title}>
                <h2 className="py-2">{destinationGuide.budgetConsideration.title}</h2>
                {
                    destinationGuide.budgetConsideration.example.map((component) => {
                        return (
                            <p>{component}</p>
                        )
                    })
                }
            </div>

            <div className="w-[95%] max-w-[1200px] mx-auto p-5 my-5 shadow-md">
                <h2 className="py-2">Additional Tips For You </h2>
                {
                    destinationGuide.others.map((component) => {
                        return (
                            <div className="py-3">
                                <h2 className="py-2 text-xl">{component.title}</h2>
                                <ul>
                                    {
                                        component.example.map((tip) => {
                                            return (
                                                <li>{tip}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Findout;