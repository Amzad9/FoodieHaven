
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { menuItems } from '../data/dummyData';
import MenuItemCard from '../components/food/MenuItemCard';
import { Search } from 'lucide-react';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  
  const filteredItems = menuItems.filter(item => {
    return (
      (activeCategory === 'All' || item.category === activeCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">Our Menu</h1>
        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          Explore our wide range of delicious meals, prepared with fresh ingredients and love.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for dishes..."
            className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-white text-slate-700 hover:bg-amber-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-slate-600">No items match your search.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;
