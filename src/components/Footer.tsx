
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-display font-semibold text-white mb-6 inline-block">
              Food<span className="text-amber-400">Delight</span>
            </Link>
            <p className="text-slate-300 mb-6">
              Delicious meals made with premium ingredients, delivered fresh to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-amber-500 transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-300 hover:text-amber-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Help & Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  123 Food Street, Cuisine City, FC 12345, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-amber-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@fooddelight.com" className="text-slate-300 hover:text-amber-400 transition-colors">
                  info@fooddelight.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FoodDelight. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
