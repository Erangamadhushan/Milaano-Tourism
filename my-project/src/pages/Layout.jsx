import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <nav >
            <ul className="flex justify-center space-x-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact</Link>
                </li>
            </ul>
        </nav>
        
        <Outlet />
        </>
    )
}