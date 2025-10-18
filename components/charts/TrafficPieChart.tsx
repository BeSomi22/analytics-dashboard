import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from 'framer-motion'

type TrafficData = {
    source: string;
    value: number;
};

export default function TrafficPieChart() {
    const [traffic, setTraffic] = useState<TrafficData[]>([]);

    const COLORS = ["#429ebd", "#f7ad19", "#053f5c", "#9fe7f5"];


    useEffect(() => {
        const fetchTraffic = async () => {
            try {
                const response = await fetch("/api/visitors");
                const result = await response.json();
                setTraffic(result.traffic);
            } catch (error) {
                console.error("Error fetching traffic:", error);
            }
        };
        fetchTraffic();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-xl shadow w-full max-w-md mx-auto"
        >
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                Traffic Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={traffic}
                        dataKey="value"
                        nameKey="source"
                        cx="50%"
                        cy="50%"
                        innerRadius={60} // makes it a doughnut
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={3}
                        label={(entry: any) => {
                            const percent = entry?.percent as number; // cast to number
                            return `${Math.round(percent * 100)}%`;
                        }}
                    >
                        {traffic.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
