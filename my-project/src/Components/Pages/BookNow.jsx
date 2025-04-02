import react from 'react';
import { useState } from 'react';

const BookNow = ({roomDetails}) => {

    const handBookRoom = () => {
        alert("Room Booked Successfully!");
        // Here you can add the logic to book the room, like sending a request to your server or API.
        // For now, we will just show an alert.
    }
    return (
        <>
            <div className="w-[95%] min-h-[400px] max-w-[380px] scroll-up">
            <div className="p-5 gap-2 w-full">
                {/* Sample image here .. */}
                <img src={roomDetails.room_image} className="w-[100%] h-[200px] object-cover " alt={roomDetails.room_type} />
            </div>
            <div className="p-5 gap-2 w-[95%] max-w-[450px]">
                <h2 className="text-[1.25em] py-2 font-semibold text-blue-500">{roomDetails.room_type}</h2>
                <p className=" py-2">Price: Rs.{roomDetails.room_price}.00</p>
                <p className=" py-2">Capacity: {roomDetails.room_capacity}</p>
                <p className=" py-2">Description: {roomDetails.room_description}</p>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handBookRoom}>Book Now</button>
            </div>
            
        </div>
        </>
    )
}

export default BookNow;