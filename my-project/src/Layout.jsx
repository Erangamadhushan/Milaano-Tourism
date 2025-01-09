import { Outlet } from "react-router-dom";
import {Header} from './Components/Header';
//import Footer from './Components/Footer.jsx';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet/>
            
        </>
    )
}