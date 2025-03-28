import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { roomContent } from '../../assets/Explorerroom/content.js';
import useScrollReveal from '../../hooks/scrollReveal.js';

function Exploreroom() {
    useScrollReveal();
    const [room, setRoom] = useState(null);

    return (
        <div className="w-[95%] max-w-[1200px] min- mx-auto p-5 my-10 ">
            <div>
                <input type="text" placeholder="Search" className="border border-blue-500 p-2 rounded-lg w-[85%]" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2">Search</button>
            </div>
            <div className="">
                <div className="">
                    {
                        roomContent.map((roomDetails) => {
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] gap-4 my-5 p-5 shadow-md">
                                    <div className="p-5 gap-2">
                                        <h2 className="text-[1.5em] py-2 font-semibold text-blue-500">{roomDetails.room_type}</h2>
                                        <p className="text-[1.25em] py-2">Price: Rs.{roomDetails.room_price}.00</p>
                                        <p className="text-[1.25em] py-2">Capacity: {roomDetails.room_capacity}</p>
                                        <p className="text-[1.25em] py-2">Description: {roomDetails.room_description}</p>
                                        
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
                                    </div>
                                    <div className="grid grid-cols-1 p-5">
                                        {/* Sample image here .. */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Exploreroom;