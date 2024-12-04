import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Bitcoin, CreditCard, Gift } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About TunuPerk</h3>
            <p className="text-gray-400 mb-4">
              Your premier destination for exclusive rewards and lifestyle benefits.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Youtube} />
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/benefits">Benefits</FooterLink>
              <FooterLink href="/rewards">Rewards</FooterLink>
              <FooterLink href="/travel">Travel</FooterLink>
              <FooterLink href="/lifestyle">Lifestyle</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Payment Methods</h3>
            <div className="grid grid-cols-3 gap-4">
              <PaymentIcon icon={CreditCard} label="Credit Card" />
              <PaymentIcon icon={Bitcoin} label="Bitcoin" />
              <PaymentIcon icon={Gift} label="Gift Card" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TunuPerk. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

const PaymentIcon = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-2">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-xs text-center">{label}</span>
  </div>
);

export default Footer;