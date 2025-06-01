import { Outlet } from "react-router-dom";
import { Header } from './Components/layout/Header';
import Footer from './Components/layout/Footer';


export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}