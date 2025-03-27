
import React from 'react';
import { 
  ShoppingBag, 
  DollarSign, 
  Users, 
  TrendingUp, 
  ArrowUpRight,
  ArrowDownRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Dummy data
const stats = [
  {
    title: 'Total Orders',
    value: '256',
    change: '+12.5%',
    increasing: true,
    icon: ShoppingBag,
    color: 'bg-blue-500'
  },
  {
    title: 'Total Revenue',
    value: '$8,240',
    change: '+8.2%',
    increasing: true,
    icon: DollarSign,
    color: 'bg-green-500'
  },
  {
    title: 'New Customers',
    value: '64',
    change: '-2.4%',
    increasing: false,
    icon: Users,
    color: 'bg-amber-500'
  },
  {
    title: 'Conversion Rate',
    value: '5.6%',
    change: '+1.2%',
    increasing: true,
    icon: TrendingUp,
    color: 'bg-purple-500'
  }
];

const DashboardOverview = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                </div>
                <div className={`${stat.color} p-3 rounded-lg text-white`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              
              <div className={`flex items-center mt-4 text-sm ${
                stat.increasing ? 'text-green-600' : 'text-red-500'
              }`}>
                {stat.increasing ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                <span>{stat.change} from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 mr-3">
                      <img 
                        src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${20 + item}.jpg`} 
                        alt="Customer" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Order #{10000 + item}</p>
                      <p className="text-xs text-slate-500">2 items • $43.82</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item % 3 === 0 ? 'bg-yellow-100 text-yellow-800' : 
                    item % 3 === 1 ? 'bg-green-100 text-green-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item % 3 === 0 ? 'Preparing' : 
                     item % 3 === 1 ? 'Delivered' : 
                     'On the way'}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-4 text-amber-600 text-sm font-medium hover:underline">
              View all orders
            </button>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Popular Dishes</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded overflow-hidden bg-slate-200 mr-3">
                      <img 
                        src={`https://source.unsplash.com/featured/100x100?food&sig=${item}`} 
                        alt="Dish" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">
                        {['Pasta Carbonara', 'Chicken Tikka', 'Beef Burger', 'Vegan Salad', 'Chocolate Cake'][item - 1]}
                      </p>
                      <p className="text-xs text-slate-500">{20 + (item * 4)} orders this week</p>
                    </div>
                  </div>
                  <span className="font-medium text-slate-800">${(12 + item * 1.5).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 text-amber-600 text-sm font-medium hover:underline">
              View all dishes
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
