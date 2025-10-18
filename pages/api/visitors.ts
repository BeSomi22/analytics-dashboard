import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const visitors = [
    { month: "Jan", value: 1200 },
    { month: "Feb", value: 1900 },
    { month: "Mar", value: 3000 },
    { month: "Apr", value: 2500 },
    { month: "May", value: 3200 },
    { month: "Jun", value: 4000 },
  ];

  const sales = [
    { month: "Jan", value: 8000 },
    { month: "Feb", value: 9500 },
    { month: "Mar", value: 12300 },
    { month: "Apr", value: 11000 },
    { month: "May", value: 13400 },
    { month: "Jun", value: 15000 },
  ];

  // const metrics = {
  //   totalVisitors: visitors.reduce((sum, v) => sum + v.value, 0),
  //   totalSales: sales.reduce((sum, s) => sum + s.value, 0),
  //   avgVisitors: Math.round(
  //     visitors.reduce((sum, v) => sum + v.value, 0) / visitors.length
  //   ),
  //   growthRate: "18%",
  // };

  //  Fixed metrics for now
  const metrics = {
    totalVisitors: 15800,
    totalSales: 12000,
    avgVisitors: 2633,
    growthRate: "18%",
  };

  const traffic = [
    { source: "Organic", value: 45 },
    { source: "Referral", value: 25 },
    { source: "Social", value: 20 },
    { source: "Email", value: 10 },
  ];

  res.status(200).json({ visitors, sales, metrics, traffic });
}
