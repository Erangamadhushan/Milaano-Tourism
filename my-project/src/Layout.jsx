import { Outlet } from "react-router-dom";
import { Header } from './Components/Header';
import { useEffect } from "react";
import Footer from './Components/Footer';



// import withReactContent from '@sweetalert2/react-content';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}