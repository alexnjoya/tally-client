
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
    <div className="w-20 bg-black flex flex-col items-center py-6 space-y-8">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded opacity-80"></div>
      </div>
      
      <div className="flex flex-col space-y-6">
        {items.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors ${
              isActive(item.url)
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs font-medium">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
