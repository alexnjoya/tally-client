
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Launch Elections</h1>
        <p className="text-gray-600 mt-2">Deploy your elections to the blockchain and start voting</p>
      </div>

      {launchStatus === "launching" && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="animate-spin">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900">Launching Election...</h3>
                <p className="text-blue-700 mb-2">Deploying smart contracts and initializing blockchain voting</p>
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-blue-600 mt-1">{progress}% complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6">
        {elections.map((election) => (
          <Card key={election.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{election.title}</CardTitle>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge className={getStatusColor(election.status)}>
                      {election.status}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Readiness:</span>
                      <span className={`text-sm font-bold ${getReadinessColor(election.readiness)}`}>
                        {election.readiness}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Eligible Voters</p>
                  <p className="text-2xl font-bold text-gray-900">{election.voters}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Launch Checklist
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(election.checklist).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        {value ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className="text-sm capitalize">{key} Configuration</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Start:</span>
                      <span className="text-sm font-medium">{election.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">End:</span>
                      <span className="text-sm font-medium">{election.endDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <Users className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Voters</p>
                  <p className="font-semibold">{election.voters}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <Shield className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Security</p>
                  <p className="font-semibold">High</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <BarChart3 className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Network</p>
                  <p className="font-semibold">Ethereum</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <Clock className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                  <p className="text-xs text-gray-600">Duration</p>
                  <p className="font-semibold">3 days</p>
                </div>
              </div>

              <div className="flex gap-3">
                {election.status === "ready" && (
                  <Button 
                    onClick={() => handleLaunch(election.id)}
                    disabled={election.readiness < 80}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Rocket className="h-4 w-4 mr-2" />
                    Launch Election
                  </Button>
                )}
                
                {election.status === "active" && (
                  <>
                    <Button variant="outline" onClick={handlePause}>
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </Button>
                    <Button variant="destructive" onClick={handleStop}>
                      <Square className="h-4 w-4 mr-2" />
                      Stop
                    </Button>
                  </>
                )}
                
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
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
