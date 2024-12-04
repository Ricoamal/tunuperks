import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const { items, total, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Please log in to continue</h2>
        <button
          onClick={() => loginWithRedirect()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Log In
        </button>
      </div>
    );
  }

  const handleStripeCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    // Here you would typically make an API call to your backend to create a Stripe session
    // For demo purposes, we'll just show a success message
    toast.success('Payment successful!');
    clearCart();
    navigate('/profile');
  };

  const handlePayPalApprove = (data: any, actions: any) => {
    return actions.order.capture().then(() => {
      toast.success('Payment successful!');
      clearCart();
      navigate('/profile');
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  checked={paymentMethod === 'stripe'}
                  onChange={() => setPaymentMethod('stripe')}
                  className="form-radio"
                />
                <span>Credit Card (Stripe)</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="form-radio"
                />
                <span>PayPal</span>
              </label>
            </div>
          </div>

          {paymentMethod === 'stripe' ? (
            <button
              onClick={handleStripeCheckout}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Pay with Stripe
            </button>
          ) : (
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: (total * 1.1).toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={handlePayPalApprove}
            />
          )}
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total (including tax)</span>
                <span>${(total * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;