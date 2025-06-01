
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink, Calendar, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Preview = () => {
  const mockElections = [
    {
      id: 1,
      title: "Student Government Elections 2024",
      description: "Annual elections for student representatives",
      status: "draft",
      startDate: "2024-06-15",
      endDate: "2024-06-17",
      voters: 1250,
      positions: ["President", "Vice President", "Secretary", "Treasurer"]
    },
    {
      id: 2,
      title: "Computer Science Department Head",
      description: "Selection of new department head",
      status: "active",
      startDate: "2024-06-10",
      endDate: "2024-06-12",
      voters: 45,
      positions: ["Department Head"]
    }
  ];

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
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Election Preview</h1>
        <p className="text-gray-600 mt-2">Preview and test your elections before launch</p>
      </div>

      <div className="grid gap-6">
        {mockElections.map((election) => (
          <Card key={election.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{election.title}</CardTitle>
                  <p className="text-gray-600 mt-1">{election.description}</p>
                </div>
                <Badge className={getStatusColor(election.status)}>
                  {election.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Start Date</p>
                    <p className="text-sm text-gray-600">{election.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">End Date</p>
                    <p className="text-sm text-gray-600">{election.endDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Eligible Voters</p>
                    <p className="text-sm text-gray-600">{election.voters}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Positions</p>
                    <p className="text-sm text-gray-600">{election.positions.length}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Positions:</p>
                <div className="flex flex-wrap gap-2">
                  {election.positions.map((position, index) => (
                    <Badge key={index} variant="outline">{position}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to={`/app/preview/${election.id}`}>
                    <Eye className="h-4 w-4" />
                    Preview Ballot
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Test Vote
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Launch Election
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockElections.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Elections to Preview</h3>
            <p className="text-gray-600 mb-4">Create an election first to see previews here</p>
            <Button asChild>
              <Link to="/app/election-setup">Create Election</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Preview;
