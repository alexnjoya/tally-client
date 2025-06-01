
import { useState } from "react";
import { Home, Settings, Vote, CheckCircle, Users, MessageSquare, Trash2 } from "lucide-react";
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/app/dashboard", icon: Home },
  { title: "Settings", url: "/app/settings", icon: Settings },
  { title: "Ballot", url: "/app/ballot", icon: Vote },
  { title: "Preview", url: "/app/preview", icon: CheckCircle },
  { title: "Add-ons", url: "/app/addons", icon: Users },
  { title: "Launch", url: "/app/launch", icon: MessageSquare },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100 text-gray-700";

  return (
    <Sidebar
      className={`${collapsed ? "w-14" : "w-60"} bg-white border-r border-gray-200`}
      collapsible
    >
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
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
