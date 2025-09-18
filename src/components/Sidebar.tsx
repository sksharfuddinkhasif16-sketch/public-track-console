import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Bus, 
  Users, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Bus, label: "Fleet Status", active: false },
  { icon: Users, label: "Passenger Info", active: false },
  { icon: AlertTriangle, label: "Alerts", active: false },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "relative bg-nav text-nav-foreground transition-all duration-300 border-r border-card-border",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute -right-3 top-6 h-6 w-6 rounded-full border border-card-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 z-10"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start text-left transition-all duration-200",
              collapsed ? "px-2" : "px-3",
              item.active 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                : "text-nav-foreground/80 hover:text-nav-foreground hover:bg-nav-foreground/5"
            )}
          >
            <item.icon className={cn("h-4 w-4", collapsed ? "" : "mr-3")} />
            {!collapsed && (
              <span className="font-medium">{item.label}</span>
            )}
          </Button>
        ))}
      </nav>

      {/* Status Indicator */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-nav-foreground/5 rounded-lg p-3 border border-nav-foreground/10">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs text-nav-foreground/70">System Online</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;