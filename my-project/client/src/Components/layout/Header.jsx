
import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-xl">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-black font-bold text-xl hover:text-blue-950 transition-colors duration-300">
              <span className="text-blue-950">M</span>ILAANO <span className="text-blue-950">T</span>OURISM
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-black font-semibold text-lg hover:text-blue-950 transition-colors duration-300 py-2">
              HOME
            </Link>
            <Link to="/aboutus" className="text-black font-semibold text-lg hover:text-blue-950 transition-colors duration-300 py-2">
              ABOUT
            </Link>
            <Link to="/contact" className="text-black font-semibold text-lg hover:text-blue-950 transition-colors duration-300 py-2">
              CONTACT
            </Link>
            <Link to="/service" className="text-black font-semibold text-lg hover:text-blue-950 transition-colors duration-300 py-2">
              SERVICES
            </Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-opacity-50 rounded-md p-2 transition-colors duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
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
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 font-semibold text-lg hover:text-blue-950 hover:bg-blue-50 px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/aboutus" 
                className="text-gray-700 font-semibold text-lg hover:text-blue-950 hover:bg-blue-50 px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 font-semibold text-lg hover:text-blue-950 hover:bg-blue-50 px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <Link 
                to="/service" 
                className="text-gray-700 font-semibold text-lg hover:text-blue-950 hover:bg-blue-50 px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export {Header};