import React from "react"
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom"
function Header() {
    const Upper = {
        textTransform:'uppercase',
        
    }
    return (
        <>
            <div className="grid">
                <div className="bg-gray-800 p-2">
                    <h1 class="text-center text-white font-light" style={{Upper}}>Milaano Tourism</h1>
                </div>
                <nav className="bg-bg-mainColor grid grid-cols-2 justify-between items-baseline space-x-5 p-5 ">
                    <div className="">
                        <h1 className="text-white font-bold text-[2em] "><span className="text-orange-500">M</span>ilaano <span className="text-orange-500">T</span>ourism </h1>
                    </div>
                    <div className="hidden md:block ">
                        <ul className="flex justify-start space-x-5">
                            <li>
                                <Link to="/" className="text-white text-bold text-xl hover:text-orange-400">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="text-white text-bold text-xl hover:text-orange-400">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white text-bold text-xl hover:text-orange-400">Contact</Link>
                            </li>
                            <li>
                                <Link to="/service" className="text-white text-bold text-xl hover:text-orange-400">Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block md:hidden items-baseline">
                        <div className="flex justify-end">
                            <button className="bg-mainColor p-2 rounded-full text-white font-bold text-lg hover:text-orange-400">&#9776;</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export {Header}