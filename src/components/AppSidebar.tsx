
import { Home, Settings, Vote, Eye, Users, Send } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const items = [
  { title: "Home", url: "/app/dashboard", icon: Home },
  { title: "Settings", url: "/app/settings", icon: Settings },
  { title: "Ballot", url: "/app/ballot", icon: Vote },
  { title: "Preview", url: "/app/preview", icon: Eye },
  { title: "Add-ons", url: "/app/addons", icon: Users },
  { title: "Launch", url: "/app/launch", icon: Send },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="w-16 bg-black dark:bg-[#0f0f0f] flex flex-col items-center py-4 space-y-6">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded opacity-80"></div>
      </div>
      
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors group relative ${
              isActive(item.url)
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            title={item.title}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.title}</span>
            
            {/* Tooltip for better UX */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
