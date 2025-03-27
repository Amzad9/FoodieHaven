
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/food/Hero';
import FeaturedMenu from '../components/food/FeaturedMenu';
import HowItWorks from '../components/food/HowItWorks';
import Testimonials from '../components/food/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
