
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Vote, Key, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const VoterLogin = () => {
  const [voterID, setVoterID] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate("/voter/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Vote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tally
            </span>
          </Link>
        </div>

        <Card className="w-full bg-white dark:bg-gray-800 border-0 shadow-lg">
          <CardHeader className="text-center space-y-3 sm:space-y-4 p-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-black dark:text-white">Voter Access</CardTitle>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">Enter your voting credentials to access ongoing elections</p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="voterID" className="text-black dark:text-white font-medium text-sm sm:text-base">Voter ID</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="voterID"
                    type="text"
                    placeholder="Enter your voter ID"
                    value={voterID}
                    onChange={(e) => setVoterID(e.target.value)}
                    className="pl-10 bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 h-11 sm:h-12 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessKey" className="text-black dark:text-white font-medium text-sm sm:text-base">Access Key</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="accessKey"
                    type="password"
                    placeholder="Enter your access key"
                    value={accessKey}
                    onChange={(e) => setAccessKey(e.target.value)}
                    className="pl-10 bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 h-11 sm:h-12 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-11 sm:h-12 text-sm sm:text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Accessing..." : "Access Voting Portal"}
              </Button>

              <div className="text-center pt-2">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-2">
                  Don't have your voting credentials?{" "}
                  <span className="text-blue-600 font-medium">Contact your election administrator</span>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VoterLogin;
