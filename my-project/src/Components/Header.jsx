import {React, useState} from "react"
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom"
function Header() {
    const [popover, setPopover] = useState(false);
    const Upper = {
        textTransform:'uppercase',
        
    }
    const popoverMobileNavbar = () => {
        setPopover((prev ) => !prev);
    }
    return (
        <>
            <div className="grid">
                <nav className="bg-blue-600 grid grid-cols-2 justify-between items-baseline space-x-5 p-5 sticky left-0 top-0">
                    <div className="">
                        <h1 className="text-white font-bold text-[1em] md:text-[1.25em] "><Link to="/" ><span className="text-blue-950">M</span>ILAANO <span className="text-blue-950">T</span>OURISM </Link></h1>
                    </div>
                    <div className="hidden md:block ">
                        <ul className="flex justify-start space-x-5">
                            <li>
                                <Link to="/" className="text-white text-bold text-xl hover:text-blue-950">HOME</Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="text-white text-bold text-xl hover:text-blue-950">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white text-bold text-xl hover:text-blue-950">CONTACT</Link>
                            </li>
                            <li>
                                <Link to="/service" className="text-white text-bold text-xl hover:text-blue-950">SERVICES</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block md:hidden items-baseline">
                        <div className="flex justify-end">
                            <button className="bg-mainColor p-2 rounded-full text-white font-bold text-lg hover:text-orange-400" onClick={popoverMobileNavbar}>&#9776;</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className=" p-2 bg-gray-950 hidden" >
                <h2 className="text-white">Eranga Madhushan</h2>
            </div>
        </>
    )
}

export {Header}