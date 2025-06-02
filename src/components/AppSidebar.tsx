
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
    <div className="w-14 sm:w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-3 sm:py-4 space-y-4 sm:space-y-6 flex-shrink-0">
      {/* Logo */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-foreground rounded opacity-90"></div>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex flex-col space-y-2 sm:space-y-3">
        {items.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={`group relative flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-200 ${
              isActive(item.url)
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
            }`}
            title={item.title}
          >
            <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-[9px] sm:text-[10px] font-medium mt-0.5 leading-none">
              {item.title}
            </span>
            
            {/* Enhanced Tooltip */}
            <div className="absolute left-full ml-3 px-2 py-1.5 bg-popover border border-border text-popover-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
              {item.title}
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-popover"></div>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
