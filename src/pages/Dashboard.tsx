
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Search, BarChart3 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const navigate = useNavigate();

  const elections = [
    {
      id: 1,
      title: "Department 1",
      subtitle: "Building",
      startDate: "Jun 10, 2024",
      startTime: "9:41 AM",
      endDate: "Jun 10, 2024", 
      endTime: "9:41 AM",
      status: "active"
    },
    {
      id: 2,
      title: "Organisation 1", 
      subtitle: "Building",
      startDate: "Jun 10, 2024",
      startTime: "9:41 AM", 
      endDate: "Jun 10, 2024",
      endTime: "9:41 AM",
      status: "active"
    }
  ];

  const filteredElections = elections.filter(election => {
    const matchesSearch = election.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         election.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || election.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <span>Dashboard</span>
            <span>Settings</span>
          </nav>
        </div>
        <Link to="/app/election-setup">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Star className="h-4 w-4 mr-2" />
            New Election
          </Button>
        </Link>
      </div>

      {/* Recent Elections */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Election</h2>
        
        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="search" 
              className="pl-10" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Elections List */}
        <div className="space-y-4">
          {filteredElections.map((election) => (
            <Card 
              key={election.id} 
              className="hover:shadow-md transition-shadow cursor-pointer" 
              onClick={() => navigate(`/app/election/${election.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{election.title}</h3>
                    <p className="text-gray-600">{election.subtitle}</p>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Start Date</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {election.startDate}
                        </Badge>
                        <span className="text-sm text-gray-600">{election.startTime}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">End Date</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {election.endDate}
                        </Badge>
                        <span className="text-sm text-gray-600">{election.endTime}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/app/election/${election.id}?tab=analytics`);
                        }}
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Analytics
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/app/launch');
                        }}
                      >
                        Launch
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <Button variant="default" size="sm" className="bg-gray-900 text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <span className="text-gray-500">...</span>
          <Button variant="outline" size="sm">67</Button>
          <Button variant="outline" size="sm">68</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
