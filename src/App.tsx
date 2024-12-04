import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Rewards from './pages/Rewards';
import Travel from './pages/Travel';
import Lifestyle from './pages/Lifestyle';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import EventPopup from './components/shared/EventPopup';
import SnowEffect from './components/effects/SnowEffect';
import { shouldShowSnowEffect } from './utils/dateUtils';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds on homepage
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Check if we should show snow effect
    setShowSnow(shouldShowSnowEffect());

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="travel" element={<Travel />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      {showPopup && <EventPopup onClose={() => setShowPopup(false)} />}
      {showSnow && <SnowEffect />}
    </>
  );
}

export default App;