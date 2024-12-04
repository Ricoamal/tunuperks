import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Rewards from './pages/Rewards';
import Travel from './pages/Travel';
import Lifestyle from './pages/Lifestyle';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Layout from './components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'benefits', element: <Benefits /> },
      { path: 'rewards', element: <Rewards /> },
      { path: 'travel', element: <Travel /> },
      { path: 'lifestyle', element: <Lifestyle /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);