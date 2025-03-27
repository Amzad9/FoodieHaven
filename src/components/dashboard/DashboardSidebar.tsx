
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Menu, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardSidebar = ({ activeTab, setActiveTab }: DashboardSidebarProps) => {
  const menuItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard
    },
    {
      id: 'menu',
      label: 'Menu Items',
      icon: Menu
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: ShoppingCart
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: Users
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings
    }
  ];

  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-full">
      <div className="p-6 border-b">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-2xl text-amber-600">
            Food<span className="text-slate-800">Admin</span>
          </span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id 
                    ? 'bg-amber-50 text-amber-700' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left text-slate-600 hover:bg-slate-100">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
