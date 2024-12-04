import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BenefitCard } from '../shared/BenefitCard';

const PopularBenefits = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover our most loved perks and exclusive offers
            </p>
          </div>
          <button className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium">
            View All Benefits
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            View All Benefits
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    id: 1,
    title: 'Luxury Hotel Stays',
    description: 'Get up to 30% off at premium hotels worldwide',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    category: 'Travel',
    discount: '30% Off'
  },
  {
    id: 2,
    title: 'Fine Dining Experience',
    description: 'Exclusive access to michelin-starred restaurants',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    category: 'Dining',
    discount: 'Special Menu'
  },
  {
    id: 3,
    title: 'Wellness & Spa',
    description: 'Premium spa treatments at luxury wellness centers',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    category: 'Wellness',
    discount: '25% Off'
  }
];

export default PopularBenefits;