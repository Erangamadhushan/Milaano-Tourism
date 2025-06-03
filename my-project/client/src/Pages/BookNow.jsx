import react from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Swal from 'sweetalert2';

//-----------------------------------------------------------------------------------------------
// Importing the required  components
import  BookingRoomForm  from '../Components/forms/BookingRoomForm';

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
                            <p className='text-[1.5em] font-bold text-zinc-600'>{roomDetails.room_type} <br/><span className='text-[1.6em] font-bold text-zinc-500'>{`  Rs. `}{roomDetails.room_price} {`.00 /Per Day`}</span></p>
                            <p className='text-gray-500'>{roomDetails.room_description}</p>
                            <p className='text-zinc-600 py-4'>Room Features</p>
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
                            <h3 className="text-3xl text-center text-zinc-600 font-bold">Check Out</h3>
                        </div>
                        
                        <BookingRoomForm formRef={formRef} formSubmission={formSubmission} />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookNow;