
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { menuItems } from '../../data/dummyData';
import MenuItemCard from './MenuItemCard';
import { ArrowRight } from 'lucide-react';

const FeaturedMenu = () => {
  const navigate = useNavigate();
  const featuredItems = menuItems.filter(item => item.featured).slice(0, 6);

  return (
    <section className="py-20 bg-white" id="featured-menu">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-sm px-4 py-1 rounded-full mb-4">
              Featured Menu
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Most Popular Dishes
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Discover our chef's selections and customer favorites. These dishes represent the best of what we offer.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-amber-600 text-amber-600 hover:bg-amber-50"
            onClick={() => navigate('/menu')}
          >
            View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
