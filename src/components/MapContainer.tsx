import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation, Search } from "lucide-react";

const MapContainer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Route Planning Panel */}
      <div className="lg:col-span-1">
        <Card className="dashboard-shadow border-card-border h-full">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center">
              <Search className="h-5 w-5 text-primary mr-2" />
              Route Planner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Departure Input */}
            <div className="space-y-2">
              <Label htmlFor="departure" className="text-sm font-medium text-foreground">
                From
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="departure"
                  placeholder="Enter departure location"
                  className="pl-10 border-card-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Destination Input */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-medium text-foreground">
                To
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="destination"
                  placeholder="Enter destination"
                  className="pl-10 border-card-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Search Button */}
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Search className="h-4 w-4 mr-2" />
              Find Route
            </Button>

            {/* Quick Suggestions */}
            <div className="border-t border-card-border pt-4">
              <p className="text-sm font-medium text-foreground mb-3">Popular Destinations</p>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  <MapPin className="h-3 w-3 mr-2" />
                  Central Station
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  <MapPin className="h-3 w-3 mr-2" />
                  University Campus
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  <MapPin className="h-3 w-3 mr-2" />
                  Shopping Mall
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  <MapPin className="h-3 w-3 mr-2" />
                  Medical Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Area */}
      <div className="lg:col-span-2">
        <Card className="dashboard-shadow border-card-border h-[500px] lg:h-full">
          <CardContent className="p-0 h-full">
            <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center border border-card-border">
              {/* Map Placeholder */}
              <div className="text-center">
                <Navigation className="h-12 w-12 text-primary/60 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Interactive Map</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Real-time bus locations and routes will be displayed here using OpenStreetMap integration
                </p>
              </div>

              {/* Mock Bus Markers */}
              <div className="absolute top-20 left-16">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground shadow-lg animate-pulse"></div>
              </div>
              <div className="absolute bottom-32 right-24">
                <div className="w-4 h-4 bg-warning rounded-full border-2 border-primary-foreground shadow-lg"></div>
              </div>
              <div className="absolute top-32 right-16">
                <div className="w-4 h-4 bg-success rounded-full border-2 border-primary-foreground shadow-lg"></div>
              </div>

              {/* Mock Route Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 60 80 Q 200 120 300 200 T 450 350"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                  strokeOpacity="0.4"
                  strokeDasharray="5,5"
                />
                <path
                  d="M 100 400 Q 250 350 380 280 T 500 150"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                  strokeOpacity="0.4"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MapContainer;