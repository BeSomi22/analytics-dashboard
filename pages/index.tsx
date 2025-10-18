// import DashboardLayout from "@/layouts/DashboardLayout";
// import Metrics from "@/components/Metrics";
// import LineCharts from "@/components/charts/LineChart";
// import BarChart from "@/components/charts/BarChart";
// import TrafficPieChart from "@/components/charts/TrafficPieChart"


// const Dashboard = () => {
//   return (
//     <DashboardLayout >
//       <Metrics />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <LineCharts />
//         <BarChart />
//         <TrafficPieChart />
//       </div>
//     </DashboardLayout>
//   )
// }

// export default Dashboard;
import DashboardLayout from "@/layouts/DashboardLayout";
import Metrics from "@/components/Metrics";
import LineCharts from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import TrafficPieChart from "@/components/charts/TrafficPieChart";

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Top Section: Metrics + Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Metrics cards: span 2 columns on large screens */}
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Metrics />
          <BarChart />
        </div>

        {/* Traffic Pie Chart */}
        {/* <div className="bg-white rounded-xl shadow p-4">
          <TrafficPieChart />
        </div> */}
      </div>

      {/* Bottom Section: Line & Bar Charts */}
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
