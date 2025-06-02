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
import { EXplorerIslandStories } from "../Components/ui/Home/ExplorerIslandStories";

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
                <div>
                <div className="relative p-3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center md:grid-cols- py-[3em] float:left">
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[0]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl font-bold">Rooms</h2>
                            <p className="text-gray-500 text-center">Our elegantly appointed rooms and suites offer premium comfort with plush bedding, modern amenities, and meticulous cleanliness. Each space features a smart TV, mini-bar, electronic safe, and coffee maker, ensuring a restful stay with all conveniences at your fingertips.</p>
                        </div>
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl  font-bold">Staff & Service</h2>
                            <p className="text-gray-500 text-center">Our dedicated team delivers exceptional hospitality with 24/7 attentive service. From swift check-in to personalized concierge assistance, our professional staff anticipates your needs with warmth and efficiency, ensuring every moment of your stay exceeds expectations.</p>
                        </div>
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl  font-bold">Dining & Food</h2>
                            <p className="text-gray-500 text-center">Savor culinary excellence at our diverse dining venues. From gourmet restaurants to casual cafés, we offer fresh, locally-sourced cuisine, 24-hour room service, and comprehensive breakfast options. Special dietary requirements are thoughtfully accommodated upon request.</p>
                        </div>
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[2]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl font-bold">Wellness & Recreation</h2>
                            <p className="text-gray-500 text-center">Rejuvenate body and mind in our comprehensive wellness facilities. Our sparkling pool, state-of-the-art fitness center, and luxurious spa offer the perfect balance of exercise and relaxation. Expert therapists provide treatments using premium products for total renewal.</p>
                        </div>
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[0]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl font-bold">Business & Events</h2>
                            <p className="text-gray-500 text-center">Sophisticated meeting spaces equipped with cutting-edge technology support productive business gatherings. Our versatile venues accommodate everything from intimate meetings to grand conferences, complemented by dedicated event planners ensuring flawless execution.</p>
                        </div>
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl  font-bold">Location & Accessibility</h2>
                            <p className="text-gray-500 text-center">Strategically positioned for convenience, our hotel offers easy access to major attractions and business districts. Comprehensive transportation options include secure parking, airport shuttles, and wheelchair accessibility throughout all facilities.</p>
                        </div>
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl  font-bold">Technology & Connectivity</h2>
                            <p className="text-gray-500 text-center">Stay seamlessly connected with complimentary high-speed Wi-Fi throughout. Smart room controls, multiple charging stations, and integrated entertainment systems create a tech-forward environment that supports both business and leisure needs.</p>
                        </div>
                        <div className="w-[95%] scroll-items max-w-[320px] mx-auto  min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 ">
                            <img src={icons[2]} className="w-[50px] mx-auto" alt="available rooms"/>
                            <h2 className="text-black text-center text-xl font-bold">Safety & Security</h2>
                            <p className="text-gray-500 text-center">Your wellbeing is paramount with comprehensive security measures including 24/7 staff, advanced key card systems, discreet CCTV monitoring, and state-of-the-art fire safety. Medical assistance is readily available when needed.</p>
                        </div>
                    </div>
                    
                </div>
                </div>
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
                <div className="p-5" >
                    <div className="">
                        <h2 className="text-[3.5em] font-extrabold text-zinc-500">Destination  Guide</h2>
                        <p className="text-[2.5em] text-zinc-500">Holiday in Sri Lanka</p>
                        <p className="text-lg py-10">Sri Lanka is a meeting place of friendly faces who share their homes and trade; a space for spiritual healing; a land for learning from the old and the new; a hub of commercial activity; a spot for tranquility. Sri Lanka casts a spell unlike anywhere else. It draws people in, not with artificial attractions and grand gestures, but by spellbinding soul and sincerity.</p>
                        <a href="/findout" className="border border-zinc-500 p-5 text-lg hover:bg-zinc-500 hover:text-white">Find Out More </a>
                    </div>
                </div>
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
                <div className="p-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015322.2095558839!2d80.18777706428749!3d6.250238567687185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bad9013377%3A0x44238fe850f6f47e!2sSouthern%20Province!5e0!3m2!1sen!2slk!4v1736763874158!5m2!1sen!2slk" loading="lazy" style={{width:'95%',margin:'auto',height:'350px'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="p-5">
                    <div className="">
                        <h2 className="text-[3.5em] font-extrabold text-zinc-500">Things to do</h2>
                        <p className="text-[2.5em] text-zinc-500">in Sri Lanka</p>
                        <p className="text-lg py-10">We want to share Sri Lanka extraordinarily diverse and authentic story with the rest of the world. We want to help you discover the many thousands of different ways in which you can fall in love with our home & plan the perfect trip; local experts, local perspective and all the best tips on where to eat, what to do, who to meet, how to get there and where to make your next favourite memory.</p>
                        <a href="/findout" className="border border-zinc-500 p-5 text-lg hover:bg-zinc-500 hover:text-white">Find Out More </a>
                    </div>
                </div>
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