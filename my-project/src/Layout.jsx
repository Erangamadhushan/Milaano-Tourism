import { Outlet } from "react-router-dom";
import { Header } from './Components/Header';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Layout() {
    
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}