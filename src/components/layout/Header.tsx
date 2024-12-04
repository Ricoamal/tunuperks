import React from 'react';
import { Menu, X, ChevronDown, Search, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCartStore } from '../../store/cartStore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TunuPerk
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavItem title="Benefits" to="/benefits" />
              <NavItem title="Rewards" to="/rewards" />
              <NavItem title="Travel" to="/travel" />
              <NavItem title="Lifestyle" to="/lifestyle" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            {isAuthenticated ? (
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center space-x-2"
              >
                <img
                  src={user?.picture}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            ) : (
              <>
                <button
                  onClick={() => loginWithRedirect()}
                  className="px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full"
                >
                  Log in
                </button>
                <button
                  onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link to="/benefits" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Benefits</Link>
              <Link to="/rewards" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Rewards</Link>
              <Link to="/travel" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Travel</Link>
              <Link to="/lifestyle" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Lifestyle</Link>
              <Link to="/cart" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cart</Link>
              {isAuthenticated ? (
                <Link to="/profile" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Profile</Link>
              ) : (
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => loginWithRedirect()}
                    className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
                    className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavItem = ({ title, to }: { title: string; to: string }) => (
  <Link to={to} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
    <span>{title}</span>
    <ChevronDown className="w-4 h-4" />
  </Link>
);

export default Header;