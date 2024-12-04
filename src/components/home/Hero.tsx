import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Unlock Premium Benefits & 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Exclusive Rewards
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join TunuPerk to access exclusive deals, premium experiences, and personalized rewards that enhance your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full font-medium border border-gray-200">
              View Benefits
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat number="500+" label="Premium Partners" />
          <Stat number="1M+" label="Active Members" />
          <Stat number="2000+" label="Exclusive Deals" />
          <Stat number="98%" label="Satisfaction Rate" />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default Hero;