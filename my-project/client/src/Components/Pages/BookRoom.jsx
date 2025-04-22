import React, {useState}  from "react";
import useScrollReveal from '../../hooks/scrollReveal.js';

function BookRoom() {
    useScrollReveal();
    const [room ,setRoom] = useState("");

    const [formData, setFormData] = useState({
        email:'',
        roomType:'',
        noOfGuests:'',
    });

    const [errors, setErrors] = useState({});
    const monthsofYear = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const daysOfMonth = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];
    const years = [ 2025, 2026, 2027, 2028, 2029, 2030 ];
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    const roomTypes = [
        "Single Room", "Double Room", "Deluxe Room", "Suite Room", "Family Room", "Presidential Room", "Luxury Room", "Executive Room", "Standard Room", "Superior Room", "Economy Room", "Budget Room", "Penthouse Room", "Studio Room", "Loft Room", "Bungalow Room",
    ];

    const validFormData = () => {
        const newError = {};

        if(!formData.email.trim()) {
            newError.email = "Email is required !!";
        }
        else if(!/\S+\@\S+\.\S+/.test(formData.email)){
            newError.email = "Email is required !!";
        }

        if(!formData.roomType.trim()) {
            newError.roomType = "Room Type is required !!";
        }

        if(!formData.noOfGuests.trim()) {
            newError.noOfGuests = "No of Guests is required !!";
        }
        else if(formData.noOfGuests < 1) {
            newError.noOfGuests = "Number of Guests must be at least 1";
        }

        setErrors(newError);
        if(Object.keys(newError).length === 0) {
            // Proceed with form submission or further processing
            console.log("Form data is valid. Proceeding with booking...");
            // You can send the form data to your server or perform any other actions here
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]:value
        }))
    };
    const handleFormSubmittion = (e) => {
        e.preventDefault(); 
        //alert("Booking Successful!");
        console.log("Booking Successful!");

        if(validFormData()) {
            console.log("Form data is valid. Proceeding with booking...");
            // You can send the form data to your server or perform any other actions here
            window.alert("Booking Successful !");
        }

    }
    return (
        <>
            <div className="">
                <div className="w-[95%] mx-auto max-w-[1200px] my-10 scroll-up">
                    <h3 className="py-3 text-[1.25em] md:text-[2em] text-center text-zinc-700">Sri Lanka's luxury hotels blend traditional hospitality with modern extravagance to create memorable experiences for discerning guests.</h3>
                    <div className="text-center text-lg text-gray-500 py-3 font-bold">
                        <div className="py-10 ">
                            <a href="/exploreroom" className="text-white bg-zinc-500 p-4 px-10 cursor-pointer my-10 hover:bg-zinc-700">Explore</a>
                        </div>
                        <p> the best hotels in Sri Lanka, where luxury meets comfort and hospitality. From stunning beachfront resorts to serene mountain retreats, we have the perfect accommodation for your dream getaway.
                        <br /> Whether you're seeking a romantic escape, a family adventure, or a solo retreat, our curated selection of hotels offers something for everyone. Indulge in world-class amenities, exquisite dining options, and breathtaking views that will leave you in awe. Experience the warmth of Sri Lankan hospitality and create unforgettable memories during your stay.</p>
                    </div>
                </div>
                <div className="w-[95%]  mx-auto max-w-[1000px] grid my-5 scroll-up py-10">
                    <div>
                        <h3 className="text-3xl text-center text-zinc-600 font-bold">Hotel Booking</h3>
                        <p className="text-center text-lg text-gray-500 py-3 font-bold">Experience something new every moment</p>
                    </div>
                    <form onSubmit={handleFormSubmittion} >
                        <div className="grid grid-cols-1 md:grid-cols-2 py-3">
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
                                        <input type="email" onChange={handleInputChange} name="email" value={formData.email} placeholder="example@gmail.com" className="border border-gray-200 p-2 rounded-lg w-[90%]" />
                                    </div>
                                    {
                                        errors.email && (<p className="text-red-500">{errors.email}</p>)
                                    }
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="p-2">
                                    <p>Room Type :</p>
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <select onChange={handleInputChange} name="roomType"  value={formData.roomType} className="border border-gray-200 p-2 rounded-lg w-[90%]" >
                                            {
                                                roomTypes.map((roomType) => {
                                                    return (
                                                        <option value={roomType} key={roomType}>{roomType}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    {
                                        errors.roomType && (<p className="text-red-500">{errors.roomType}</p>)
                                    }
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="p-2">
                                    <p>Num of Guests :</p>
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <input type="number" placeholder="eg:2,3,4" name="noOfGuests" onChange={handleInputChange} value={formData.noOfGuests} className="border border-gray-200 p-2 rounded-lg w-[90%]" />
                                    </div>
                                    {
                                        errors.noOfGuests && (<p className="text-red-500">{errors.noOfGuests}</p>)
                                    }
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="p-2">
                                <div className="p-2">
                                    <p>Arrival Date & Time :</p>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div>
                                        <input type="date" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                    </div>
                                    <div>
                                        <input type="time" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                    </div>
                                    <div>
                                        <select className="border border-gray-200 p-2 rounded-lg w-[85%]">
                                            {
                                                ['AM', 'PM'].map((item) => {
                                                    return (
                                                        <option value={item} key={item}>{item}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="p-2">
                                <p>Departure Date :</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div>
                                    <select className="border border-gray-200 p-2 rounded-lg w-[85%]" placeholder="Please select a month">
                                        {
                                            monthsofYear.map((month) => {
                                                return (
                                                    <option value={month} key={month}>{month}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className="p-2 text-gray-500">Month</p>
                                </div>
                                <div>
                                    <select className="border border-gray-200 p-2 rounded-lg w-[85%]" placeholder="Please select a day">
                                        {
                                            daysOfMonth.map((day) => {
                                                return (
                                                    <option value={day} key={day}>{day}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className="p-2 text-gray-500">Day</p>
                                </div>
                                <div>
                                    <select className="border border-gray-200 p-2 rounded-lg w-[85%]" placeholder="Please select a year">
                                        {
                                            years.map((year) => {
                                                return (
                                                    <option value={year} key={year}>{year}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className="p-2 text-gray-500">Year</p>
                                </div>
                            </div>
                            <div className="py-4">
                                <div>
                                    <p className="py-2">Special Request :</p>
                                </div>
                                <div>
                                    <textarea rows="8" className="border resize-none border-gray-200 p-2 rounded-lg w-[95%] mx-auto"></textarea>
                                </div>
                            </div>
                            <div className="py-4 mx-auto">
                                <button type="submit" className="text-white bg-zinc-500 text-lg p-4 px-10 cursor-pointer my-10 hover:bg-zinc-700">Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookRoom;