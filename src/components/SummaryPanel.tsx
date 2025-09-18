import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Route, Activity } from "lucide-react";

const SummaryPanel = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {/* Active Buses */}
        <Card className="dashboard-shadow border-card-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-accent-theme/5">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Buses
            </CardTitle>
            <Activity className="h-4 w-4 text-accent-theme" />
          </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">24</div>
          <div className="text-xs text-success flex items-center mt-1">
            <div className="w-2 h-2 bg-success rounded-full mr-1"></div>
            All operational
          </div>
        </CardContent>
      </Card>

      {/* On-Time Performance */}
        <Card className="dashboard-shadow border-card-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-accent-theme/5">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              On-Time Rate
            </CardTitle>
            <Clock className="h-4 w-4 text-accent-theme" />
          </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">87%</div>
          <div className="flex items-center space-x-1 mt-1">
            <Badge variant="secondary" className="text-xs bg-success/10 text-success border-success/20">
              +3% today
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Total Routes */}
      <Card className="dashboard-shadow border-card-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Active Routes
          </CardTitle>
          <Route className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">12</div>
          <div className="text-xs text-muted-foreground mt-1">
            3 high-demand routes
          </div>
        </CardContent>
      </Card>

      {/* Average Speed */}
      <Card className="dashboard-shadow border-card-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Avg Speed
          </CardTitle>
          <MapPin className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">32</div>
          <div className="text-xs text-muted-foreground mt-1">
            km/h across fleet
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryPanel;