import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, MapPin } from "lucide-react";

const busData = [
  {
    id: "402",
    route: "Route A - Downtown Express",
    location: "Central Station",
    speed: "28 km/h",
    status: "on-time",
    eta: "4 min",
    passengers: "23/45",
    lastUpdate: "30s ago"
  },
  {
    id: "156",
    route: "Route B - University Line",
    location: "Campus Junction",
    speed: "22 km/h",
    status: "delayed",
    eta: "8 min",
    passengers: "31/45",
    lastUpdate: "1m ago"
  },
  {
    id: "789",
    route: "Route C - Hospital Connect",
    location: "Medical Center",
    speed: "35 km/h",
    status: "on-time",
    eta: "2 min",
    passengers: "18/45",
    lastUpdate: "15s ago"
  },
  {
    id: "234",
    route: "Route D - Shopping District",
    location: "Mall Entrance",
    speed: "15 km/h",
    status: "delayed",
    eta: "12 min",
    passengers: "42/45",
    lastUpdate: "45s ago"
  },
  {
    id: "567",
    route: "Route E - Residential Loop",
    location: "Oak Street",
    speed: "30 km/h",
    status: "on-time",
    eta: "6 min",
    passengers: "19/45",
    lastUpdate: "20s ago"
  },
  {
    id: "890",
    route: "Route F - Industrial Zone",
    location: "Factory District",
    speed: "0 km/h",
    status: "stopped",
    eta: "N/A",
    passengers: "8/45",
    lastUpdate: "2m ago"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "on-time":
      return "bg-success/10 text-success border-success/20";
    case "delayed":
      return "bg-warning/10 text-warning border-warning/20";
    case "stopped":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "on-time":
      return "On Time";
    case "delayed":
      return "Delayed";
    case "stopped":
      return "Stopped";
    default:
      return "Unknown";
  }
};

const BusTable = () => {
  return (
    <Card className="dashboard-shadow border-card-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <MapPin className="h-5 w-5 text-primary mr-2" />
          Fleet Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-card-border">
                <TableHead className="font-medium text-muted-foreground">Bus ID</TableHead>
                <TableHead className="font-medium text-muted-foreground">Route</TableHead>
                <TableHead className="font-medium text-muted-foreground">Location</TableHead>
                <TableHead className="font-medium text-muted-foreground">Speed</TableHead>
                <TableHead className="font-medium text-muted-foreground">Status</TableHead>
                <TableHead className="font-medium text-muted-foreground">ETA</TableHead>
                <TableHead className="font-medium text-muted-foreground">Passengers</TableHead>
                <TableHead className="font-medium text-muted-foreground">Updated</TableHead>
                <TableHead className="font-medium text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {busData.map((bus) => (
                <TableRow key={bus.id} className="border-card-border hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium text-foreground">
                    #{bus.id}
                  </TableCell>
                  <TableCell className="text-sm text-foreground max-w-40">
                    {bus.route}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {bus.location}
                  </TableCell>
                  <TableCell className="text-sm text-foreground font-medium">
                    {bus.speed}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(bus.status)}>
                      {getStatusText(bus.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-foreground font-medium">
                    {bus.eta}
                  </TableCell>
                  <TableCell className="text-sm text-foreground">
                    {bus.passengers}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {bus.lastUpdate}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusTable;