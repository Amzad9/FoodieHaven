
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-semibold tracking-tight text-amber-900">
            Food<span className="text-amber-600">Delight</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isLinkActive('/') ? 'text-amber-600 after:w-full' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`nav-link ${isLinkActive('/menu') ? 'text-amber-600 after:w-full' : ''}`}
            >
              Menu
            </Link>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <Link 
              to="/dashboard" 
              className={`nav-link ${isLinkActive('/dashboard') ? 'text-amber-600 after:w-full' : ''}`}
            >
              Dashboard
            </Link>
            
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">Your Cart</h3>
                    <div className="space-y-3 max-h-60 overflow-auto">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center gap-3 pb-3 border-b">
                          <div className="w-16 h-16 rounded overflow-hidden bg-slate-100">
                            <img 
                              src={`https://source.unsplash.com/featured/100x100?food&sig=${item}`} 
                              alt="Food" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Food Item {item}</p>
                            <p className="text-sm text-slate-500">1 x $12.99</p>
                          </div>
                          <button className="text-red-500 text-sm">Remove</button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-3 font-medium">
                      <span>Total:</span>
                      <span>$38.97</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" className="flex-1 border-amber-600 text-amber-600">View Cart</Button>
                      <Button className="flex-1 bg-amber-500 hover:bg-amber-600">Checkout</Button>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <button 
              className="flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
          <Link 
            to="/" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <a 
            href="#how-it-works" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <Link 
            to="/dashboard" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <div className="pt-4 border-t border-gray-200 w-1/2 flex justify-center">
            <Button className="bg-amber-500 hover:bg-amber-600">
              <User className="h-4 w-4 mr-2" /> Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
