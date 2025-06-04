
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Users, Clock, Shield, ExternalLink, Download } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const VotingAnalytics = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock election data
  const election = {
    id: 1,
    title: "Student Union Presidential Election 2024",
    status: "active",
    endDate: "2024-03-15",
    totalVotes: 1247,
    totalVoters: 2500,
    blockchainHash: "0x1a2b3c4d5e6f7890abcdef1234567890",
    network: "Ethereum Sepolia",
    contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12"
  };

  // Mock voting data
  const voteData = [
    { name: "Sarah Johnson", votes: 567, percentage: 45.5, color: "#3B82F6" },
    { name: "Michael Chen", votes: 423, percentage: 33.9, color: "#10B981" }, 
    { name: "Emma Rodriguez", votes: 257, percentage: 20.6, color: "#F59E0B" }
  ];

  const hourlyVotes = [
    { hour: "00:00", votes: 12 },
    { hour: "04:00", votes: 8 },
    { hour: "08:00", votes: 45 },
    { hour: "12:00", votes: 89 },
    { hour: "16:00", votes: 76 },
    { hour: "20:00", votes: 134 },
    { hour: "24:00", votes: 67 }
  ];

  const demographicData = [
    { demographic: "Computer Science", votes: 324, percentage: 26.0 },
    { demographic: "Business", votes: 298, percentage: 23.9 },
    { demographic: "Engineering", votes: 267, percentage: 21.4 },
    { demographic: "Liberal Arts", votes: 234, percentage: 18.8 },
    { demographic: "Other", votes: 124, percentage: 9.9 }
  ];

  const handleBack = () => {
    navigate("/voter/dashboard");
  };

  const handleViewOnEtherscan = () => {
    window.open(`https://sepolia.etherscan.io/address/${election.contractAddress}`, '_blank');
  };

  const handleVerifyResults = () => {
    window.open(`https://sepolia.etherscan.io/address/${election.contractAddress}#readContract`, '_blank');
  };

  const participationRate = (election.totalVotes / election.totalVoters) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 px-4 sm:px-6 py-4 sticky top-0 z-50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-7xl mx-auto">
          <Button variant="ghost" onClick={handleBack} className="hover:bg-gray-100 dark:hover:bg-gray-700 self-start">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Back to Dashboard</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Blockchain Verified</span>
            </div>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Election Info */}
        <Card className="mb-6 sm:mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="break-words">{election.title} - Analytics</span>
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">Real-time voting analytics and blockchain transparency</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 font-medium animate-pulse self-start">● Live</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>Ends: {election.endDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>{election.totalVotes.toLocaleString()} votes cast</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Shield className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span>{election.network}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="hover:bg-purple-50 hover:border-purple-200 w-full sm:w-auto"
                onClick={handleViewOnEtherscan}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Contract
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700/50">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Total Votes</p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">{election.totalVotes.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700/50">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Participation Rate</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-700 dark:text-green-300">{participationRate.toFixed(1)}%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700/50">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">Leading Candidate</p>
                <p className="text-sm sm:text-lg font-bold text-purple-700 dark:text-purple-300 break-words">{voteData[0].name}</p>
                <p className="text-sm text-purple-600 dark:text-purple-400">{voteData[0].percentage}%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-700/50">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">Blockchain Txns</p>
                <p className="text-2xl sm:text-3xl font-bold text-amber-700 dark:text-amber-300">{election.totalVotes}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Vote Distribution */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 dark:text-white">Vote Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={voteData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="votes" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Vote Share Pie Chart */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 dark:text-white">Vote Share</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={voteData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name.split(' ')[0]}: ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="votes"
                  >
                    {voteData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* Hourly Voting Pattern */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 dark:text-white">Voting Pattern (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={hourlyVotes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="votes" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Demographics Breakdown */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 dark:text-white">Voter Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demographicData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400 flex-1 min-w-0 pr-3">{item.demographic}</span>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-16 sm:w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blockchain Information */}
        <Card className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Blockchain Transparency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Smart Contract Address</p>
                <p className="text-sm font-mono bg-white dark:bg-gray-800 p-3 rounded border break-all">
                  {election.contractAddress}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Network</p>
                <p className="text-sm bg-white dark:bg-gray-800 p-3 rounded border">
                  {election.network}
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full sm:w-auto"
                onClick={handleViewOnEtherscan}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View on Etherscan
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full sm:w-auto"
                onClick={handleVerifyResults}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Verify Results
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VotingAnalytics;
