import { Outlet } from "react-router-dom";
import { Header } from './Components/Header';
import { useEffect } from "react";
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

// import withReactContent from '@sweetalert2/react-content';

export default function Layout() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          offset: 200,    // Offset for trigger point
          easing: 'ease-in-out', // Animation easing
        });
      }, []);
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}