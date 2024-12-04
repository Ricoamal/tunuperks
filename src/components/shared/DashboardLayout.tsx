import React from 'react';
import { Menu, X, Home, Gift, CreditCard, Settings, LogOut } from 'lucide-react';

type DashboardLayoutProps = {
  children: React.ReactNode;
  userType: 'admin' | 'customer';
};

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const menuItems = userType === 'admin' 
    ? adminMenuItems 
    : customerMenuItems;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen transition-transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 w-64 bg-white border-r border-gray-200
      `}>
        <div className="flex items-center justify-between p-4 border-b">
          <Logo />
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64">
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <span className="font-medium">John Doe</span>
            </div>
          </div>
        </header>

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
      <Gift className="w-5 h-5 text-white" />
    </div>
    <span className="text-xl font-bold">TunuPerk</span>
  </div>
);

const NavItem = ({ 
  icon: Icon, 
  label, 
  href 
}: { 
  icon: React.ElementType; 
  label: string; 
  href: string; 
}) => (
  <a 
    href={href}
    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);

const adminMenuItems = [
  { icon: Home, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'Members', href: '/admin/members' },
  { icon: Gift, label: 'Rewards', href: '/admin/rewards' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
  { icon: LogOut, label: 'Logout', href: '/logout' },
];

const customerMenuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Gift, label: 'Rewards', href: '/rewards' },
  { icon: CreditCard, label: 'Billing', href: '/billing' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: LogOut, label: 'Logout', href: '/logout' },
];

export default DashboardLayout;