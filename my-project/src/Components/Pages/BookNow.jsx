import react from 'react';
import { useState } from 'react';

const BookNow = ({roomDetails}) => {
    return (
        <>
            <div className="w-[95%] max-w-[1000px] mx-auto p-5 my-10 ">
                <div className=''>
                    <p className='text-center text-[1.25em] md:text-[1.5em] text-blue-500 font-bold'>---- Book Now ----</p>
                    <h2 className="text-[2em] text-center"> Book Your <span className='text-blue-500'>ROOM</span></h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full p-5 my-10 bg-white rounded-lg shadow-lg">
                    <h2 className="text-[1.25em] py-2 font-semibold text-blue-500">{roomDetails.room_type}</h2>
                    <p className=" py-2">Price: Rs.{roomDetails.room_price}.00</p>
                    <p className=" py-2">Capacity: {roomDetails.room_capacity}</p>
                    <p className=" py-2">Description: {roomDetails.room_description}</p>
                </div>
            </div>
        </>
    )
}

export default BookNow;