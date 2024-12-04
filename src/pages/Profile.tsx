import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { User, Settings, CreditCard, Gift, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 bg-blue-600">
              <div className="flex items-center">
                <img
                  src={user?.picture}
                  alt={user?.name}
                  className="w-20 h-20 rounded-full border-4 border-white"
                />
                <div className="ml-6 text-white">
                  <h1 className="text-2xl font-bold">{user?.name}</h1>
                  <p className="text-blue-100">{user?.email}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <ProfileSection
                  icon={User}
                  title="Personal Information"
                  items={[
                    { label: 'Name', value: user?.name },
                    { label: 'Email', value: user?.email },
                    { label: 'Member Since', value: 'January 2024' }
                  ]}
                />

                <ProfileSection
                  icon={Gift}
                  title="Rewards Status"
                  items={[
                    { label: 'Points Balance', value: '2,500' },
                    { label: 'Tier Status', value: 'Gold Member' },
                    { label: 'Next Tier', value: '500 points away' }
                  ]}
                />
              </div>

              <div className="mt-8 pt-8 border-t">
                <button
                  onClick={() => logout()}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileSection = ({ 
  icon: Icon, 
  title, 
  items 
}: { 
  icon: React.ElementType;
  title: string;
  items: { label: string; value: string | undefined; }[];
}) => (
  <div className="bg-gray-50 rounded-xl p-6">
    <div className="flex items-center mb-4">
      <Icon className="w-5 h-5 text-blue-600 mr-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span className="text-gray-600">{item.label}</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Profile;