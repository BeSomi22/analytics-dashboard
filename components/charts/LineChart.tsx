import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

type VisitorData = {
    month: string;
    value: number;
};

export default function VisitorsAreaChart() {
    const [data, setData] = useState<VisitorData[]>([]);

    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const response = await fetch("/api/visitors");
                const result = await response.json();
                setData(result.visitors);
            } catch (error) {
                console.error("Error fetching API data:", error);
            }
        };
        fetchVisitors();
    }, []);

    // if (!data.length)
    //     return <div className="text-red-500 text-center">No data available</div>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-4 rounded-xl shadow w-full"
        >
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Visitors Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#429ebd"
                        fill="rgba(66,158,189,0.2)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
