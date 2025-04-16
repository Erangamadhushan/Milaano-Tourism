import react from 'react';
import { useState } from 'react';


const BookNow = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const roomDetails = JSON.parse(localStorage.getItem("roomDetails"));

    return (
        <>
            <div className='w-[95%] grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto  my-5 p-5 py-10'>
                <div className='grid'>
                    <div>
                        <img src={roomDetails.room_image} alt="" className='w-full h-[300px] object-cover' />
                    </div>
                </div>
                <div className='grid grid-cols-1 p-5'>
                    <div className='bg-white p-2 rounded-lg'>
                        <p className='text-[1.5em] font-bold text-blue-500'>{roomDetails.room_type} <br/><span className='text-[1.6em] font-bold text-blue-500'>{`  Rs. `}{roomDetails.room_price} {`.00/Per Day`}</span></p>
                        <p className='text-gray-500'>{roomDetails.room_description}</p>
                        <p className='text-blue-500 py-4'>Room Features</p>
                        <ul>
                            {
                                roomDetails.room_features.map((feature, index) => (
                                    <li key={index} className='text-gray-500'>{` => `}{feature}</li>
                                ))
                            }
                        </ul>
                        <div className='flex flex-wrap gap-3 mt-5'>
                            {
                                roomDetails.room_amenities.map((amenity, index) => (
                                    <div key={index} className='bg-gray-100 p-2 rounded-lg'>{amenity}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/exploreroom" className="rounded-md bg-blue-500 text-white p-3 hover:bg-blue-600">Explore More Rooms</a>
                </div>
            </div>
        </>
    )
}

export default BookNow;
// import { useState } from 'react';