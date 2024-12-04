import React from 'react';
import { Users, Gift, CreditCard, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Members"
            value="15,234"
            icon={Users}
            trend="+12%"
            positive={true}
          />
          <StatCard
            title="Active Rewards"
            value="456"
            icon={Gift}
            trend="+8%"
            positive={true}
          />
          <StatCard
            title="Revenue"
            value="$45,678"
            icon={CreditCard}
            trend="+15%"
            positive={true}
          />
          <StatCard
            title="Redemption Rate"
            value="68%"
            icon={BarChart3}
            trend="-2%"
            positive={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentMembers />
          <RecentRedemptions />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  positive 
}: { 
  title: string; 
  value: string; 
  icon: React.ElementType; 
  trend: string; 
  positive: boolean; 
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <span className={`text-sm font-medium ${positive ? 'text-green-600' : 'text-red-600'}`}>
        {trend}
      </span>
    </div>
    <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const RecentMembers = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-lg font-semibold mb-4">Recent Members</h2>
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <div className="ml-3">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Premium Member</p>
            </div>
          </div>
          <span className="text-sm text-gray-500">2 mins ago</span>
        </div>
      ))}
    </div>
  </div>
);

const RecentRedemptions = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-lg font-semibold mb-4">Recent Redemptions</h2>
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gray-200" />
            <div className="ml-3">
              <p className="font-medium">Hotel Discount</p>
              <p className="text-sm text-gray-500">30% Off</p>
            </div>
          </div>
          <span className="text-sm text-gray-500">5 mins ago</span>
        </div>
      ))}
    </div>
  </div>
);

export default AdminDashboard;