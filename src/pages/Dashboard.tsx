
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Search, BarChart3, Filter } from "lucide-react";
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
    <div className="h-full bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Dashboard</span>
              <span>/</span>
              <span>Elections</span>
            </nav>
          </div>
          <Link to="/app/election-setup">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Star className="h-4 w-4 mr-2" />
              New Election
            </Button>
          </Link>
        </div>

        {/* Recent Elections Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Recent Elections</h2>
            <p className="text-sm text-muted-foreground">Manage and monitor your election campaigns</p>
          </div>
          
          {/* Search and Filter - Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search elections..." 
                className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground h-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48 bg-card border-border text-foreground h-10">
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border shadow-lg">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Elections List - Responsive Cards */}
          <div className="space-y-4">
            {filteredElections.map((election) => (
              <Card 
                key={election.id} 
                className="group hover:shadow-lg transition-all duration-200 cursor-pointer bg-card border-border hover:border-primary/20" 
                onClick={() => navigate(`/app/election/${election.id}`)}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Election Info */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {election.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{election.subtitle}</p>
                    </div>
                    
                    {/* Date Info and Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                      {/* Dates */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="text-center sm:text-right">
                          <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                          <div className="flex flex-col sm:flex-row items-center gap-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                              {election.startDate}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{election.startTime}</span>
                          </div>
                        </div>
                        
                        <div className="text-center sm:text-right">
                          <p className="text-xs text-muted-foreground mb-1">End Date</p>
                          <div className="flex flex-col sm:flex-row items-center gap-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                              {election.endDate}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{election.endTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-border hover:bg-muted text-foreground"
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
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
          <div className="flex justify-center items-center space-x-2 pt-4">
            <Button variant="default" size="sm" className="bg-primary text-primary-foreground">1</Button>
            <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">2</Button>
            <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">3</Button>
            <span className="text-muted-foreground px-2">...</span>
            <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">67</Button>
            <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">68</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
