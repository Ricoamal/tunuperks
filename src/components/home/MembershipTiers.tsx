import React from 'react';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

const MembershipTiers = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a membership tier that matches your lifestyle and unlock amazing perks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TierCard = ({ name, icon: Icon, price, features, popular }: TierType) => {
  return (
    <div className={`relative p-8 rounded-2xl border ${
      popular ? 'border-blue-200 bg-blue-50/50' : 'border-gray-200 bg-white'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="flex flex-col items-center mb-6">
        <div className={`w-12 h-12 rounded-xl ${
          popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
        } flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-600 ml-1">/month</span>
        </div>
      </div>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full mt-8 px-6 py-3 rounded-xl font-medium ${
        popular 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
      }`}>
        Get Started
      </button>
    </div>
  );
};

type TierType = {
  name: string;
  icon: React.ElementType;
  price: number;
  features: string[];
  popular?: boolean;
};

const tiers: TierType[] = [
  {
    name: 'Basic',
    icon: Star,
    price: 9.99,
    features: [
      'Access to basic rewards',
      'Standard customer support',
      'Up to 5% cashback',
      'Monthly newsletter'
    ]
  },
  {
    name: 'Premium',
    icon: Crown,
    price: 19.99,
    popular: true,
    features: [
      'All Basic features',
      'Priority customer support',
      'Up to 10% cashback',
      'Exclusive event access',
      'Travel insurance'
    ]
  },
  {
    name: 'Elite',
    icon: Sparkles,
    price: 39.99,
    features: [
      'All Premium features',
      '24/7 concierge service',
      'Up to 15% cashback',
      'VIP event access',
      'Premium travel insurance',
      'Luxury hotel upgrades'
    ]
  }
];

export default MembershipTiers;