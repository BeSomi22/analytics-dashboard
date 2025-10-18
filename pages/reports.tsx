import DashboardLayout from "@/layouts/DashboardLayout";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import TrafficPieChart from "@/components/charts/TrafficPieChart";
import { motion } from "framer-motion";

const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Purchase', amount: '$129.99', time: '2 hours ago', status: 'Completed' },
    { id: 2, user: 'Jane Smith', action: 'Sign Up', amount: 'Free', time: '4 hours ago', status: 'Pending' },
    { id: 3, user: 'Mike Johnson', action: 'Refund', amount: '$49.99', time: '1 day ago', status: 'Completed' },
    { id: 4, user: 'Sarah Williams', action: 'Upgrade', amount: '$199.99', time: '2 days ago', status: 'Completed' },
];

export default function Reports() {
    return (
        <DashboardLayout>
            <div className="min-h-screen flex flex-col gap-8 pb-8">

                {/* Filters Header */}
                <motion.section initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }} className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-2xl font-bold text-[#053f5c]">Reports</h1>
                    <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                        <input
                            type="month"
                            className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-60 focus:outline-none focus:ring-2 focus:ring-[#429ebd]"
                        />
                        <button className="bg-[#429ebd] text-white px-5 py-2 rounded-lg hover:bg-[#053f5c] transition-all duration-300">
                            Apply Filter
                        </button>
                    </div>
                </motion.section>

                {/* Recent Activity */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow p-6 text-[#053f5c]"
                >
                    <h3 className="text-xl font-semibold mb-5 flex items-center justify-between">
                        Recent Activity
                        <span className="text-sm font-normal text-[#f7ad19]">Last updates</span>
                    </h3>

                    <div className="space-y-4">
                        {recentActivity.map((activity, idx) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center justify-between p-4 bg-[#074b72] rounded-lg hover:bg-[#09577f] transition"
                            >
                                <div className="flex-1">
                                    <p className="text-white font-medium">{activity.user}</p>
                                    <p className="text-sm text-gray-300">{activity.action}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[#f7ad19] font-semibold">{activity.amount}</p>
                                    <p className="text-xs text-gray-400">{activity.time}</p>
                                </div>
                                <span
                                    className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold ${activity.status === 'Completed'
                                        ? 'bg-green-500/20 text-green-400'
                                        : 'bg-yellow-500/20 text-yellow-400'
                                        }`}
                                >
                                    {activity.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Charts Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
                    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition-shadow min-h-[320px]">
                        <LineChart />
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition-shadow min-h-[320px]">
                        <BarChart />
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition-shadow min-h-[320px]">
                        <TrafficPieChart />
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
