import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Music, Dumbbell, Book, Film, Utensils } from 'lucide-react';

const Lifestyle = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lifestyle Benefits
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your daily life with exclusive perks and experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${category.colorClass} flex items-center justify-center mb-6`}>
                {<category.icon className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.perks.map((perk, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    icon: Coffee,
    title: 'Dining & Entertainment',
    description: 'Exclusive access to restaurants and events',
    colorClass: 'bg-amber-100 text-amber-600',
    perks: [
      'Priority restaurant reservations',
      'Special chef's table experiences',
      'Concert and show tickets'
    ]
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness',
    description: 'Premium health and fitness benefits',
    colorClass: 'bg-green-100 text-green-600',
    perks: [
      'Gym membership discounts',
      'Personal training sessions',
      'Wellness workshops'
    ]
  },
  {
    icon: Film,
    title: 'Entertainment',
    description: 'VIP access to shows and events',
    colorClass: 'bg-purple-100 text-purple-600',
    perks: [
      'Exclusive movie premieres',
      'Theater performance access',
      'Special event invitations'
    ]
  }
];

export default Lifestyle;