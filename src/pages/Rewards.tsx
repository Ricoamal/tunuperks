import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const Rewards = () => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (reward: typeof rewards[0]) => {
    addItem({
      id: reward.id,
      name: reward.title,
      price: reward.price,
      quantity: 1
    });
    navigate('/cart');
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exclusive Rewards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Redeem your points for amazing rewards and experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={reward.image}
                alt={reward.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{reward.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{reward.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${reward.price}</span>
                  <button
                    onClick={() => handleAddToCart(reward)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const rewards = [
  {
    id: '1',
    title: 'Luxury Spa Day',
    description: 'Full day of pampering at a premium spa',
    price: 199,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Fine Dining Experience',
    description: 'Five-course meal at a Michelin-starred restaurant',
    price: 299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Weekend Getaway',
    description: 'Two nights at a luxury resort',
    price: 599,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800'
  }
];

export default Rewards;