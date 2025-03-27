
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, User, ShieldAlert, CreditCard, Briefcase, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardSettings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('profile');
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-800 mb-4 md:mb-0">Settings</h1>
        <Button className="bg-amber-500 hover:bg-amber-600" onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" /> Save Changes
        </Button>
      </div>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="profile" className="data-[state=active]:bg-white">
            <User className="h-4 w-4 mr-2" /> Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-white">
            <ShieldAlert className="h-4 w-4 mr-2" /> Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-white">
            <CreditCard className="h-4 w-4 mr-2" /> Billing
          </TabsTrigger>
          <TabsTrigger value="company" className="data-[state=active]:bg-white">
            <Briefcase className="h-4 w-4 mr-2" /> Company
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-white">
            <Bell className="h-4 w-4 mr-2" /> Notifications
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="p-0">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-4">Profile Information</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-200 mb-4">
                          <img 
                            src="https://randomuser.me/api/portraits/men/32.jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <Button variant="outline" className="w-full border-slate-200">
                          Change Photo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            First Name
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            defaultValue="Admin"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Last Name
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            defaultValue="User"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                          defaultValue="admin@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                          defaultValue="+1 (555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Bio
                        </label>
                        <textarea 
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 h-24"
                          defaultValue="Restaurant manager with 5+ years of experience in the food industry."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Security Settings</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-slate-800 mb-3">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Current Password
                      </label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        New Password
                      </label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Confirm New Password
                      </label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <Button className="bg-amber-500 hover:bg-amber-600">
                      Update Password
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="text-base font-medium text-slate-800 mb-3">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 mb-1">Enhance your account security by enabling two-factor authentication.</p>
                      <p className="text-sm text-slate-500">Status: <span className="text-green-600 font-medium">Enabled</span></p>
                    </div>
                    <Button variant="outline" className="border-slate-200">
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Billing Information</h3>
              <p className="text-slate-600 mb-6">Manage your payment methods and billing details.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-slate-800 mb-3">Payment Methods</h4>
                  <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center mr-4">
                          <span className="text-blue-700 font-bold text-sm">VISA</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">VISA ending in 4242</p>
                          <p className="text-sm text-slate-500">Expires 12/2025</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-slate-200">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 text-red-500 hover:text-red-700">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="border-slate-200">
                    <CreditCard className="h-4 w-4 mr-2" /> Add Payment Method
                  </Button>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="text-base font-medium text-slate-800 mb-3">Billing Address</h4>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-slate-800 mb-1">Admin User</p>
                    <p className="text-slate-600 mb-1">123 Main Street</p>
                    <p className="text-slate-600 mb-1">Apt 4B</p>
                    <p className="text-slate-600">New York, NY 10001</p>
                  </div>
                  <Button variant="outline" className="mt-4 border-slate-200">
                    Edit Address
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="company">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Company Settings</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-slate-800 mb-3">General Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        defaultValue="FoodDelight Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Website
                      </label>
                      <input 
                        type="url" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        defaultValue="https://fooddelight.example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Business Hours
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        defaultValue="Mon-Fri: 9am-10pm, Sat-Sun: 10am-11pm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Description
                      </label>
                      <textarea 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 h-24"
                        defaultValue="Premium food delivery service offering restaurant-quality meals prepared by expert chefs."
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="text-base font-medium text-slate-800 mb-3">Location</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Street Address
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        defaultValue="456 Food Avenue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        City
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        defaultValue="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        State/Province
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        defaultValue="NY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Postal Code
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        defaultValue="10002"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Notification Preferences</h3>
              <p className="text-slate-600 mb-6">Manage how you receive notifications and alerts.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-slate-800 mb-3">Email Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-800">New Orders</p>
                        <p className="text-sm text-slate-500">Receive notifications when new orders are placed.</p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle-new-orders" 
                          className="sr-only"
                          defaultChecked
                        />
                        <label 
                          htmlFor="toggle-new-orders"
                          className="block h-6 rounded-full bg-slate-200 cursor-pointer"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-800">Order Updates</p>
                        <p className="text-sm text-slate-500">Receive notifications when orders are updated or fulfilled.</p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle-order-updates" 
                          className="sr-only"
                          defaultChecked
                        />
                        <label 
                          htmlFor="toggle-order-updates"
                          className="block h-6 rounded-full bg-slate-200 cursor-pointer"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-800">Customer Reviews</p>
                        <p className="text-sm text-slate-500">Receive notifications when customers leave reviews.</p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle-reviews" 
                          className="sr-only"
                          defaultChecked
                        />
                        <label 
                          htmlFor="toggle-reviews"
                          className="block h-6 rounded-full bg-slate-200 cursor-pointer"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="text-base font-medium text-slate-800 mb-3">System Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-800">Security Alerts</p>
                        <p className="text-sm text-slate-500">Receive notifications about security incidents.</p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle-security" 
                          className="sr-only"
                          defaultChecked
                        />
                        <label 
                          htmlFor="toggle-security"
                          className="block h-6 rounded-full bg-slate-200 cursor-pointer"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-800">Inventory Alerts</p>
                        <p className="text-sm text-slate-500">Receive notifications when inventory is low.</p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle-inventory" 
                          className="sr-only"
                          defaultChecked
                        />
                        <label 
                          htmlFor="toggle-inventory"
                          className="block h-6 rounded-full bg-slate-200 cursor-pointer"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSettings;
