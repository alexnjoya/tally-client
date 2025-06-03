
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Eye, Users, Vote, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const navigate = useNavigate();

  // Mock election data
  const election = {
    title: "Department 1 Election",
    description: "Annual department representative election for Computer Science Department",
    startDate: "Jun 10, 2024",
    startTime: "9:41 AM",
    endDate: "Jun 10, 2024",
    endTime: "9:41 PM",
    status: "active",
    totalVoters: 245,
    votesCount: 123,
    electionUrl: "https://vote.tally.com/election/7fMk5",
    shortUrl: "https://vote.er.com/7fMk5",
    previewUrl: "https://vote.tally.com/preview/7fMk5/s4LzWQtFgO32FTOV"
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePreviewElection = () => {
    navigate("/app/preview");
  };

  const handleManageVoters = () => {
    navigate("/app/voter");
  };

  const handleEditBallot = () => {
    navigate("/app/ballot");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{election.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">{election.description}</p>
        </div>
        <Badge 
          variant={election.status === 'active' ? 'default' : 'secondary'}
          className={election.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : ''}
        >
          {election.status.charAt(0).toUpperCase() + election.status.slice(1)}
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-orange-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Voters</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{election.totalVoters}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Vote className="h-6 w-6 text-pink-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ballot Questions</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Start Date</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{election.startDate}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{election.startTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">End Date</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{election.endDate}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{election.endTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Election URLs */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
            <ExternalLink className="h-5 w-5" />
            <span>Election URLs</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Election URL */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Election URL</label>
            <div className="flex items-center space-x-2 mt-1">
              <input 
                type="text" 
                value={election.electionUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(election.electionUrl, 'electionUrl')}
              >
                <Copy className="h-4 w-4" />
                {copiedField === 'electionUrl' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              This URL will not be accessible until after the election has been launched.
            </p>
          </div>

          {/* Short URL */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Short URL</label>
            <div className="flex items-center space-x-2 mt-1">
              <input 
                type="text" 
                value={election.shortUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(election.shortUrl, 'shortUrl')}
              >
                <Copy className="h-4 w-4" />
                {copiedField === 'shortUrl' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>

          {/* Preview URL */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview URL</label>
            <div className="flex items-center space-x-2 mt-1">
              <input 
                type="text" 
                value={election.previewUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(election.previewUrl, 'previewUrl')}
              >
                <Copy className="h-4 w-4" />
                {copiedField === 'previewUrl' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>

          {/* Organization Subdomain */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Organization Subdomain</label>
            <button className="block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm mt-1">
              Click here to set up your organization's subdomain
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              className="flex items-center space-x-2"
              onClick={handlePreviewElection}
            >
              <Eye className="h-4 w-4" />
              <span>Preview Election</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center space-x-2"
              onClick={handleManageVoters}
            >
              <Users className="h-4 w-4" />
              <span>Manage Voters</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center space-x-2"
              onClick={handleEditBallot}
            >
              <Vote className="h-4 w-4" />
              <span>Edit Ballot</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
