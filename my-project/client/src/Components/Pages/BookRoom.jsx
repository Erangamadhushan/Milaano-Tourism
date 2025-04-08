import React, {useState}  from "react";
import useScrollReveal from '../../hooks/scrollReveal.js';

function BookRoom() {
    useScrollReveal();
    const [room ,setRoom] = useState("");
    const roomTypes = [
        "Single Room",
        "Double Room",
        "Deluxe Room",
        "Suite Room",
        "Family Room",
        "Presidential Room",
        "Luxury Room",
        "Executive Room",
        "Standard Room",
        "Superior Room",
        "Economy Room",
        "Budget Room",
        "Penthouse Room",
        "Studio Room",
        "Loft Room",
        "Bungalow Room",
    ]
    return (
        <>
            <div className="">
                <div className="w-[95%] mx-auto max-w-[1200px] my-10 scroll-up">
                    <h3 className="py-3 text-[1.25em] md:text-[2em] text-center text-blue-500">Sri Lanka's luxury hotels blend traditional hospitality with modern extravagance to create memorable experiences for discerning guests.</h3>
                    <div className="text-center text-lg text-gray-500 py-3 font-bold">
                        <div className="py-10 ">
                            <a href="/exploreroom" className="text-white bg-blue-500 p-4 px-10 cursor-pointer my-10 hover:bg-blue-700">Explore</a>
                        </div>
                        <p> the best hotels in Sri Lanka, where luxury meets comfort and hospitality. From stunning beachfront resorts to serene mountain retreats, we have the perfect accommodation for your dream getaway.
                        <br /> Whether you're seeking a romantic escape, a family adventure, or a solo retreat, our curated selection of hotels offers something for everyone. Indulge in world-class amenities, exquisite dining options, and breathtaking views that will leave you in awe. Experience the warmth of Sri Lankan hospitality and create unforgettable memories during your stay.</p>
                    </div>
                </div>
                <div className="w-[95%]  mx-auto max-w-[1000px] grid my-5">
                    <div>
                        <h3 className="text-3xl text-center text-blue-500 font-bold">Hotel Booking</h3>
                        <p className="text-center text-lg text-gray-500 py-3 font-bold">Experience something new every moment</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                        <div className="grid grid-cols-1 py-4">
                            <div className="p-2">
                                <p>Name :</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <input type="text" placeholder="First Name" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Last Name" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 py-4">
                            <div className="p-2">
                                <p>E-mail :</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <input type="text" placeholder="example@gmail.com" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="p-2">
                                <p>Room Type :</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <select onSelect={(e) => setRoom(e.target.value)} className="border border-gray-200 p-2 rounded-lg w-[85%]">
                                        {
                                            roomTypes.map((roomType) => {
                                                return (
                                                    <option value={roomType} key={roomType}>{roomType}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="p-2">
                                <p>E-mail :</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <input type="text" placeholder="example@gmail.com" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default BookRoom;