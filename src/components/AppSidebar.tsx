
import { Home, Settings, Vote, Eye, Users, Send, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Overview", url: "/app/overview", icon: Home },
  { title: "Ballots", url: "/app/ballot", icon: Vote },
  { title: "Voters", url: "/app/voter", icon: User },
  { title: "Preview", url: "/app/preview", icon: Eye },
  { title: "Add-ons", url: "/app/addons", icon: Users },
  { title: "Launch", url: "/app/launch", icon: Send },
  { title: "Settings", url: "/app/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { state } = useSidebar();

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="bg-gray-900 dark:bg-gray-950 text-white" collapsible="icon">
      <SidebarHeader className="p-4">
        <NavLink 
          to="/app/dashboard"
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded opacity-80"></div>
          </div>
          {state === "expanded" && (
            <span className="text-lg font-bold text-white">Tally</span>
          )}
        </NavLink>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider">
            {state === "expanded" ? "Navigation" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={`${
                      isActive(item.url)
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
                    } transition-colors`}
                    tooltip={state === "collapsed" ? item.title : undefined}
                  >
                    <NavLink to={item.url} className="flex items-center space-x-3 w-full">
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {state === "expanded" && (
                        <span className="text-sm font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
