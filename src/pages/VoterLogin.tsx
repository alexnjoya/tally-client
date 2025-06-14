import { useState } from "react";
import { Vote, Key, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";


const VoterLogin = () => {
  const [voterID, setVoterID] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    navigate("/voter/dashboard");
      console.log("Login successful!");
    }, 1000);
  };

  return (
    <>
      {/* Modern Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen w-full flex"
        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
      >
        {/* Left side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="w-full max-w-md">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-xl shadow-xl p-6 sm:p-8">
              <div className="text-center space-y-6 pb-8">
                <div className="inline-flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Vote className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2 tracking-tight leading-tight">
                    Voter Access Portal
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-medium leading-relaxed tracking-wide">
                    Secure access to your voting dashboard and ongoing elections.
                  </p>
                </div>
              </div>
              <div className="px-0 pb-0">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="voterID" className="text-black dark:text-white font-semibold text-sm tracking-wide block">
                      Voter ID
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="voterID"
                        type="text"
                        placeholder="Enter your voter ID"
                        value={voterID}
                        onChange={(e) => setVoterID(e.target.value)}
                        className="pl-12 h-11 sm:h-12 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base font-medium tracking-wide w-full outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="accessKey" className="text-black dark:text-white font-semibold text-sm tracking-wide block">
                      Access Key
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="accessKey"
                        type="password"
                        placeholder="Enter your access key"
                        value={accessKey}
                        onChange={(e) => setAccessKey(e.target.value)}
                        className="pl-12 h-11 sm:h-12 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base font-medium tracking-wide w-full outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide">Remember my credentials</span>
                    </label>
                    <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors text-left sm:text-right tracking-wide">
                      Need help?
                    </button>
                  </div>

                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] text-sm sm:text-base tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="font-semibold tracking-wide">Accessing Portal...</span>
                      </div>
                    ) : (
                      "Access Voting Portal"
                    )}
                  </button>

                  <div className="text-center pt-4">
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-medium tracking-wide">Don't have your voting credentials? </span>
                    <button type="button" className="text-blue-600 hover:text-blue-700 font-bold transition-colors text-sm tracking-wide">
                      Contact Administrator
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Background Image - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-gray-900 to-black">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ecosheane/image/upload/v1749626204/21935215_6379082_k1jkqi.jpg')`
            }}
          >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/80 to-blue-900/80"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-start items-start p-12 text-white">
            <div className="max-w-lg text-start space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                  Secure Digital Voting
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed font-medium tracking-wide">
                  Experience the future of democratic participation with our encrypted, transparent, and auditable voting platform.
                </p>
              </div>
              
              {/* Feature highlights */}
              <div className="space-y-4 mt-12">
                <div className="flex items-center space-x-3 text-blue-100">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium tracking-wide">End-to-end encryption technology</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-medium tracking-wide">Verified voter authentication</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="font-medium tracking-wide">Transparent audit trails</span>
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
    </>
  );
};

export default VoterLogin;