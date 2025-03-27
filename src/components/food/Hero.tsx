
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-amber-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block bg-amber-100 text-amber-800 text-sm px-4 py-1 rounded-full mb-6">
            Taste the Difference
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-balance">
            Delicious Meals Delivered To Your Doorstep
          </h1>
          <p className="text-xl text-slate-700 mb-8">
            Experience restaurant-quality meals made with premium ingredients, delivered fresh to you. Our expert chefs craft each dish with passion and precision.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg"
              onClick={() => navigate('/menu')}
            >
              Explore Menu
            </Button>
            <Button 
              variant="outline" 
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
              onClick={() => navigate('#how-it-works')}
            >
              How It Works <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center mt-12 gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                  alt={`Customer ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-slate-700">
                <span className="font-medium">4.9</span> (2.5k+ reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80" 
          alt="Food plate"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
