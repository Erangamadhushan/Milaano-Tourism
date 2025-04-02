import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import {Home, AboutUs, Contact, Service, Findout, BookRoom, Explorermore, Exploreroom, BookNow, ViewDetails, Notfound} from './Components/Pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path="aboutus" element={<AboutUs/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="findout" element={<Findout/>}/>
      <Route path="bookroom" element={<BookRoom/>}/>
      <Route path="explorermore" element={<Explorermore/>}/>
      <Route path="exploreroom" element={<Exploreroom/>}/>
      <Route path="booknow" element={<BookNow/>}/>
      <Route path="viewdetails" element={<ViewDetails/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Route>

  )
)


createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)