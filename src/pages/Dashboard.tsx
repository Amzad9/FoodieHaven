
import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import DashboardMenuItems from '../components/dashboard/DashboardMenuItems';
import DashboardOrders from '../components/dashboard/DashboardOrders';
import DashboardCustomers from '../components/dashboard/DashboardCustomers';
import DashboardSettings from '../components/dashboard/DashboardSettings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'menu':
        return <DashboardMenuItems />;
      case 'orders':
        return <DashboardOrders />;
      case 'customers':
        return <DashboardCustomers />;
      case 'settings':
        return <DashboardSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
