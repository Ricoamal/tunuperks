import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Features from '../components/home/Features';
import MembershipTiers from '../components/home/MembershipTiers';
import PopularBenefits from '../components/home/PopularBenefits';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Features />
      <MembershipTiers />
      <PopularBenefits />
      <Testimonials />
    </div>
  );
};

export default Home;