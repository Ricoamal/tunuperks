import React from 'react';

type BenefitCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  discount: string;
};

export const BenefitCard = ({ 
  title, 
  description, 
  image, 
  category, 
  discount 
}: BenefitCardProps) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
          {category}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
          {discount}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};