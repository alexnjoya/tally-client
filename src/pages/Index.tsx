
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, BarChart3, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tally
            </h1>
          </div>
          <Link to="/app/dashboard">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Launch App
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Blockchain-Based Voting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              for Academic Institutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Revolutionary voting platform leveraging blockchain technology to deliver 
            unprecedented security, transparency, and efficiency for university elections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/app/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
              Learn More
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tamper-Proof Security</h3>
              <p className="text-gray-600">Blockchain-based vote recording ensures immutable and verifiable results</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic Verification</h3>
              <p className="text-gray-600">Integrated dues verification for seamless voter eligibility checks</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">Public block explorer for transparent election tracking</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Friendly Interface</h3>
              <p className="text-gray-600">Intuitive design for both voters and administrators</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 mt-20 text-white">
            <h3 className="text-3xl font-bold mb-8">Expected Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Reduction in Election Disputes</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="text-blue-100">Increase in Voter Turnout</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <div className="text-blue-100">System Uptime Target</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 Tally. Developed by Caleb Shalley & Alex Njoya - University of Ghana
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
