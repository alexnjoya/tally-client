import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // navigate("/app/dashboard");
      console.log("Login successful!");
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-md">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm  border-0">
            <CardHeader className="text-center space-y-6 pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">Welcome Back</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">Access your account and manage your digital assets</p>
              </div>
            </CardHeader>
            <CardContent className="px-6 sm:px-8 pb-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black dark:text-white font-medium text-sm">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-11 sm:h-12 bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-black dark:text-white font-medium text-sm">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 h-11 sm:h-12 bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Keep me signed in</span>
                  </label>
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors text-left sm:text-right">
                    Reset password
                  </button>
                </div>

                <Button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Authenticating...</span>
                    </div>
                  ) : (
                    "Sign In to Account"
                  )}
                </Button>

                <div className="text-center pt-4">
                  <Link to="/Register">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">New to our platform? </span>
                  <button type="button" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm">
                    Create Account
                  </button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right side - Background Image - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-gray-900 to-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2069&auto=format&fit=crop')`
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-white">
          <div className="max-w-lg text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Streamline your digital asset management with our advanced platform designed for modern financial institutions and enterprises.
              </p>
            </div>
            
            {/* Feature highlights */}
            <div className="space-y-4 mt-12">
              <div className="flex items-center space-x-3 text-blue-100">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Bank-level security infrastructure</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Multi-factor authentication protocols</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span>Real-time compliance monitoring</span>
              </div>
            </div>
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 left-20 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Login;