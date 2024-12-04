import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../shared/Footer';
import { useAuth0 } from '@auth0/auth0-react';
import Notifications from '../shared/Notifications';
import CookieConsent from '../shared/CookieConsent';

const Layout = () => {
  const { isAuthenticated } = useAuth0();

  const handleNewUserMessage = (newMessage: string) => {
    // Here you would typically integrate with your chatbot service
    console.log(`New message: ${newMessage}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Notifications />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {isAuthenticated && (
        <ChatWidget
          handleNewUserMessage={handleNewUserMessage}
          title="Customer Support"
          subtitle="How can we help you today?"
        />
      )}
      <CookieConsent />
    </div>
  );
};

export default Layout;