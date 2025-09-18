import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";

const TopNavigation = () => {
  return (
    <header className="h-16 border-b border-card-border bg-card/50 backdrop-blur-sm dashboard-shadow sticky top-0 z-50">
      <div className="flex h-full items-center justify-between px-6">
        {/* Application Name */}
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <div className="h-4 w-4 bg-primary-foreground rounded-sm"></div>
          </div>
          <h1 className="text-xl font-semibold text-foreground">
            Smart Bus Tracker
          </h1>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground">Transportation Dept.</p>
          </div>
          
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10 text-primary text-sm">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <LogOut className="h-4 w-4" />
            <span className="ml-2 hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;