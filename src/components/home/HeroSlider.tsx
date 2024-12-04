import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=2000',
    title: 'Exclusive Rewards',
    subtitle: 'Unlock Premium Benefits',
    description: 'Join TunuPerk to access exclusive deals and personalized rewards.'
  },
  {
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=2000',
    title: 'Holiday Specials',
    subtitle: 'Season of Giving',
    description: 'Discover amazing holiday offers and gift ideas for your loved ones.'
  },
  {
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=2000',
    title: 'Travel Adventures',
    subtitle: 'Explore More',
    description: 'Experience luxury travel with exclusive member discounts.'
  }
];

const HeroSlider = () => {
  return (
    <div className="relative h-screen min-h-[600px] pt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-full flex items-center"
              >
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl text-white">
                    <h2 className="text-xl md:text-2xl font-medium mb-2">
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center justify-center group">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30">
                        View Benefits
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Logo className="absolute top-4 left-4 z-10" />
    </div>
  );
};

const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
      <Gift className="w-6 h-6 text-white" />
    </div>
    <span className="text-2xl font-bold text-white">TunuPerk</span>
  </div>
);

export default HeroSlider;