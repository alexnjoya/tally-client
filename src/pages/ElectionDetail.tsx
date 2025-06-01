
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  BarChart3, 
  Settings, 
  Eye,
  Play,
  Pause,
  Square
} from "lucide-react";

const ElectionDetail = () => {
  const { id } = useParams();
  
  // Mock data - in real app, fetch based on ID
  const election = {
    id: parseInt(id || "1"),
    title: "Student Government Elections 2024",
    description: "Annual elections for student representatives",
    status: "active",
    startDate: "2024-06-15 09:00",
    endDate: "2024-06-17 17:00",
    voters: 1250,
    votedCount: 456,
    positions: [
      { title: "President", candidates: 3, votes: 234 },
      { title: "Vice President", candidates: 2, votes: 198 },
      { title: "Secretary", candidates: 4, votes: 167 },
      { title: "Treasurer", candidates: 2, votes: 145 }
    ]
  };

  const turnoutPercentage = Math.round((election.votedCount / election.voters) * 100);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "draft": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/app/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{election.title}</h1>
          <p className="text-gray-600 mt-1">{election.description}</p>
        </div>
        <Badge className={getStatusColor(election.status)}>
          {election.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Voter Turnout
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{election.votedCount} of {election.voters}</span>
              </div>
              <Progress value={turnoutPercentage} className="h-2" />
              <p className="text-2xl font-bold text-blue-600">{turnoutPercentage}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Election Period
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">Start</p>
              <p className="font-medium">{election.startDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">End</p>
              <p className="font-medium">{election.endDate}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link to={`/app/ballot-preview/${election.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                Preview Ballot
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to={`/app/analytics/${election.id}`}>
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Link>
            </Button>
            <Button variant="outline" className="w-full">
              <Settings className="h-4 w-4 mr-2" />
              Election Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Positions & Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {election.positions.map((position, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{position.title}</h3>
                  <Badge variant="outline">{position.candidates} candidates</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total votes: {position.votes}</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        {election.status === "active" && (
          <>
            <Button variant="outline">
              <Pause className="h-4 w-4 mr-2" />
              Pause Election
            </Button>
            <Button variant="destructive">
              <Square className="h-4 w-4 mr-2" />
              End Election
            </Button>
          </>
        )}
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <BarChart3 className="h-4 w-4 mr-2" />
          Full Analytics
        </Button>
      </div>
    </div>
  );
};

export default ElectionDetail;
