
import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 p-4 sticky top-0 z-50 shadow-lg">
      {/* Logo and Navigation */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl"><Link to="/" ><span className="text-blue-950">M</span>ILAANO <span className="text-blue-950">T</span>OURISM </Link></div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white text-bold text-xl hover:text-blue-950">HOME</Link>
            <Link to="/aboutus" className="text-white text-bold text-xl hover:text-blue-950">ABOUT</Link>
            <Link to="/contact" className="text-white text-bold text-xl hover:text-blue-950">CONTACT</Link>
            <Link to="/service" className="text-white text-bold text-xl hover:text-blue-950">SERVICES</Link>
          {/* <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a> */}
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
            >
              Products
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 3</a>
              </div>
            )}
          </div>
          {/* <a href="#" className="text-white hover:text-gray-300">Contact</a> */}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-2 pt-2 pb-4 space-y-1">
            <div className='grid space-y-3'>
                <Link to="/" className="text-white text-bold text-lg hover:text-blue-950">HOME</Link>
                <Link to="/aboutus" className="text-white text-bold text-lg hover:text-blue-950">ABOUT</Link>
                <Link to="/contact" className="text-white text-bold text-lg hover:text-blue-950">CONTACT</Link>
                <Link to="/service" className="text-white text-bold text-lg hover:text-blue-950">SERVICES</Link>
            </div>
          {/* <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">About</a>
          <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">Services</a> */}
          {/* <div>
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">Products</a>
            <div className="pl-4 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">Product 1</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">Product 2</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">Product 3</a>
            </div>
          </div> */}
          {/* <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">Contact</a> */}
        </div>
      )}
    </nav>
  );
};

export {Header};