
import { useState } from "react";
import { User, Settings, LogOut, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback className="bg-blue-100 text-blue-600">
            CS
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 bg-white border border-gray-200 shadow-lg z-50" 
        align="end"
        sideOffset={8}
      >
        <DropdownMenuLabel className="px-3 py-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">Caleb Shalley</p>
            <p className="text-xs text-gray-500">caleb.shalley@student.ug.edu.gh</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/app/settings" className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-50">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/app/settings" className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-50">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-50 text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
