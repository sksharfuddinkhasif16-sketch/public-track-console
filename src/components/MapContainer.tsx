import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock } from "lucide-react";

const MapContainer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Selected Bus Info Panel */}
      <div className="lg:col-span-1">
        <Card className="dashboard-shadow border-card-border h-full">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></div>
              Bus #402
            </CardTitle>
            <Badge variant="secondary" className="w-fit bg-success/10 text-success border-success/20">
              Route A - Downtown Express
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Status */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge className="bg-success/10 text-success border-success/20">
                  On Time
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Current Speed</span>
                <span className="font-medium">28 km/h</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Passengers</span>
                <span className="font-medium">23/45</span>
              </div>
            </div>

            {/* Next Stop Info */}
            <div className="border-t border-card-border pt-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Next Stop</p>
                  <p className="text-xs text-muted-foreground">Central Station</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mt-3">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">ETA: 4 minutes</p>
                  <p className="text-xs text-muted-foreground">Distance: 1.2 km</p>
                </div>
              </div>
            </div>

            {/* Route Progress */}
            <div className="border-t border-card-border pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Route Progress</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
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