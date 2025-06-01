
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Users, Vote, Eye, BarChart3, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ElectionDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  // Mock election data
  const election = {
    id: parseInt(id || "1"),
    title: "Department 1 Election",
    description: "Annual department representative election for Computer Science Department",
    startDate: "Jun 10, 2024",
    startTime: "9:41 AM",
    endDate: "Jun 10, 2024",
    endTime: "9:41 PM",
    status: "active",
    totalVoters: 245,
    votesCount: 123,
    candidates: [
      { name: "John Doe", votes: 45, percentage: 36.6 },
      { name: "Jane Smith", votes: 78, percentage: 63.4 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/app/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{election.title}</h1>
            <p className="text-gray-600">{election.description}</p>
          </div>
        </div>
        <Badge 
          variant={election.status === 'active' ? 'default' : 'secondary'}
          className={election.status === 'active' ? 'bg-green-100 text-green-700' : ''}
        >
          {election.status.charAt(0).toUpperCase() + election.status.slice(1)}
        </Badge>
      </div>

      {/* Election Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Total Voters</p>
                <p className="text-2xl font-bold">{election.totalVoters}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Vote className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Votes Cast</p>
                <p className="text-2xl font-bold">{election.votesCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="text-lg font-semibold">{election.startDate}</p>
                <p className="text-sm text-gray-500">{election.startTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-500">End Date</p>
                <p className="text-lg font-semibold">{election.endDate}</p>
                <p className="text-sm text-gray-500">{election.endTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="voters">Voters</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Election Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {election.candidates.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{candidate.name}</h4>
                      <p className="text-sm text-gray-500">{candidate.votes} votes</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{candidate.percentage}%</p>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-blue-600 rounded-full" 
                          style={{ width: `${candidate.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Voting Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Turnout Rate</h4>
                  <p className="text-3xl font-bold text-blue-600">
                    {((election.votesCount / election.totalVoters) * 100).toFixed(1)}%
                  </p>
                  <p className="text-sm text-gray-500">
                    {election.votesCount} of {election.totalVoters} voters
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Leading Candidate</h4>
                  <p className="text-lg font-semibold">{election.candidates[1].name}</p>
                  <p className="text-sm text-gray-500">
                    {election.candidates[1].percentage}% of votes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voters">
          <Card>
            <CardHeader>
              <CardTitle>Voter Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Voter management features will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Election Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Election configuration settings will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ElectionDetail;
