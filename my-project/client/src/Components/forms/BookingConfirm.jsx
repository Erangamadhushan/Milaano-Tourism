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

export function GeneralInputs() {
    
    return (
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
    )
}

export function TimeSelection() {
    return (
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
    )
}

/*

name: {
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    required: true,
    pattern: "^[a-zA-Z ]{2,30}$",
    errorMessage: "Name should be 2-30 characters and shouldn't include any special character or number.",
},
email: {
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    required: true,
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    errorMessage: "It should be a valid email address.",
},
phoneNumber: {
    type: "tel",
    placeholder: "Enter your phone number",
    label: "Phone Number",
    required: true,
    pattern: "^\\+?[0-9]{10,15}$",
    errorMessage: "Phone number should be 10-15 digits long.",
}

*/