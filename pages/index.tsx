import DashboardLayout from "@/layouts/DashboardLayout";
import Metrics from "@/components/Metrics";
import LineCharts from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import TrafficPieChart from "@/components/charts/TrafficPieChart";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer);
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <DashboardLayout>
      {/* Top Section: Metrics + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Metrics cards: span 2 columns on large screens */}
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Metrics />
          <BarChart />
        </div>
      </div>

      {/* Bottom Section: Line & Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <LineCharts />
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <TrafficPieChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
