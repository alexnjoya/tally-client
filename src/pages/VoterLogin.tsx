
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
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Vote className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tally
            </span>
          </Link>
        </div>

        <Card className="w-full bg-white dark:bg-gray-800 border-0">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl font-bold text-black dark:text-white">Voter Access</CardTitle>
            <p className="text-gray-600 dark:text-gray-400">Enter your voting credentials to access ongoing elections</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="voterID" className="text-black dark:text-white font-medium">Voter ID</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="voterID"
                    type="text"
                    placeholder="Enter your voter ID"
                    value={voterID}
                    onChange={(e) => setVoterID(e.target.value)}
                    className="pl-10 bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessKey" className="text-black dark:text-white font-medium">Access Key</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="accessKey"
                    type="password"
                    placeholder="Enter your access key"
                    value={accessKey}
                    onChange={(e) => setAccessKey(e.target.value)}
                    className="pl-10 bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Accessing..." : "Access Voting Portal"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
