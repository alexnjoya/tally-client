
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, BarChart3, Users, Vote, Zap, Globe, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Vote className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tally
              </h1>
              <p className="text-xs text-gray-500 -mt-1 hidden sm:block">Pathway to Transparency</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600 text-sm sm:text-base px-2 sm:px-4">
                Admin Login
              </Button>
            </Link>
            <Link to="/app/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base px-3 sm:px-4 lg:px-6">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="text-center max-w-7xl mx-auto">
          {/* Main Hero */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Vote className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Pathway to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Transparency
                </span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                Sustainable and transparent reporting for election in modern institutions.
                Our platform provides accountability and transparency for democratic institutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
                <Link to="/app/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                    Start →
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg border-2 bg-white/50 hover:bg-white/80 backdrop-blur-sm w-full sm:w-auto">
                  How it Works
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Tracking Section */}
          <div className="mt-16 sm:mt-24 lg:mt-32">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                A more effective way
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  to track progress
                </span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Effortlessly manage your election campaigns and monitor real-time progress with our comprehensive tracking system.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
                <div className="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">tally-vote.app</div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">245</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Votes</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                      <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">89%</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Participation</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 sm:p-6 rounded-lg sm:rounded-xl sm:col-span-2 lg:col-span-1">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">12</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Ballots</div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Recent Activity</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { action: "New ballot created", time: "2 minutes ago", type: "success" },
                        { action: "Vote submitted", time: "5 minutes ago", type: "info" },
                        { action: "Candidate approved", time: "1 hour ago", type: "success" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${item.type === 'success' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                          <div className="flex-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">{item.action}</div>
                          <div className="text-xs text-gray-500">{item.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24 lg:mt-32">
            {[
              {
                icon: Shield,
                title: "Tamper-Proof Security",
                description: "Blockchain-based vote recording ensures immutable and verifiable results",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: CheckCircle,
                title: "Automatic Verification",
                description: "Integrated dues verification for seamless voter eligibility checks",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: BarChart3,
                title: "Real-time Monitoring",
                description: "Public block explorer for transparent election tracking",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Users,
                title: "User-Friendly Interface",
                description: "Intuitive design for both voters and administrators",
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:scale-105 transition-all border border-white/20">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Streamlined Management Section */}
          <div className="mt-16 sm:mt-24 lg:mt-32">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Streamlined for easy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                management
              </span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Integrated web-platform</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  All-in-one solution for creating, managing, and monitoring elections from a single dashboard.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Globe className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Global accessibility</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Access your election platform from anywhere in the world with our cloud-based infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 mt-16 sm:mt-24 lg:mt-32 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">Expected Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">100%</div>
                  <div className="text-blue-100 text-sm sm:text-base lg:text-lg">Reduction in Election Disputes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">30%</div>
                  <div className="text-blue-100 text-sm sm:text-base lg:text-lg">Increase in Voter Turnout</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">99.99%</div>
                  <div className="text-blue-100 text-sm sm:text-base lg:text-lg">System Uptime Target</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Sign up for free today</h3>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Join thousands of institutions already using Tally for transparent, secure elections.
                </p>
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 sm:py-16 mt-16 sm:mt-24 lg:mt-32">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Vote className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Tally</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Revolutionary voting platform for transparent, secure elections.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Product</h5>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h5>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Support</h5>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center max-w-7xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              © 2024 Tally. Developed by Caleb Shalley & Alex Njoya - University of Ghana
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
