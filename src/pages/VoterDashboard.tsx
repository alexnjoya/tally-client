
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vote, Clock, CheckCircle, BarChart3, ExternalLink, Users, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const VoterDashboard = () => {
  const navigate = useNavigate();
  const [elections] = useState([
    {
      id: 1,
      title: "Student Union Presidential Election 2024",
      description: "Choose the next president of the student union",
      status: "active",
      endDate: "2024-03-15",
      totalVotes: 1247,
      totalVoters: 2500,
      hasVoted: false
    },
    {
      id: 2,
      title: "Department Representative Election",
      description: "Select your department representative",
      status: "active", 
      endDate: "2024-03-20",
      totalVotes: 89,
      totalVoters: 150,
      hasVoted: true
    },
    {
      id: 3,
      title: "Faculty Senate Election",
      description: "Vote for faculty senate members",
      status: "upcoming",
      endDate: "2024-03-25",
      totalVotes: 0,
      totalVoters: 800,
      hasVoted: false
    }
  ]);

  const handleLogout = () => {
    navigate("/voter-login");
  };

  const getStatusBadge = (status: string, hasVoted: boolean) => {
    if (hasVoted && status === "active") {
      return <Badge className="bg-green-100 text-green-800 border-green-200">Voted</Badge>;
    }
    switch (status) {
      case "active":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Active</Badge>;
      case "upcoming":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Upcoming</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Closed</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Vote className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-black dark:text-white">Tally Voter Portal</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Voter ID: V2024001</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">Welcome to Your Voting Portal</h2>
          <p className="text-gray-600 dark:text-gray-400">Participate in ongoing elections and view your voting history</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Elections</p>
                  <p className="text-2xl font-bold text-blue-600">2</p>
                </div>
                <Vote className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Elections Participated</p>
                  <p className="text-2xl font-bold text-green-600">1</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Upcoming Elections</p>
                  <p className="text-2xl font-bold text-yellow-600">1</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Elections List */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-black dark:text-white">Elections</h3>
          
          {elections.map((election) => (
            <Card key={election.id} className="hover:shadow-sm transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-black dark:text-white">{election.title}</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{election.description}</p>
                  </div>
                  {getStatusBadge(election.status, election.hasVoted)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Ends: {election.endDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{election.totalVotes}/{election.totalVoters} voted</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {election.status === "active" && (
                      <>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="h-4 w-4 mr-1" />
                          View Analytics
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Blockchain
                        </Button>
                        {!election.hasVoted && (
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Vote Now
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Participation Rate</span>
                    <span>{Math.round((election.totalVotes / election.totalVoters) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" 
                      style={{ width: `${(election.totalVotes / election.totalVoters) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Voting History */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-6">Recent Voting Activity</h3>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div>
                      <p className="font-medium text-black dark:text-white">Department Representative Election</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Voted successfully</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div>
                      <p className="font-medium text-black dark:text-white">Student Union Presidential Election 2024</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Election started</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VoterDashboard;
