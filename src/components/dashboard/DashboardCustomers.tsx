
import React, { useState } from 'react';
import { customers } from '../../data/dummyData';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Filter, 
  MoreVertical,
  Mail,
  PhoneCall
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { value: 'all', label: 'All Customers' },
    { value: 'new', label: 'New' },
    { value: 'regular', label: 'Regular' },
    { value: 'vip', label: 'VIP' }
  ];
  
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || customer.type === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-800 mb-4 md:mb-0">Customers</h1>
        <Button className="bg-amber-500 hover:bg-amber-600">
          Add New Customer
        </Button>
      </div>
      
      <Card className="border-none shadow-md mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-slate-400 mr-2" />
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <button
                    key={filter.value}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeFilter === filter.value 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map(customer => (
          <Card key={customer.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={customer.avatar} 
                      alt={customer.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{customer.name}</h3>
                    <p className="text-sm text-slate-500 mb-1">{customer.email}</p>
                    <div className="flex items-center mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        customer.type === 'vip' ? 'bg-purple-100 text-purple-800' :
                        customer.type === 'regular' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {customer.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                    <DropdownMenuItem>View Orders</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Orders</span>
                  <span className="font-medium text-slate-800">{customer.orders}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Total Spent</span>
                  <span className="font-medium text-slate-800">${customer.totalSpent.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Last Order</span>
                  <span className="font-medium text-slate-800">{customer.lastOrder}</span>
                </div>
              </div>
              
              <div className="mt-6 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 border-slate-200">
                  <Mail className="h-4 w-4 mr-2" /> Email
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-slate-200">
                  <PhoneCall className="h-4 w-4 mr-2" /> Call
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredCustomers.length === 0 && (
        <div className="py-8 text-center bg-white rounded-lg shadow-md">
          <p className="text-slate-500">No customers match your search.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardCustomers;
