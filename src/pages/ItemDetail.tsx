
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { menuItems } from '../data/dummyData';
import { MinusCircle, PlusCircle, ShoppingBag, Clock, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState<any>(null);
  
  useEffect(() => {
    const foundItem = menuItems.find(item => item.id.toString() === id);
    if (!foundItem) {
      navigate('/menu');
      return;
    }
    setItem(foundItem);
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    // This would later connect to Supabase or local storage
    toast({
      title: "Added to cart",
      description: `${quantity} × ${item.name} added to your cart`,
    });
  };
  
  if (!item) return null;
  
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          {/* Details Section */}
          <div className="md:w-1/2">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full mb-3">
              {item.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">{item.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
              {item.oldPrice && (
                <span className="ml-3 text-gray-400 line-through">${item.oldPrice.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-slate-600 mb-6">{item.description}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button 
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  <MinusCircle className="w-5 h-5 text-slate-600" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  <PlusCircle className="w-5 h-5 text-slate-600" />
                </button>
              </div>
              
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 flex items-center gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
            
            <div className="space-y-4 border-t border-b border-gray-200 py-6 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500" />
                <span className="text-slate-700">Preparation Time: {item.prepTime || '20-30 minutes'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-slate-700">Chef's Special: {item.chefSpecial ? 'Yes' : 'No'}</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Ingredients:</h3>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                {item.ingredients?.map((ingredient: string, index: number) => (
                  <li key={index}>{ingredient}</li>
                )) || (
                  <>
                    <li>Freshly sourced ingredients</li>
                    <li>Premium quality produce</li>
                    <li>Herbs and spices</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ItemDetail;
