import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Map, Compass, Hotel, Sunrise, Umbrella } from 'lucide-react';

const Travel = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Benefits
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the world with exclusive travel perks and discounts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {destination.title}
                </h3>
                <p className="text-white/90 mb-4">{destination.description}</p>
                <div className="flex items-center text-white/80">
                  <destination.icon className="w-5 h-5 mr-2" />
                  <span>{destination.perk}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const destinations = [
  {
    title: 'Luxury Hotels',
    description: 'Premium accommodations worldwide',
    perk: 'Up to 30% off',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    icon: Hotel
  },
  {
    title: 'Flight Deals',
    description: 'Business and first-class flights',
    perk: 'Exclusive rates',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    icon: Plane
  },
  {
    title: 'Vacation Packages',
    description: 'All-inclusive resort stays',
    perk: 'Member-only prices',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800',
    icon: Umbrella
  }
];

export default Travel;