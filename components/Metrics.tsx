import { useEffect, useState } from "react";
import { Users, DollarSign, BarChart3, TrendingUp } from "lucide-react";

type MetricsData = {
    totalVisitors: number;
    totalSales: number;
    avgVisitors: number;
    growthRate: string;
};

export default function Metrics() {
    const [metrics, setMetrics] = useState<MetricsData | null>(null);
    const [animatedMetrics, setAnimatedMetrics] = useState<MetricsData | null>(null);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await fetch("/api/visitors");
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                setMetrics(result.metrics);
            } catch (error) {
                console.error("Error fetching metrics:", error);
            }
        };

        fetchMetrics();
    }, []);

    useEffect(() => {
        if (!metrics) return;

        const duration = 1200;
        const frames = 60;
        const intervalTime = duration / frames;
        let currentFrame = 0;

        const growthValue = parseFloat(metrics.growthRate.replace("%", "")) || 0;

        const timer = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / frames;

            setAnimatedMetrics({
                totalVisitors: Math.floor(metrics.totalVisitors * progress),
                totalSales: Math.floor(metrics.totalSales * progress),
                avgVisitors: Math.floor(metrics.avgVisitors * progress),
                growthRate: `${Math.floor(growthValue * progress)}%`,
            });

            if (currentFrame >= frames) {
                clearInterval(timer);
                setAnimatedMetrics(metrics);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [metrics]);

    if (!animatedMetrics)
        return (
            <p className="text-gray-500 text-center animate-pulse">
                Loading metrics...
            </p>
        );

    const cardData = [
        { label: "Total Visitors", value: animatedMetrics.totalVisitors, icon: Users, color: "#429ebd" },
        { label: "Total Sales", value: `$${animatedMetrics.totalSales}`, icon: DollarSign, color: "#f7ad19" },
        { label: "Average Visitors", value: animatedMetrics.avgVisitors, icon: BarChart3, color: "#f7ad19" },
        { label: "Growth Rate", value: animatedMetrics.growthRate, icon: TrendingUp, color: "#429ebd" },
    ];

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        //     {cardData.map(({ label, value, icon: Icon, color }) => (
        //         <div
        //             key={label}
        //             className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300"
        //         >
        //             <Icon size={28} style={{ color }} className="mb-2" />
        //             <p className="text-sm text-gray-500 mb-1">{label}</p>
        //             <h2 className="text-2xl font-bold" style={{ color }}>
        //                 {typeof value === "number" ? value.toLocaleString() : value}
        //             </h2>
        //         </div>
        //     ))}
        // </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cardData.map(({ label, value, icon: Icon, color }) => (
                <div
                    key={label}
                    className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow"
                >
                    <Icon size={28} style={{ color }} className="mb-2" />
                    <p className="text-sm text-gray-500 mb-1">{label}</p>
                    <h2 className="text-2xl font-bold" style={{ color }}>
                        {typeof value === "number" ? value.toLocaleString() : value}
                    </h2>
                </div>
            ))}
        </div>
    );
}
