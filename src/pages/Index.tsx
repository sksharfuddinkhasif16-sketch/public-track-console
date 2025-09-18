import TopNavigation from "@/components/TopNavigation";
import Sidebar from "@/components/Sidebar";
import SummaryPanel from "@/components/SummaryPanel";
import MapContainer from "@/components/MapContainer";
import BusTable from "@/components/BusTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 p-6 overflow-auto">
          {/* Summary Cards */}
          <SummaryPanel />
          
          {/* Map and Bus Info */}
          <MapContainer />
          
          {/* Bus Fleet Table */}
          <div className="mt-6">
            <BusTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
