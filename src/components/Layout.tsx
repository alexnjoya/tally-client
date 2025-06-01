
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm">
          <SidebarTrigger className="mr-4" />
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Tally</h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
