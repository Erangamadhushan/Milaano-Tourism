import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import {Home, AboutUs, Contact, Service} from './Components/Pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
    </Route>

  )
)


createRoot(document.querySelector('.root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
