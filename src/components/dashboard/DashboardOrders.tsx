
import React, { useState } from 'react';
import { orders } from '../../data/dummyData';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Calendar, 
  Filter, 
  Eye,
  CheckCircle,
  XCircle, 
  Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const orderStatuses = [
  { value: 'all', label: 'All Orders' },
  { value: 'pending', label: 'Pending' },
  { value: 'processing', label: 'Processing' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' }
];

const statusColor = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800"
};

const statusIcon = {
  pending: Clock,
  processing: Clock,
  delivered: CheckCircle,
  cancelled: XCircle
};

const DashboardOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.orderNumber.toString().includes(searchTerm) || 
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-800 mb-4 md:mb-0">Orders Management</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-slate-200">
            <Calendar className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button className="bg-amber-500 hover:bg-amber-600">
            All Orders
          </Button>
        </div>
      </div>
      
      <Card className="border-none shadow-md mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by order number or customer..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-slate-400 mr-2" />
              <div className="flex flex-wrap gap-2">
                {orderStatuses.map(status => (
                  <button
                    key={status.value}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedStatus === status.value 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    onClick={() => setSelectedStatus(status.value)}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Order</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Customer</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map(order => {
                const StatusIcon = statusIcon[order.status as keyof typeof statusIcon];
                
                return (
                  <tr key={order.id} className="hover:bg-slate-50">
                    <td className="py-3 px-6">
                      <p className="font-medium text-slate-800">#{order.orderNumber}</p>
                      <p className="text-xs text-slate-500">{order.items.length} items</p>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 mr-3">
                          <img 
                            src={order.customer.avatar} 
                            alt={order.customer.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{order.customer.name}</p>
                          <p className="text-xs text-slate-500">{order.customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      <p className="text-slate-800">{order.date}</p>
                      <p className="text-xs text-slate-500">{order.time}</p>
                    </td>
                    <td className="py-3 px-6">
                      <p className="font-medium text-slate-800">${order.total.toFixed(2)}</p>
                    </td>
                    <td className="py-3 px-6">
                      <div className={`px-3 py-1 rounded-full inline-flex items-center text-xs ${
                        statusColor[order.status as keyof typeof statusColor]
                      }`}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {filteredOrders.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-slate-500">No orders match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOrders;
