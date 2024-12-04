import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Plane, Coffee, Gift, CreditCard } from 'lucide-react';

const Benefits = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Benefits Package
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of benefits designed to enhance your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${benefit.colorClass} flex items-center justify-center mb-6`}>
                {<benefit.icon className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description: 'Comprehensive health, dental, and vision insurance for you and your family.',
    colorClass: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Heart,
    title: 'Wellness Programs',
    description: 'Access to fitness centers, mental health resources, and wellness workshops.',
    colorClass: 'bg-red-100 text-red-600'
  },
  {
    icon: Plane,
    title: 'Travel Benefits',
    description: 'Exclusive discounts on flights, hotels, and vacation packages.',
    colorClass: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Coffee,
    title: 'Lifestyle Perks',
    description: 'Discounts at restaurants, entertainment venues, and retail stores.',
    colorClass: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Gift,
    title: 'Rewards Program',
    description: 'Earn points on purchases and redeem them for exclusive rewards.',
    colorClass: 'bg-green-100 text-green-600'
  },
  {
    icon: CreditCard,
    title: 'Financial Benefits',
    description: 'Investment options, retirement planning, and financial advisory services.',
    colorClass: 'bg-indigo-100 text-indigo-600'
  }
];

export default Benefits;