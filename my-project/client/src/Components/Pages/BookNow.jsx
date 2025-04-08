import react from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const BookNow = () => {
    const formRef = useRef(null);
    const roomDetails = JSON.parse(localStorage.getItem("roomDetails"));

    const formSubmission = (event) => {
        event.preventDefault();

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "bg-blue-500 rounded-lg p-3 text-white",
              cancelButton: "bg-red-500 rounded-lg p-3 mx-2 text-white"
            },
            buttonsStyling: false
          });

          swalWithBootstrapButtons.fire({
            title: "Confirm Booking",
            text: "Your booking is confirmed.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Keep it!",
            cancelButtonText: "No, cancell it!",
            reverseButtons: true

          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Confirmed!",
                text: "Your Booking is Completed !!.",
                icon: "success"
              });

              const form = formRef.current;
        
                const formData = {
                    username: form.firstname.value +" "+ form.lastname.value,
                    email: form.email.value,
                    address: form.address.value,
                    phone_number: form.phonenumber.value,
                    request: form.request.value
                };
                console.log('Form data:', formData);
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your Booking was cancelled !!",
                icon: "error"
              });
            }
          });
    }
    return (
        <>
            <div className='w-[95%] grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto my-5 p-5'>
                <div className='grid'>
                    <div>
                        <img src={roomDetails.room_image} alt="" className='w-full h-[300px] object-cover' />
                    </div>
                    <div className='grid grid-cols-1  gap-5 mt-5'>
                        <div className='bg-white p-2 rounded-lg'>
                            <p className='text-[1.5em] font-bold text-blue-500'>{roomDetails.room_type} <br/><span className='text-[1.6em] font-bold text-blue-500'>{`  Rs. `}{roomDetails.room_price} {`.00 /Per Day`}</span></p>
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
                        <div className='bg-white p-2 rounded-lg flex flex-wrap  items-center gap-3'>
                            {
                                roomDetails.room_amenities.map((amenity, index) => {
                                    return (
                                        <div className='p-2 bg-blue-100 rounded-lg'>
                                            <p className='text-gray-500'>{amenity}</p>
                                        </div>
                                    )
                                }
                                    
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    
                <div className="grid grid-cols-1 p-5 py-3">
                    <div>
                        <h3 className="text-3xl text-center text-blue-500 font-bold">Check Out</h3>
                    </div>
                    <form ref={formRef} onSubmit={formSubmission} className="grid grid-cols-1">
                        <div className="grid grid-cols-1 py-4">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div>
                                <div className="p-2">
                                    <p>First Name :</p>
                                </div>
                                    <input type="text" placeholder="First Name" name='firstname' className="border border-blue-400 p-2 rounded-lg w-[95%] mx-auto"  required/>
                                </div>
                                <div>
                                <div className="p-2">
                                    <p>Last Name :</p>
                                </div>
                                    <input type="text" placeholder="Last Name" name="lastname" className="border border-blue-400 p-2 rounded-lg w-[95%] mx-auto" required/>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 py-4">
                            <div className="p-2">
                                <p>E-mail :</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <input type="email" placeholder="example@gmail.com" name='email' className="border border-blue-400 p-2 mx-auto rounded-lg w-[95%]" required/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="p-2">
                                <p>Address :</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <input type="text" name='address' placeholder="Araliya Mawatha, Maddawaththa, Matara" className="border border-blue-400 p-2 rounded-lg w-[95%] mx-auto" required/>
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-1 gap-2 py-4">
                                <div>
                                    <label htmlFor='phononumber'>Phone Number :</label>
                                    <input type="tel" name='phonenumber' placeholder="011-1212321" className="border border-blue-400 mx-auto p-2 rounded-lg w-[95%]" required/>
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-1 gap-2 py-4">
                                <div>
                                    <label htmlFor='special_request'>Special Request :</label><br/>
                                    <textarea rows="8" name='request' placeholder="Any special request you have" className="border border-blue-400 w-[95%] mx-auto resize-none p-2 rounded-lg"></textarea>
                                </div>
                                <div className='w-full  text-white'>
                                    <button type="submit" className="bg-blue-700 w-[95%] mx-auto text-center text-white p-2 py-3 text-xl rounded-lg">Complete Booking</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default BookNow;