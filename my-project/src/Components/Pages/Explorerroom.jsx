import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { roomContent } from '../../assets/Explorerroom/content.js';
import useScrollReveal from '../../hooks/scrollReveal.js';

function Exploreroom() {
    useScrollReveal();
    const [room, setRoom] = useState(null);

    return (
        <><div className="w-[95%] max-w-[1000px] mx-auto p-5 my-10 ">
            <div className='scroll-down'>
                <input type="text" placeholder="Search" className="border border-blue-500 p-2 text-blue-500 rounded-lg w-[85%]" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-4 px-4 rounded-lg ml-2">Search</button>
            </div>
            
        </div>
        <div className=" flex flex-wrap jutify-center items-center w-[95%] max-w-[1300px] gap-4 mx-auto p-5 my-10 ">
            {
                roomContent.map((roomDetails) => {
                    return (
                        <div className="w-[95%] min-h-[400px] max-w-[380px] scroll-up">
                            <div className="p-5 gap-2 w-full">
                                {/* Sample image here .. */}
                                <img src={roomDetails.room_image} className="w-[100%] h-[200px] object-cover " alt={roomDetails.room_type} />
                            </div>
                            <div className="p-5 gap-2 w-[95%] max-w-[450px]">
                                <h2 className=" py-2 font-semibold text-blue-500">{roomDetails.room_type}</h2>
                                <p className=" py-2">Price: Rs.{roomDetails.room_price}.00</p>
                                <p className=" py-2">Capacity: {roomDetails.room_capacity}</p>
                                <p className=" py-2">Description: {roomDetails.room_description}</p>
                                
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Book Now</button>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Exploreroom;