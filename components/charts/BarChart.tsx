import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from 'framer-motion'


type SalesData = {
    month: string;
    value: number;
};

export default function SalesBarChart() {
    const [sales, setSales] = useState<SalesData[]>([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await fetch("/api/visitors");
                const result = await response.json();
                setSales(result.sales);
            } catch (error) {
                console.error("Error fetching sales data:", error);
            }
        };
        fetchSales();
    }, []);


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-4 rounded-xl shadow w-full"
        >
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Monthly Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sales} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value"
                        fill="#f7ad19"
                    />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
