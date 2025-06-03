
import { Outlet } from "react-router-dom";
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
import { Settings, User, LogOut, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-end px-6">
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-semibold">
                      {unreadCount}
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" align="end">
                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-black dark:text-white">Notifications</h4>
                </div>
                {notifications.map((notif) => (
                  <DropdownMenuItem 
                    key={notif.id}
                    onClick={() => markAsRead(notif.id)}
                    className={`p-3 cursor-pointer ${!notif.read ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm text-black dark:text-white">{notif.message}</p>
                      <p className="text-xs text-gray-500">{notif.time}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 ring-2 ring-blue-500/20">
                    <AvatarImage src="/lovable-uploads/267f4da1-9805-49c0-a603-45b49ba1034b.png" alt="Avatar" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-black dark:text-white">John Doe</p>
                    <p className="w-[200px] truncate text-sm text-gray-600 dark:text-gray-400">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem onClick={handleSettings} className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
