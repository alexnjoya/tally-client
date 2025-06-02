
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { ProfileDropdown } from "./ProfileDropdown";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background transition-colors duration-300">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 sm:h-16 bg-card border-b border-border flex items-center justify-between px-4 sm:px-6 shadow-sm backdrop-blur-sm bg-card/80 sticky top-0 z-40">
          <div className="flex items-center gap-4 min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold text-foreground truncate">
              Dashboard
            </h1>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="h-8 w-8 sm:h-9 sm:w-9 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
            <ProfileDropdown />
          </div>
        </header>
        
        <main className="flex-1 overflow-auto scrollbar-thin scrollbar-track-transparent dark:scrollbar-dark">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
