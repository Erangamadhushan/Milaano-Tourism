import react from 'react';
import { useState } from 'react';

const BookNow = () => {
    const roomDetails = JSON.parse(localStorage.getItem("roomDetails"));
    return (
        <>
            <div className='w-[95%] grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto my-5 p-5'>
                <div className='grid'>
                    <div>
                        <img src={roomDetails.room_image} alt="" className='w-full h-[300px] object-cover' />
                    </div>
                    <div className='grid grid-cols-1  gap-5 mt-5'>
                        <div className='bg-white p-2 rounded-lg'>
                            <p className='text-[1.5em] font-bold text-blue-500'>{roomDetails.room_type} <br/><span className='text-[1.6em] font-bold text-blue-500'>{`  Rs. `}{roomDetails.room_price} {`.00`}</span></p>
                            <p className='text-gray-500'>{roomDetails.room_description}</p>
                            <p className='text-blue-500 py-4'>Room Features</p>
                            <ul>
                                {
                                    roomDetails.room_features.map((feature, index) => (
                                        <li key={index} className='text-gray-500'>{` => `}{feature}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    
                <div className="grid grid-cols-1 p-5 py-3">
                    <div>
                        <h3 className="text-3xl text-center text-blue-500 font-bold">Check Out</h3>
                    </div>
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
                            <p>Address :</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <div>
                                <input type="text" placeholder="Araliya Mawatha, Maddawaththa, Matara" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default BookNow;