import React from "react"
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <nav >
                <ul className="bg-black p-5 space-x-5 flex justify-center items-center text-white">
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" >About</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact</Link>
                    </li>
                    <li>
                        <Link to="/service" >Service</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export {Header}