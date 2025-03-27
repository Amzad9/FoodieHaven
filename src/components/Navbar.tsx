
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-display font-semibold tracking-tight text-estate-900">
            Elegance<span className="text-estate-600">Estate</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="nav-link">Properties</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="px-6 py-2 bg-estate-900 text-white rounded-md hover:bg-estate-800 transition-colors">
              Book a Tour
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <a 
            href="#properties" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Properties
          </a>
          <a 
            href="#about" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button className="px-8 py-3 bg-estate-900 text-white rounded-md hover:bg-estate-800 transition-colors">
            Book a Tour
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
