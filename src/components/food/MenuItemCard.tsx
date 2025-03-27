
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  featured?: boolean;
  rating?: number;
  ingredients?: string[];
  prepTime?: string;
  chefSpecial?: boolean;
}

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${item.name} added to your cart`,
    });
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => navigate(`/item/${item.id}`)}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {item.featured && (
          <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-2 py-1 rounded-md">
            Featured
          </span>
        )}
        {item.oldPrice && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            Sale
          </span>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-semibold text-xl text-slate-800 line-clamp-1">
            {item.name}
          </h3>
          <div className="flex items-center">
            {item.rating && (
              <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-slate-600">{item.rating}</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-slate-600 text-sm line-clamp-2 mb-4 h-10">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
            {item.oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">${item.oldPrice.toFixed(2)}</span>
            )}
          </div>
          
          <Button
            size="sm"
            className="bg-amber-500 hover:bg-amber-600 text-white"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="w-4 h-4 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
