export default function BookingRoomForm({formRef, formSubmission}) {
    // This component is used to render the booking form for a room.
    return (
        <form ref={formRef} onSubmit={formSubmission} className="grid grid-cols-1">
            <div className="grid grid-cols-1 py-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                    <div className="p-2">
                        <p>First Name :</p>
                    </div>
                        <input type="text" placeholder="First Name" name='firstname' className="border border-zinc-600 p-2 rounded-lg w-[95%] mx-auto"  required/>
                    </div>
                    <div>
                    <div className="p-2">
                        <p>Last Name :</p>
                    </div>
                        <input type="text" placeholder="Last Name" name="lastname" className="border border-zinc-600 p-2 rounded-lg w-[95%] mx-auto" required/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 py-4">
                <div className="p-2">
                    <p>E-mail :</p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <input type="email" placeholder="example@gmail.com" name='email' className="border border-zinc-600 p-2 mx-auto rounded-lg w-[95%]" required/>
                    </div>
                    
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="p-2">
                    <p>Address :</p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <input type="text" name='address' placeholder="Araliya Mawatha, Maddawaththa, Matara" className="border border-zinc-600 p-2 rounded-lg w-[95%] mx-auto" required/>
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 gap-2 py-4">
                    <div>
                        <label htmlFor='phononumber'>Phone Number :</label>
                        <input type="tel" name='phonenumber' placeholder="011-1212321" className="border border-zinc-600 mx-auto p-2 rounded-lg w-[95%]" required/>
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 gap-2 py-4">
                    <div>
                        <label htmlFor='special_request'>Special Request :</label><br/>
                        <textarea rows="8" name='request' placeholder="Any special request you have" className="border border-zinc-600 w-[95%] mx-auto resize-none p-2 rounded-lg"></textarea>
                    </div>
                    <div className='w-full  text-white'>
                        <button type="submit" className="bg-blue-600 w-[95%] mx-auto text-center text-white p-2 py-3 text-xl rounded-lg">Complete Booking</button>
                    </div>
                </div>
            </div>
        </form>
    )
}