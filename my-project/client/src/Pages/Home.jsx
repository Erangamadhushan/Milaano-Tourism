import React, {useEffect, useState}  from "react";
import { mainImg, latest, events, destinations, recaps, icons, luxuryRoomImg, introduceAbout }  from '../assets/Home/HomeResource.js';
import useScrollReveal from '../hooks/scrollReveal.js';
import RoomCategory from "./RoomCategory.jsx";
import { roomContent } from '../assets/Home/rooms/content.js';

import { exclusiveOffers } from '../contents/home/exclusive.js';
import { NewsLatter } from "../Components/forms/NewsLatter";
// -----------------------------------------------------------------------------------
import { Hero } from "../Components/ui/Home/Hero.jsx";
import { Exclusive } from "../Components/ui/Home/Exclusive";
import { BookRoom } from "../Components/ui/Home/BookRoom.jsx";
import { ServiceOverview } from "../Components/ui/Home/ServiceOverview";
import { EXplorerIslandStories } from "../Components/ui/Home/ExplorerIslandStories";
import { DestinationDirection } from '../Components/ui/Home/DestinationDirection';
import { DoThingsDirection } from '../Components/ui/Home/DoThingsDirection';

function Home() {

    const [aboutImage, setAboutImage] = useState(introduceAbout[0]);

    useEffect(() => {
        setTimeout(()=> {
            setAboutImage((aboutImage == introduceAbout[0] ? introduceAbout[0]:introduceAbout[1]))
        },5000)
    },[])

    useScrollReveal();
    const myImgStyles = { backgroundSize:"cover" }
    const subContentParent = {
        position:"relative", justifyContent:"center", alignItems:"center",overflow:"hidden"
    }
    const myhoverContent = {
        position:"absolute", width:"100%", height:"100%", top:0, left:0, justifyContent:"center", 
        alignItems:"center", padding:".8em", transitionProperty:"hover", transitionDuraton:3, backgroundColor:"#52525b"
    }
    
    return (
        <>
            <div className="grid gap-5 bg-blue-50">
                <Hero />
                
                <div className="flex flex-row py-5 max-w-[1420px] mx-auto my-10">
                    <div className="relative p-3">
                        <div className="w-[95%] mx-auto md:float-left max-w-[900px] scroll-up">
                            <h2 className="text-[1.5em] md:text-[3em] lg:text-[5em] py-4 text-center lg:text-justify text-zinc-700 font-semibold">About Us</h2>
                            <h2 className="text-[1.25em] lg:text-[2.5em] py-3 text-zinc-700">Unwind in our stunning infinity pool overlooking the Indian Ocean. Our poolside service ensures refreshing beverages and light snacks are always within reach as you soak in the tropical sunshine.</h2>
                        </div>
                        <div className="w-[95%] mx-auto md:float-left max-w-[350px] scroll-up">
                            <img src={aboutImage} className="rounded-[15%]" alt="introduce about content "/>
                            <div className="absolute top-[-20%] left-[-15%] w-[60%] h-full scroll-up-200">
                                <img src={introduceAbout[1]} className="rounded-[15%]" alt="introduce about content "/>
                            </div>
                            <div className="absolute bottom-[-20%] right-[-15%] w-[55%] he-full scroll-up-500">
                                <img src={introduceAbout[2]} className="rounded-[15%]" alt="introduce about content "/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <ServiceOverview />
                    
                <div className="relative grid mx-auto">
                    <div className="py-5 mx-auto">
                        <h2 className="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] py-3 text-center lg:text-justify text-zinc-500 font-semibold ">------- Our Rooms -------</h2>
                        <h2 className="text-[1.25em] md:text-[2.25em] lg:text-[2.5em] py-3 text-center lg:text-justify text-zinc-500 font-semibold">Explorer Our Rooms</h2>
                    </div>
                    <div className="relative py-5 max-w-[1380px] flex flex-wrap justify-center items-center mx-auto">
                        {
                            roomContent.map((roomDetails) => {
                                return (
                                    <RoomCategory key={roomDetails.room_type} roomDetails={roomDetails} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="relative py-5 max-w-[1320px] mx-auto">
                    <div>
                        <h2 className="text-center text-zinc-700 font-semibold py-5 text-[1.5em] md:text-[2.5em] scroll-reveal">Exclusive Hotel Offers</h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-5">
                        {
                            exclusiveOffers.map((offer, index ) => {
                                return (
                                    <Exclusive key={index} title={offer.title} description={offer.description} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="relative w-[100%] scroll-up  min-h-[80vh] p-5 bg-zinc-500 mx-auto my-20 flex gap-5" style={{backgroundImage:`url(${introduceAbout[3]})`,backgroundSize:"cover"}}>
                    <BookRoom/>
                </div>
            </div>

            <div className="relative w-[100%] max-w-[1320px] mx-auto grid justify-center grid-cols-1 md:grid-cols-2 p-5 py-10 scroll-reveal" >

                <DestinationDirection />

                <div className="p-5 grid">
                    {
                        destinations.map((item, index) => {
                            return (
                                <div className="" >
                                    <img className="h-uato w-full object-cover" src={item} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="relative w-[100%] max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 p-5 py-10 scroll-reveal">
                <DoThingsDirection /> 
            </div>

            <div className="relative w-[100%] max-w-[1320px] mx-auto grid justify-center scroll-reveal">
                <h1 className="text-[2.5em] text-black text-center py-10 md:text-left font-semibold px-5">Explorer More Island Stories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2 py-5">
                    <div className="grid gap-2">
                        <EXplorerIslandStories recaps={recaps[0]} content="Golden sands meet turquoise waters along Sri Lanka stunning coastline. Palm trees sway in gentle breezes while local fishing boats dot the horizon."/>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2" style={subContentParent} >
                            <EXplorerIslandStories recaps={recaps[1]} content="Golden sands meet turquoise waters along Sri Lanka stunning coastline. Palm trees sway in gentle breezes while local fishing boats dot the horizon."/>
                            <EXplorerIslandStories recaps={recaps[2]} content="The railway journey through Sri Lanka offers one of the world most scenic rides. Vintage trains wind through misty mountains, tea plantations, and dense forests, providing breathtaking panoramas at every turn."/>
                        </div>
                        <EXplorerIslandStories recaps={recaps[3]} content="Lush hillside plantations produce world-renowned Ceylon tea. Workers skillfully pluck tender leaves from emerald slopes, contributing to the country signature export."/>
                    </div>
                    <div className="grid gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2" >
                            <EXplorerIslandStories recaps={recaps[4]} content="This ancient rock fortress rises dramatically from the jungle, topped with the ruins of King Kasyapa palace. Its frescoes and mirror wall attract visitors worldwide."/>
                            <div style={subContentParent} >
                                <div className="group">
                                    <div>
                                        <img src={recaps[7]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                    </div>
                                    <div style={myhoverContent} className="hidden  group-hover:flex">
                                        <p className="text-center text-white">This grand Buddhist festival features elaborately decorated elephants, traditional dancers, and fire performers parading through Kandy streets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <EXplorerIslandStories recaps={recaps[6]} content="This UNESCO World Heritage site houses remarkable biodiversity, with endemic birds, butterflies, and rare plant species thriving in its dense rainforest."/>
                        <div className="grid">
                            <EXplorerIslandStories recaps={recaps[8]} content="Sri Lanka ancient capital showcases towering stupas, sacred Bodhi trees, and intricate stone carvings from the island earliest Buddhist civilization."/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[100%] max-w-[1320px] mx-auto p-5 bg-mainColor my-1">
                <NewsLatter />
            </div>
        </>
    )
}
export default Home