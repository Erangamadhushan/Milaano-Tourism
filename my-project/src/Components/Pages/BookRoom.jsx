import React  from "react";
import useScrollReveal from '../../hooks/scrollReveal.js';

function BookRoom() {
    useScrollReveal();
    const countries = [
        'United States', 
        'Canada', 
        'United Kingdom', 
        'Australia', 
        'Germany', 
        'France', 
        'Japan', 
        'China', 
        'India', 
        'Brazil'
      ];

      const handleCountryChange = (selectedCountry) => {
        setFormData(prevState => ({
          ...prevState,
          country: selectedCountry
        }));
      };
    return (
        <>
            <div className="">
                <div className="w-[95%] mx-auto max-w-[1200px] my-10 scroll-up">
                    <h3 className="py-3 text-[1.25em] md:text-[2em] text-center text-blue-500">Sri Lanka's luxury hotels blend traditional hospitality with modern extravagance to create memorable experiences for discerning guests.</h3>
                </div>
                <div className="w-[95%]  mx-auto max-w-[1000px] grid my-5">
                    <div>
                        <h3 className="text-3xl text-center text-blue-500 font-bold">Hotel Booking</h3>
                        <p className="text-center text-lg text-gray-500 py-3 font-bold">Experience something new every moment</p>
                    </div>
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
                                    <input type="text" placeholder="example@gmail.com" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="p-2">
                                <p>Room Type :</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                <Select 
                                    onValueChange={handleCountryChange}
                                    value={country}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                    {countries.map((country) => (
                                        <SelectItem key={country} value={country}>
                                        {country}
                                        </SelectItem>
                                    ))}
                                    </SelectContent>
                                </Select>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="p-2">
                                <p>E-mail :</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <input type="text" placeholder="example@gmail.com" className="border border-gray-200 p-2 rounded-lg w-[85%]" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default BookRoom;