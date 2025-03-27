
import React from 'react';
import { ShoppingCart, ChefHat, Truck, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Browse & Order',
    description: 'Explore our menu and select your favorite dishes with a few simple clicks.'
  },
  {
    icon: ChefHat,
    title: 'Chef Prepares',
    description: 'Our skilled chefs prepare your meal with fresh, high-quality ingredients.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Your meal is delivered to your doorstep in eco-friendly packaging.'
  },
  {
    icon: ThumbsUp,
    title: 'Enjoy & Review',
    description: 'Enjoy your delicious meal and let us know how you liked it.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-stone-50" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-amber-100 text-amber-800 text-sm px-4 py-1 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How It Works
          </h2>
          <p className="text-slate-600">
            Ordering your favorite food has never been easier. Follow these simple steps to get delicious food delivered right to your door.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-md h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-amber-600" />
                </div>
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-1 bg-amber-200 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-amber-200 transform rotate-45 -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
