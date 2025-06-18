import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink, Calendar, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Preview = () => {
  const { toast } = useToast();

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

  const handleTestVote = (electionId: number) => {
    toast({
      title: "Test Vote Initiated",
      description: "Opening test voting interface...",
    });
    // Navigate to test voting page
    window.location.href = `/app/test-vote/${electionId}`;
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Election Preview</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Preview and test your elections before launch</p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {mockElections.map((election) => (
          <Card key={election.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg sm:text-xl">{election.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{election.description}</p>
                </div>
                <Badge className={`self-start sm:self-auto ${getStatusColor(election.status)}`}>
                  {election.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Start Date</p>
                    <p className="text-xs sm:text-sm text-gray-600">{election.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium">End Date</p>
                    <p className="text-xs sm:text-sm text-gray-600">{election.endDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Eligible Voters</p>
                    <p className="text-xs sm:text-sm text-gray-600">{election.voters}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Positions</p>
                    <p className="text-xs sm:text-sm text-gray-600">{election.positions.length}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-medium mb-2">Positions:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {election.positions.map((position, index) => (
                    <Badge key={index} variant="outline" className="text-xs sm:text-sm">{position}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
                  asChild
                >
                  <Link to={`/app/ballot-preview/${election.id}`}>
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    Preview Ballot
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
                  onClick={() => handleTestVote(election.id)}
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  Test Vote
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto text-xs sm:text-sm"
                  asChild
                >
                  <Link to="/app/launch">
                    Launch Election
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockElections.length === 0 && (
        <Card className="text-center py-8 sm:py-12">
          <CardContent className="space-y-3 sm:space-y-4">
            <Eye className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto" />
            <h3 className="text-base sm:text-lg font-medium text-gray-900">No Elections to Preview</h3>
            <p className="text-xs sm:text-sm text-gray-600">Create an election first to see previews here</p>
            <Button asChild className="text-xs sm:text-sm">
              <Link to="/app/election-setup">Create Election</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Preview;
