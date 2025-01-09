
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Layout';
import { Home, AboutUs, ContactUs, Service } from './Components/Pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="" element={<ContactUs/>}/>
        <Route path="" element={<Service/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}