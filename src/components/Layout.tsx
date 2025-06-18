import { Outlet, NavLink } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, User, LogOut, Bell, Menu, X, Home, Vote, Eye, Users, Send } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New election created", time: "2 minutes ago", read: false },
    { id: 2, message: "Voter registration approved", time: "1 hour ago", read: false },
    { id: 3, message: "Election results published", time: "3 hours ago", read: true }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSettings = () => {
    navigate("/app/settings");
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const mobileNavItems = [
    { title: "Overview", url: "/app/overview", icon: Home },
    { title: "Ballots", url: "/app/ballot", icon: Vote },
    { title: "Voters", url: "/app/voter", icon: User },
    { title: "Preview", url: "/app/preview", icon: Eye },
    { title: "Add-ons", url: "/app/addons", icon: Users },
    { title: "Launch", url: "/app/launch", icon: Send },
    { title: "Settings", url: "/app/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar - Fixed */}
      <div className="hidden md:block md:fixed md:inset-y-0 md:z-50">
        <AppSidebar />
      </div>
      
      {/* Main Content Area - With left margin to account for fixed sidebar */}
      <div className="flex-1 md:ml-16 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 sm:h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 sm:px-6 fixed top-0 right-0 left-0 md:left-16 z-40">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </Button>

          {/* Desktop: Empty space to push icons to the right */}
          <div className="hidden md:block flex-1"></div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* Mobile Menu - Full height and width */}
              <div className="absolute inset-0 bg-gray-900 dark:bg-gray-950">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <NavLink 
                      to="/app/dashboard"
                      className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-4 h-4 bg-white rounded opacity-80"></div>
                    </NavLink>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-1 text-gray-400 hover:text-white"
                      onClick={toggleMobileMenu}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Navigation Items */}
                  <div className="flex-1 p-4">
                    <nav className="space-y-2">
                      {mobileNavItems.map((item) => (
                        <button
                          key={item.title}
                          onClick={() => {
                            navigate(item.url);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors ${
                            isActive(item.url)
                              ? "bg-blue-600 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="font-medium">{item.title}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                  
                  {/* Footer */}
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/lovable-uploads/267f4da1-9805-49c0-a603-45b49ba1034b.png" alt="Avatar" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold text-xs">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-white">John Doe</p>
                        <p className="text-xs text-gray-400">john.doe@example.com</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          handleSettings();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-2 px-3 py-2 text-left text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <Settings className="h-4 w-4" />
                        <span className="text-sm">Settings</span>
                      </button>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-2 px-3 py-2 text-left text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm">Log out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications and Profile - Always on the right */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative p-2 h-8 w-8 sm:h-10 sm:w-10">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-semibold">
                      {unreadCount}
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 sm:w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" align="end">
                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">Notifications</h4>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notif) => (
                    <DropdownMenuItem 
                      key={notif.id}
                      onClick={() => markAsRead(notif.id)}
                      className={`p-3 cursor-pointer ${!notif.read ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      <div className="flex flex-col space-y-1 w-full">
                        <p className="text-sm text-black dark:text-white">{notif.message}</p>
                        <p className="text-xs text-gray-500">{notif.time}</p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full p-0 border-2 border-transparent hover:border-blue-500/20 transition-colors">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                    <AvatarImage src="/lovable-uploads/267f4da1-9805-49c0-a603-45b49ba1034b.png" alt="Avatar" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 sm:w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-black dark:text-white text-sm">John Doe</p>
                    <p className="w-[180px] sm:w-[200px] truncate text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem onClick={handleSettings} className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer text-sm">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content - Scrollable */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto pt-20 sm:pt-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
