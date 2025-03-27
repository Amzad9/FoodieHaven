
import React, { useEffect, useRef } from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Modern Penthouse with City View',
      address: 'Downtown, Los Angeles',
      price: '$4,500,000',
      beds: 3,
      baths: 3.5,
      sqft: 3200,
      featured: true,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Elegant Villa in Beverly Hills',
      address: 'Beverly Hills, CA',
      price: '$12,750,000',
      beds: 6,
      baths: 7,
      sqft: 8500,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Contemporary Beachfront Home',
      address: 'Malibu, CA',
      price: '$8,995,000',
      beds: 4,
      baths: 4.5,
      sqft: 4800,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Urban Loft with Skyline Views',
      address: 'SoHo, New York',
      price: '$3,200,000',
      beds: 2,
      baths: 2,
      sqft: 2100,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Palm Springs Modern Estate',
      address: 'Palm Springs, CA',
      price: '$5,850,000',
      beds: 4,
      baths: 5,
      sqft: 5200,
    },
  ];

  return (
    <section id="properties" className="py-24 bg-estate-50">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef} 
          className="fade-in-section"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-medium text-estate-600 uppercase tracking-wider mb-2">
              Exceptional Properties
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-estate-900 mb-6">
              Discover Our Featured Listings
            </h3>
            <p className="text-estate-600">
              Experience unparalleled luxury and style with our carefully curated collection of prestigious properties in the most sought-after locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                title={property.title}
                address={property.address}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                featured={property.featured}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-3 border border-estate-900 text-estate-900 rounded-md hover:bg-estate-900 hover:text-white transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
