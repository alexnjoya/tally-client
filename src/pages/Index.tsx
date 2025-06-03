
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, BarChart3, Users, Vote, Zap, Globe, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Vote className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tally
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Pathway to Transparency</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/voter-login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Voter Login
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Admin Login
              </Button>
            </Link>
            <Link to="/app/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Hero */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-16 border border-white/20">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Vote className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Pathway to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Transparency
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Sustainable and transparent reporting for election in modern institutions.
                Our platform provides accountability and transparency for democratic institutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/app/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-lg">
                    Start →
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-12 py-6 text-lg border-2 bg-white/50 hover:bg-white/80 backdrop-blur-sm">
                  How it Works
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Tracking Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                A more effective way
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  to track progress
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Effortlessly manage your election campaigns and monitor real-time progress with our comprehensive tracking system.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500">tally-vote.app</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">245</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Total Votes</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Participation</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Active Ballots</div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h4>
                    <div className="space-y-3">
                      {[
                        { action: "New ballot created", time: "2 minutes ago", type: "success" },
                        { action: "Vote submitted", time: "5 minutes ago", type: "info" },
                        { action: "Candidate approved", time: "1 hour ago", type: "success" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className={`w-2 h-2 rounded-full ${item.type === 'success' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                          <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">{item.action}</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
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
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all border border-white/20">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Streamlined Management Section */}
          <div className="mt-32">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Streamlined for easy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                management
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Integrated web-platform</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  All-in-one solution for creating, managing, and monitoring elections from a single dashboard.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Global accessibility</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Access your election platform from anywhere in the world with our cloud-based infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 mt-32 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative">
              <h3 className="text-4xl font-bold mb-12">Expected Impact</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">100%</div>
                  <div className="text-blue-100 text-lg">Reduction in Election Disputes</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">30%</div>
                  <div className="text-blue-100 text-lg">Increase in Voter Turnout</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">99.99%</div>
                  <div className="text-blue-100 text-lg">System Uptime Target</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="relative">
                <h3 className="text-4xl font-bold mb-6">Sign up for free today</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of institutions already using Tally for transparent, secure elections.
                </p>
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-16 mt-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Vote className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Tally</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Revolutionary voting platform for transparent, secure elections.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Tally. Developed by Caleb Shalley & Alex Njoya - University of Ghana
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
