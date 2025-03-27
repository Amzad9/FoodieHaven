
import React, { useState } from 'react';
import { menuItems } from '../../data/dummyData';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2,
  Filter, 
  SortAsc, 
  SortDesc,
  MoreVertical
} from 'lucide-react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

const DashboardMenuItems = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  
  // Filtered and sorted items
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || filterCategory === 'All' || item.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (!sortOrder) return 0;
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });
  
  const handleEdit = (id: number) => {
    toast({
      title: "Edit initiated",
      description: `Editing item #${id}`,
    });
  };
  
  const handleDelete = (id: number) => {
    toast({
      title: "Delete initiated",
      description: `Deleting item #${id}`,
      variant: "destructive"
    });
  };
  
  const toggleSort = () => {
    if (!sortOrder) setSortOrder('asc');
    else if (sortOrder === 'asc') setSortOrder('desc');
    else setSortOrder(null);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-800 mb-4 md:mb-0">Menu Items</h1>
        <Button className="bg-amber-500 hover:bg-amber-600">
          <Plus className="h-4 w-4 mr-2" /> Add New Item
        </Button>
      </div>
      
      <Card className="border-none shadow-md mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search items..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-slate-200">
                    <Filter className="h-4 w-4 mr-2" />
                    {filterCategory || 'All Categories'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {categories.map(category => (
                    <DropdownMenuItem 
                      key={category}
                      onClick={() => setFilterCategory(category === 'All' ? null : category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                variant="outline" 
                className="border-slate-200"
                onClick={toggleSort}
              >
                {sortOrder === 'asc' ? (
                  <SortAsc className="h-4 w-4 mr-2" />
                ) : sortOrder === 'desc' ? (
                  <SortDesc className="h-4 w-4 mr-2" />
                ) : (
                  <SortAsc className="h-4 w-4 mr-2" />
                )}
                {sortOrder ? `Price ${sortOrder === 'asc' ? 'Low-High' : 'High-Low'}` : 'Sort'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Image</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Name</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Category</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Price</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedItems.map(item => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="py-3 px-6">
                    <div className="w-12 h-12 rounded overflow-hidden bg-slate-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    <p className="font-medium text-slate-800">{item.name}</p>
                    <p className="text-xs text-slate-500 line-clamp-1">{item.description}</p>
                  </td>
                  <td className="py-3 px-6">
                    <span className="px-2 py-1 bg-slate-100 rounded-full text-xs">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <p className="font-medium text-slate-800">${item.price.toFixed(2)}</p>
                    {item.oldPrice && (
                      <p className="text-xs text-slate-500 line-through">${item.oldPrice.toFixed(2)}</p>
                    )}
                  </td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.featured ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'
                    }`}>
                      {item.featured ? 'Featured' : 'Regular'}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-slate-200"
                        onClick={() => handleEdit(item.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-slate-200 text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="border-slate-200">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Toggle Featured</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {sortedItems.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-slate-500">No items match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardMenuItems;
