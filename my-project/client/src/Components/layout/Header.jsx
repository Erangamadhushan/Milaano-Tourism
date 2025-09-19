
import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className={`bg-white p-4 ${window.addEventListener('scroll', () => {
      const header = document.querySelector('nav');
      if (window.scrollY > 50) {
        header.classList.add('py-5');
        header.classList.remove('py-10');
      } else {
        header.classList.add('py-10');
        header.classList.remove('py-5');
      }
    })} sticky top-0 z-50 shadow-md duration-300`}>
      {/* Logo and Navigation */}
      <div className="container mx-auto flex justify-center gap-10 items-center">
        {/* Logo */}
        <div className="text-blue-600 font-bold text-xl"><Link to="/" ><span className="text-blue-950">M</span>ILAANO <span className="text-blue-950">T</span>OURISM </Link></div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
            <a href="/" className="text-blue-600 text-bold text-md hover:text-blue-950">HOME</a>
            <a href="/aboutus" className="text-blue-600 text-bold text-md hover:text-blue-950">ABOUT</a>
            <a href="/contact" className="text-blue-600 text-bold text-md hover:text-blue-950">CONTACT</a>
            <a href="/service" className="text-blue-600 text-bold text-md hover:text-blue-950">SERVICES</a>
        </div>
        <div className="flex w-[300px] md:w-[450px] lg:w-[600px]">
          {/* search bar */}
          <input type="text" placeholder="Search..." className="rounded-md p-2 w-full placeholder:text-blue-600 border border-blue-600" />

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
        <div className="md:hidden mt-2 px-2 pt-2 pb-4 space-y-1 bg-gray-500">
            <div className='grid space-y-3'>
                <Link to="/" className="text-white text-bold text-lg hover:text-blue-950">HOME</Link>
                <Link to="/aboutus" className="text-white text-bold text-lg hover:text-blue-950">ABOUT</Link>
                <Link to="/contact" className="text-white text-bold text-lg hover:text-blue-950">CONTACT</Link>
                <Link to="/service" className="text-white text-bold text-lg hover:text-blue-950">SERVICES</Link>
            </div>
          
        </div>
      )}
    </nav>
  );
};

export {Header};