import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { roomContent } from '../../assets/Explorerroom/content.js';
import useScrollReveal from '../../hooks/scrollReveal.js';
import BookNow from './BookNow.jsx';
import RoomCategory from './RoomCategory.jsx';

function Exploreroom() {
    useScrollReveal();
    const roomsTypes = [
        "Standard/Economy Room",
        "Deluxe Room",
        "Luxury Room",
        "Suite Room",
        "Executive Room",
    ]
    const [room, setRoom] = useState(null);


    return (
        <><div className="w-[95%] max-w-[1000px] mx-auto p-5 my-10 ">
            <div className=''>
                <p className='text-center text-[1.25em] md:text-[1.5em] text-blue-500 font-bold'>---- Our Rooms ----</p>
                <h2 className="text-[2em] text-center"> Explore Our <span className='text-blue-500'>ROOMS</span></h2>
            </div>
            <div className='scroll-down'>
                <select className='border border-blue-500 p-2 text-blue-500 rounded-lg w-[85%] max-w-[750px] m-4'>
                    {
                        roomsTypes.map((room, index) => {
                            return (
                                <option key={index} value={room} className='text-blue-500'>{room}</option>
                            )
                        })
                    }
                </select>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-4 px-4 rounded-lg ml-2">Search</button>
            </div>
            
        </div>
        <div className=" flex flex-wrap jutify-center items-center w-[95%] max-w-[1300px] gap-4 mx-auto p-5 my-10 ">
            {
                roomContent.map((roomDetails) => {
                    return (
                        <RoomCategory key={roomDetails.room_type} roomDetails={roomDetails} />
                    )
                })
            }
        </div>
        </>
    )
}

export default Exploreroom;