
import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  address,
  price,
  beds,
  baths,
  sqft,
  featured = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`property-card group bg-white ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Property Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Blurred placeholder */}
        <div 
          className="absolute inset-0 bg-estate-200 transition-opacity duration-500"
          style={{ opacity: imageLoaded ? 0 : 1 }}
        ></div>
        
        {/* Actual image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Featured tag */}
        {featured && (
          <div className="absolute top-4 left-4 bg-estate-900 text-white px-3 py-1 text-xs font-medium rounded-full">
            Featured
          </div>
        )}
        
        {/* Like button */}
        <button
          className={`absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isLiked 
              ? 'bg-estate-600 text-white' 
              : 'bg-white/80 backdrop-blur-sm text-estate-600 hover:bg-white'
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            size={20}
            className={isLiked ? "fill-white" : ""}
          />
        </button>
        
        {/* Price tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-estate-900 font-semibold">
          {price}
        </div>
      </div>
      
      {/* Property Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-estate-900 mb-2">
          {title}
        </h3>
        
        <div className="flex items-center text-estate-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{address}</span>
        </div>
        
        {/* Property Features */}
        <div className="flex items-center justify-between border-t border-estate-100 pt-4">
          <div className="flex items-center text-estate-700">
            <Bed size={16} className="mr-1" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          
          <div className="flex items-center text-estate-700">
            <Bath size={16} className="mr-1" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          
          <div className="flex items-center text-estate-700">
            <Square size={16} className="mr-1" />
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
