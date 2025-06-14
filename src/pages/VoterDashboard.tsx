import { useState } from "react";
import { Vote, Clock, CheckCircle, BarChart3, ExternalLink, Users, Calendar, Shield, Zap, TrendingUp } from "lucide-react";

const VoterDashboard = () => {
  const [elections] = useState([
    {
      id: 1,
      title: "Student Union Presidential Election 2024",
      description: "Choose the next president of the student union",
      status: "active",
      endDate: "2024-03-15",
      totalVotes: 1247,
      totalVoters: 2500,
      hasVoted: false,
      blockchainHash: "0x1a2b3c4d5e6f7890abcdef1234567890",
      deploymentNetwork: "Ethereum Sepolia"
    },
    {
      id: 2,
      title: "Department Representative Election",
      description: "Select your department representative",
      status: "active", 
      endDate: "2024-03-20",
      totalVotes: 89,
      totalVoters: 150,
      hasVoted: true,
      blockchainHash: "0x9876543210fedcba0987654321",
      deploymentNetwork: "Polygon"
    },
    {
      id: 3,
      title: "Faculty Senate Election",
      description: "Vote for faculty senate members",
      status: "upcoming",
      endDate: "2024-03-25",
      totalVotes: 0,
      totalVoters: 800,
      hasVoted: false,
      blockchainHash: null,
      deploymentNetwork: "Ethereum Sepolia"
    }
  ]);

  const handleLogout = () => {
    alert("Logout clicked");
  };

  const handleVote = (electionId) => {
    alert(`Vote clicked for election ${electionId}`);
  };

  const handleViewAnalytics = (electionId) => {
    alert(`Analytics clicked for election ${electionId}`);
  };

  const getStatusBadge = (status, hasVoted) => {
    if (hasVoted && status === "active") {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">✓ Voted</span>;
    }
    switch (status) {
      case "active":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 animate-pulse">● Live</span>;
      case "upcoming":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">⏳ Upcoming</span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">Closed</span>;
    }
  };

  const activeElections = elections.filter(e => e.status === "active").length;
  const participatedElections = elections.filter(e => e.hasVoted).length;
  const upcomingElections = elections.filter(e => e.status === "upcoming").length;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Enhanced Header */}
      <header className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Vote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tally Voter Portal
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <Shield className="h-3 w-3" />
                Voter ID: V2024001 • Secured by Blockchain
              </p>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-200 hover:text-red-600 text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Your Secure Voting Portal
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Participate in transparent, blockchain-secured elections and track your voting history
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 w-full">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300 rounded-xl">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">Active Elections</p>
                  <p className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-300">{activeElections}</p>
                  <p className="text-xs text-blue-500 mt-1">Ready to vote</p>
                </div>
                <div className="p-3 sm:p-4 bg-blue-600 rounded-2xl">
                  <Vote className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700/50 hover:shadow-lg transition-all duration-300 rounded-xl">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">Elections Participated</p>
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-700 dark:text-emerald-300">{participatedElections}</p>
                  <p className="text-xs text-emerald-500 mt-1">Successfully voted</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-600 rounded-2xl">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200 dark:border-amber-700/50 hover:shadow-lg transition-all duration-300 rounded-xl sm:col-span-2 lg:col-span-1">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">Upcoming Elections</p>
                  <p className="text-3xl sm:text-4xl font-bold text-amber-700 dark:text-amber-300">{upcomingElections}</p>
                  <p className="text-xs text-amber-500 mt-1">Scheduled soon</p>
                </div>
                <div className="p-3 sm:p-4 bg-amber-600 rounded-2xl">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elections Grid */}
        <div className="space-y-6 sm:space-y-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Available Elections</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Zap className="h-4 w-4" />
              Real-time updates
            </div>
          </div>
          
          <div className="grid gap-4 sm:gap-6 w-full">
            {elections.map((election) => (
              <div key={election.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                        <h4 className="text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors font-bold">
                          {election.title}
                        </h4>
                        {getStatusBadge(election.status, election.hasVoted)}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{election.description}</p>
                    </div>
                  </div>
                  
                  {/* Election Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>Ends: {election.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 text-green-500" />
                      <span>{election.totalVotes.toLocaleString()}/{election.totalVoters.toLocaleString()} voted</span>
                    </div>
                    {election.blockchainHash && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Shield className="h-4 w-4 text-purple-500" />
                        <span>{election.deploymentNetwork}</span>
                      </div>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Participation Rate</span>
                      <span className="font-semibold">{Math.round((election.totalVotes / election.totalVoters) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${(election.totalVotes / election.totalVoters) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {election.status === "active" && (
                      <>
                        <button 
                          onClick={() => handleViewAnalytics(election.id)}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 text-sm transition-colors flex items-center gap-2"
                        >
                          <TrendingUp className="h-4 w-4" />
                          Analytics
                        </button>
                        
                        {election.blockchainHash && (
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 text-sm transition-colors flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Blockchain
                          </button>
                        )}
                        
                        {!election.hasVoted && (
                          <button 
                            onClick={() => handleVote(election.id)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg text-sm flex items-center gap-2"
                          >
                            <Vote className="h-4 w-4" />
                            Cast Your Vote
                          </button>
                        )}
                        
                        {election.hasVoted && (
                          <button 
                            className="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 cursor-default rounded-lg text-sm flex items-center gap-2"
                            disabled
                          >
                            <CheckCircle className="h-4 w-4" />
                            Vote Recorded
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Voting History */}
        <div className="mt-12 sm:mt-16 w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Recent Activity</h3>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg rounded-xl">
            <div className="p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <p className="font-semibold text-gray-900 dark:text-white">Department Representative Election</p>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">Vote successfully recorded on blockchain</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Shield className="h-3 w-3 flex-shrink-0" />
                      <span className="truncate">Transaction: 0x9876...4321</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <p className="font-semibold text-gray-900 dark:text-white">Student Union Presidential Election 2024</p>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Election deployed to blockchain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterDashboard;