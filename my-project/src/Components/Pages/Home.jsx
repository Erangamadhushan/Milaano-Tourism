import React  from "react";
import { mainImg, latest, events, destinations, recaps, icons, luxuryRoomImg }  from '../../assets/Home/HomeResource.js';
import useScrollReveal from '../../hooks/scrollReveal.js';


function Home() {

    useScrollReveal();
    const myImgStyles = {
        backgroundSize:"cover"
    }

    const subContentParent = {
        position:"relative", justifyContent:"center", alignItems:"center",overflow:"hidden"
    }
    const myhoverContent = {
        position:"absolute", width:"100%", height:"100%", top:0, left:0, justifyContent:"center", 
        alignItems:"center", padding:".8em", transitionProperty:"hover", transitionDuraton:3, backgroundColor:"#2196fe"
    }
    return (
        <>
            <div className="grid gap-5 bg-blue-50">
                {
                    mainImg.map((item) => {
                        return (
                            <>
                                <div className="w-full min-h-[90vh] flex justify-center items-center bg-gray-200" style={{backgroundImage:`url(${item})`,backgroundSize:"cover"}}>
                                    <div className="w-[100%] p-5 min-h-[90vh] text-center bg-[#222222a0] mx-auto">
                                        <div className="w-[100%] md:w-[60%] mx-auto min-h-[90vh] grid place-items-center items-center">
                                            <div className="scroll-reveal">
                                                <h1 className=" text-[1.5em] md:text-[3em]  text-gray-100 font-bold py-3">Milaano Hotels, Your Luxury Gateway to Sri Lankan Paradise</h1>
                                                <p className="text-lg text-white">Welcome to Milaano Hotels, where international travelers discover the true essence of Sri Lankan hospitality. Nestled along Sri Lanka's pristine coastline, our exclusive property offers a perfect blend of luxury, comfort, and authentic cultural experiences designed specifically for our foreign guests.</p>
                                                <div className="py-4 my-3">
                                                    <a href="/explorermore" class="mt-5 bg-blue-500 text-white text-lg p-5 px-[50px] font-semibold hover:bg-blue-600">Explorer </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div className="flex flex-row py-5 max-w-[1320px] mx-auto ">
                    <div className="relative w-[100vw] lg:w-[65vw] p-3">
                        <div className="scroll-up">
                            <h2 className="text-[1.5em] py-4 text-center lg:text-justify text-blue-500 font-semibold lg:text-[2em]">About Us</h2>
                            <h2 className="text-[1.25em] lg:text-[1.5em] py-3">Unwind in our stunning infinity pool overlooking the Indian Ocean. Our poolside service ensures refreshing beverages and light snacks are always within reach as you soak in the tropical sunshine.</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 py-[3em]">
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto border border-blue-500 min-h-[200px] p-3 py-5 group hover:bg-blue-400 duration-500 ">
                                <img src={icons[0]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl font-bold group-hover:text-white">Rooms</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Our elegantly appointed rooms and suites offer premium comfort with plush bedding, modern amenities, and meticulous cleanliness. Each space features a smart TV, mini-bar, electronic safe, and coffee maker, ensuring a restful stay with all conveniences at your fingertips.</p>
                            </div>
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto  border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400 duration-500">
                                <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl  font-bold group-hover:text-white">Staff & Service</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Our dedicated team delivers exceptional hospitality with 24/7 attentive service. From swift check-in to personalized concierge assistance, our professional staff anticipates your needs with warmth and efficiency, ensuring every moment of your stay exceeds expectations.</p>
                            </div>
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto  border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400 duration-500">
                                <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl  font-bold hover:text-white">Dining & Food</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Savor culinary excellence at our diverse dining venues. From gourmet restaurants to casual cafés, we offer fresh, locally-sourced cuisine, 24-hour room service, and comprehensive breakfast options. Special dietary requirements are thoughtfully accommodated upon request.</p>
                            </div>
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400 duration-500">
                                <img src={icons[2]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl font-bold group-hover:text-white">Wellness & Recreation</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Rejuvenate body and mind in our comprehensive wellness facilities. Our sparkling pool, state-of-the-art fitness center, and luxurious spa offer the perfect balance of exercise and relaxation. Expert therapists provide treatments using premium products for total renewal.</p>
                            </div>
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto border border-blue-500 min-h-[200px] p-3 py-5 group hover:bg-blue-400 duration-500">
                                <img src={icons[0]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl font-bold group-hover:text-white">Business & Events</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Sophisticated meeting spaces equipped with cutting-edge technology support productive business gatherings. Our versatile venues accommodate everything from intimate meetings to grand conferences, complemented by dedicated event planners ensuring flawless execution.</p>
                            </div>
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto   border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400 duration-500">
                                <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl  font-bold group-hover:text-white">Location & Accessibility</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Strategically positioned for convenience, our hotel offers easy access to major attractions and business districts. Comprehensive transportation options include secure parking, airport shuttles, and wheelchair accessibility throughout all facilities.</p>
                            </div>
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto  border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400 duration-500">
                                <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl  font-bold group-hover:text-white">Technology & Connectivity</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Stay seamlessly connected with complimentary high-speed Wi-Fi throughout. Smart room controls, multiple charging stations, and integrated entertainment systems create a tech-forward environment that supports both business and leisure needs.</p>
                            </div>
                            <div className="w-[95%] scroll-items max-w-[400px] mx-auto border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400  duration-500">
                                <img src={icons[2]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl font-bold group-hover:text-white">Safety & Security</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Your wellbeing is paramount with comprehensive security measures including 24/7 staff, advanced key card systems, discreet CCTV monitoring, and state-of-the-art fire safety. Medical assistance is readily available when needed.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="relative py-5 max-w-[1320px] mx-auto">
                    <div>
                        <h2 className="text-center text-blue-500 font-semibold py-5 text-[1.5em] md:text-[2.5em] scroll-reveal">Exclusive Hotel Offers</h2>
                    </div>
                    {/*  */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center md:grid-cols-2 place-content-center gap-5 gap-y-[3em] ">
                        <div className="w-[95%] mx-auto p-4 shadow-xl shadow-blue-300 hover:shadow-2xl hover:shadow-blue-500 scroll-up">
                            <h2 class="text-center text-[1.5em] text-blue-500 py-3">Weekend Escape Package</h2>
                            <p class="text-center">Treat yourself to a perfect weekend getaway with our all-inclusive Weekend Escape Package. Enjoy luxurious accommodations for two nights, complimentary breakfast in bed each morning, and a special welcome amenity upon arrival. Unwind with included access to our premium spa facilities and take advantage of late checkout on Sunday. Book now and receive a $50 dining credit to use at any of our award-winning restaurants.</p>
                        </div>
                        <div className="w-[95%]  mx-auto p-4 shadow-xl shadow-blue-300 hover:shadow-2xl hover:shadow-blue-500 scroll-up">
                            <h2 class="text-center text-[1.5em] text-blue-500 py-3">Family Adventure Bundle</h2>
                            <p class="text-center">Create unforgettable memories with our Family Adventure Bundle. Stay in our spacious family suite with separate sleeping areas for parents and children. The package includes daily breakfast for the whole family, complimentary kids' club access, and a special children's welcome gift. Parents will appreciate the included evening babysitting service, perfect for enjoying a romantic dinner. Book for 3+ nights and receive tickets to local family attractions.</p>
                        </div>
                        <div className="w-[95%]  mx-auto p-4 shadow-xl shadow-blue-300 hover:shadow-2xl hover:shadow-blue-500 scroll-up">
                            <h2 class="text-center text-[1.5em] text-blue-500 py-3">Business Success Package</h2>
                            <p class="text-center">Designed for the discerning business traveler, our Business Success Package combines comfort with productivity. Enjoy early check-in and late checkout, premium high-speed Wi-Fi, daily breakfast, and complimentary pressing of two garments per stay. Your package includes access to our executive lounge with all-day refreshments and dedicated workspaces. Plus, receive a $30 credit per day for our 24-hour room service—perfect for those late-night work sessions.</p>
                        </div>
                        <div className="w-[95%]  mx-auto p-4 shadow-xl shadow-blue-300 hover:shadow-2xl hover:shadow-blue-500 scroll-up">
                            <h2 class="text-center text-[1.5em] text-blue-500 py-3">Romantic Getaway</h2>
                            <p class="text-center">Spark romance with our specially curated Romantic Getaway package. Your experience begins with champagne and chocolate-covered strawberries in your upgraded deluxe room or suite. Enjoy a candlelit dinner for two at our signature restaurant and wake up to breakfast in bed the following morning. The package includes a couple's massage at our spa and rose petal turndown service. Create the perfect backdrop for your special moments together.</p>
                        </div>
                        <div className="w-[95%]  mx-auto  p-4 shadow-xl shadow-blue-300 hover:shadow-2xl hover:shadow-blue-500 scroll-up">
                            <h2 class="text-center text-[1.5em] text-blue-500 py-3">Seasonal Special: Winter Warmth Retreat</h2>
                            <p class="text-center">Escape the winter chill with our limited-time Winter Warmth Retreat. Cozy up in our luxury accommodations with a fireplace, complimentary hot chocolate, and warm cookies delivered daily. Your package includes breakfast each morning and a special winter-themed dinner experience. Take advantage of our indoor heated pool and hot tub facilities, and receive a 20% discount on all spa treatments. Book before December 15th for an additional night free.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-[100%] max-w-[1320px] scroll-up  min-h-[40vh] bg-blue-500 mx-auto my-20 flex gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="p-5">
                             <h2 className="text-white font-bold text-[1.75em] md:text-[3em]">Discover A Brand Luxurious Hotel</h2>
                             <p className="text-white text-[1.25em] md:text-[1.75] py-5">Our opulent rooms and suites redefine luxury with handcrafted furniture, Egyptian cotton linens, and panoramic views. Indulge in marble bathrooms with rainfall showers, smart climate control, and curated mini-bars featuring artisanal selections for an unparalleled retreat.</p>
                             <div className="py-4">
                                <a href="/bookroom" className=" hover:bg-blue-400 m-4 my-10 p-5 hover:text-white duration-300 bg-white text-blue-500 font-bold ">Book Room</a>
                             </div>
                        </div>
                        <div className="" style={{backgroundImage:`url(${luxuryRoomImg})`,backgroundSize:"cover"}}>
                            <div className="bg-[#2222226b] w-full h-full flex justify-center items-center">
                                <p  className="text-lg text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta qui temporibus ipsum sed hic consequatur id fugit pariatur? Nesciunt velit, minus laboriosam veniam totam voluptates earum molestias, iusto placeat tenetur maxime aliquam nostrum reprehenderit!</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>

            <div className="relative w-[100%] max-w-[1320px] mx-auto grid justify-center grid-cols-1 md:grid-cols-2 p-5 py-10 scroll-reveal" >
                <div className="p-5" >
                    <div className="">
                        <h2 className="text-[3.5em] font-extrabold text-black">Destination  Guide</h2>
                        <p className="text-[2.5em] ">Holiday in Sri Lanka</p>
                        <p className="text-lg py-10">Sri Lanka is a meeting place of friendly faces who share their homes and trade; a space for spiritual healing; a land for learning from the old and the new; a hub of commercial activity; a spot for tranquility. Sri Lanka casts a spell unlike anywhere else. It draws people in, not with artificial attractions and grand gestures, but by spellbinding soul and sincerity.</p>
                        <a href="/findout" className="border border-blue-500 p-5 text-lg hover:bg-blue-500 hover:text-white">Find Out More </a>
                    </div>
                </div>
                <div className="p-5 grid">
                    {
                        destinations.map((item, index) => {
                            return (
                                <>
                                    <div className="" >
                                        <img className="h-uato w-full object-cover" src={item} alt=""/>
                                    </div>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className="relative w-[100%] max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 p-5 py-10 scroll-reveal">
                <div className="p-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015322.2095558839!2d80.18777706428749!3d6.250238567687185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bad9013377%3A0x44238fe850f6f47e!2sSouthern%20Province!5e0!3m2!1sen!2slk!4v1736763874158!5m2!1sen!2slk" loading="lazy" style={{width:'95%',margin:'auto',height:'350px'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="p-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                    <div className="">
                        <h2 className="text-[3.5em] font-extrabold text-black">Things to do</h2>
                        <p className="text-[2.5em] ">in Sri Lanka</p>
                        <p className="text-lg py-10">We want to share Sri Lanka's extraordinarily diverse and authentic story with the rest of the world. We want to help you discover the many thousands of different ways in which you can fall in love with our home & plan the perfect trip; local experts, local perspective and all the best tips on where to eat, what to do, who to meet, how to get there and where to make your next favourite memory.</p>
                        <a href="/findout" className="border border-blue-500 p-5 text-lg hover:bg-blue-500 hover:text-white">Find Out More </a>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-[2.5em] text-black text-center md:text-left font-semibold px-5">Explorer More Island Stories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2 py-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                    <div className="grid gap-2">
                        <div style={subContentParent} className="group">
                            <div>
                                <img src={recaps[0]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                            </div>
                            <div style={myhoverContent} className="hidden  group-hover:flex">
                                {/* input content here */}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 group" style={subContentParent} >
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[1]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    {/* input content here */}
                                </div>
                            </div>
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[2]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    {/* input content here */}
                                </div>
                            </div>
                        </div>
                        <div style={subContentParent} className="group">
                            <div>
                                <img src={recaps[3]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                            </div>
                            <div style={myhoverContent} className="hidden  group-hover:flex">
                                {/* input content here */}
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 group" >
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[4]} class="w-[100%] " style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    {/* input content here */}
                                </div>
                            </div>
                            <div style={subContentParent} >
                                <div className="group">
                                    <div>
                                        <img src={recaps[7]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                    </div>
                                    <div style={myhoverContent} className="hidden  group-hover:flex">
                                        {/* input content here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={subContentParent} className="group">
                            <div>
                                <img src={recaps[6]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                            </div>
                            <div style={myhoverContent} className="hidden  group-hover:flex">
                                {/* input content here */}
                            </div>
                        </div>
                        <div className="grid">
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[8]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    {/* input content here */}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[100%] max-w-[1320px] mx-auto p-5 bg-mainColor my-1">
                <div>
                    <h3 className="text-3xl px-5 font-semibold text-blue-500">Subscribe Our Newslatter</h3>
                </div>
                <form action="">
                    <div className=" grid grid-cols-1 content-center items-center justify-center p-5 gap-3 md:grid-cols-2">
                        <div className="w-full">
                            <input type="text" id="newslatterEmail" placeholder="example123@gmail.com" className="w-full border border-blue-400 text-blue-500 focus:outline-none hover:outline-none p-4" name="newslatterEmail" required/>
                        </div>
                        <div className="">
                            <input type="submit" className=" text-lg bg-blue-600 text-white p-4 px-7 hover:bg-blue-800 cursor-pointer" value="Subscribe"/>
                        </div>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default Home