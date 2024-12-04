import React from 'react';
import { Gift, Ticket, Plane, Coffee } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access a world of exclusive benefits and experiences designed for your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Gift className="w-8 h-8" />}
            title="Exclusive Rewards"
            description="Earn points and unlock premium rewards from top brands"
            color="blue"
          />
          <FeatureCard
            icon={<Ticket className="w-8 h-8" />}
            title="Special Discounts"
            description="Get access to members-only prices and deals"
            color="purple"
          />
          <FeatureCard
            icon={<Plane className="w-8 h-8" />}
            title="Travel Perks"
            description="Enjoy exclusive travel benefits and luxury experiences"
            color="indigo"
          />
          <FeatureCard
            icon={<Coffee className="w-8 h-8" />}
            title="Lifestyle Benefits"
            description="Access premium lifestyle services and experiences"
            color="pink"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string;
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    pink: 'bg-pink-50 text-pink-600'
  };

  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 rounded-xl ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;