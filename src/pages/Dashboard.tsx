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
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>Dashboard</span>
            <span>Settings</span>
          </nav>
        </div>
        <Link to="/app/election-setup">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            New Election
          </Button>
        </Link>
      </div>

      {/* Recent Elections */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Recent Election</h2>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
            <Input 
              placeholder="search" 
              className="pl-10 bg-white dark:bg-[#2a2a2a] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48 bg-white dark:bg-[#2a2a2a] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 shadow-lg z-50">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Elections List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredElections.map((election) => (
            <Card 
              key={election.id} 
              className="hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-[#2a2a2a] border-gray-200 dark:border-gray-700" 
              onClick={() => navigate(`/app/overview`)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">{election.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{election.subtitle}</p>
                  </div>
                  
                  {/* Date Information - Mobile Stacked */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Start Date</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <Badge variant="secondary" className="w-fit bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs">
                          {election.startDate}
                        </Badge>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{election.startTime}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">End Date</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <Badge variant="secondary" className="w-fit bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs">
                          {election.endDate}
                        </Badge>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{election.endTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons - Mobile Stacked */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full sm:w-auto border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/app/election/${election.id}?tab=analytics`);
                      }}
                    >
                      <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                      Analytics
                    </Button>
                    <Button 
                      size="sm"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/app/launch');
                      }}
                    >
                      Launch
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-1 sm:space-x-2 mt-6 sm:mt-8">
          <Button variant="default" size="sm" className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs sm:text-sm px-2 sm:px-3">1</Button>
          <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm px-2 sm:px-3">2</Button>
          <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm px-2 sm:px-3">3</Button>
          <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">...</span>
          <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm px-2 sm:px-3">67</Button>
          <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm px-2 sm:px-3">68</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
