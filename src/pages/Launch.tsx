import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Users, 
  Calendar,
  Shield,
  BarChart3,
  Play,
  Pause,
  Square
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Launch = () => {
  const [launchStatus, setLaunchStatus] = useState<"ready" | "launching" | "active" | "paused">("ready");
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const elections = [
    {
      id: 1,
      title: "Student Government Elections 2024",
      readiness: 95,
      status: "ready",
      voters: 1250,
      startDate: "2024-06-15 09:00",
      endDate: "2024-06-17 17:00",
      checklist: {
        ballot: true,
        voters: true,
        security: true,
        notifications: false,
        blockchain: true
      }
    },
    {
      id: 2,
      title: "Computer Science Department Head",
      readiness: 100,
      status: "active",
      voters: 45,
      startDate: "2024-06-10 09:00",
      endDate: "2024-06-12 17:00",
      checklist: {
        ballot: true,
        voters: true,
        security: true,
        notifications: true,
        blockchain: true
      }
    }
  ];

  const handleLaunch = async (electionId: number) => {
    setLaunchStatus("launching");
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLaunchStatus("active");
          toast({
            title: "Election Launched!",
            description: "Your election is now live and accepting votes.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handlePause = () => {
    setLaunchStatus("paused");
    toast({
      title: "Election Paused",
      description: "Voting has been temporarily suspended.",
      variant: "destructive",
    });
  };

  const handleStop = () => {
    setLaunchStatus("ready");
    setProgress(0);
    toast({
      title: "Election Stopped",
      description: "The election has been terminated.",
      variant: "destructive",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "ready": return "bg-blue-100 text-blue-800";
      case "paused": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getReadinessColor = (readiness: number) => {
    if (readiness >= 95) return "text-green-600";
    if (readiness >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Launch Elections</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Deploy your elections to the blockchain and start voting</p>
      </div>

      {launchStatus === "launching" && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="animate-spin">
                <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 text-sm sm:text-base">Launching Election...</h3>
                <p className="text-blue-700 mb-2 text-xs sm:text-sm">Deploying smart contracts and initializing blockchain voting</p>
                <Progress value={progress} className="h-2" />
                <p className="text-xs sm:text-sm text-blue-600 mt-1">{progress}% complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 sm:gap-6">
        {elections.map((election) => (
          <Card key={election.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg sm:text-xl">{election.title}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                    <Badge className={`self-start sm:self-auto ${getStatusColor(election.status)}`}>
                      {election.status}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-medium">Readiness:</span>
                      <span className={`text-xs sm:text-sm font-bold ${getReadinessColor(election.readiness)}`}>
                        {election.readiness}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs sm:text-sm text-gray-500">Eligible Voters</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{election.voters}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-medium mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4" />
                    Launch Checklist
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {Object.entries(election.checklist).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        {value ? (
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                        )}
                        <span className="text-xs sm:text-sm capitalize">{key} Configuration</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Calendar className="h-4 w-4" />
                    Schedule
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">Start:</span>
                      <span className="text-xs sm:text-sm font-medium">{election.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">End:</span>
                      <span className="text-xs sm:text-sm font-medium">{election.endDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gray-50 rounded-lg text-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Voters</p>
                  <p className="font-semibold text-sm sm:text-base">{election.voters}</p>
                </div>
                <div className="p-2 sm:p-3 bg-gray-50 rounded-lg text-center">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Security</p>
                  <p className="font-semibold text-sm sm:text-base">High</p>
                </div>
                <div className="p-2 sm:p-3 bg-gray-50 rounded-lg text-center">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Network</p>
                  <p className="font-semibold text-sm sm:text-base">Ethereum</p>
                </div>
                <div className="p-2 sm:p-3 bg-gray-50 rounded-lg text-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Duration</p>
                  <p className="font-semibold text-sm sm:text-base">3 days</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                {election.status === "ready" && (
                  <Button 
                    onClick={() => handleLaunch(election.id)}
                    disabled={election.readiness < 80}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto text-xs sm:text-sm"
                  >
                    <Rocket className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Launch Election
                  </Button>
                )}
                
                {election.status === "active" && (
                  <>
                    <Button variant="outline" onClick={handlePause} className="w-full sm:w-auto text-xs sm:text-sm">
                      <Pause className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Pause
                    </Button>
                    <Button variant="destructive" onClick={handleStop} className="w-full sm:w-auto text-xs sm:text-sm">
                      <Square className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Stop
                    </Button>
                  </>
                )}
                
                <Button variant="outline" className="w-full sm:w-auto text-xs sm:text-sm">
                  <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Launch;
