import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout'
import {Home, AboutUs, Contact, Service, Findout} from './Components/Pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path="aboutus" element={<AboutUs/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="findout" element={<Findout/>}/>
    </Route>

  )
)


createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)