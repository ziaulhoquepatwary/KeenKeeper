"use client";

import { useApp } from "@/context/AppContext";
import { useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function StatsPage() {
    const { timeline = [] } = useApp();

    const data = useMemo(() => {
        const phoneCallCount = timeline.filter(item => item.type.toLowerCase() === "phone call").length;
        const textMessageCount = timeline.filter(item => item.type.toLowerCase() === "text message").length;
        const videoCallCount = timeline.filter(item => item.type.toLowerCase() === "video call").length;

        return [
            { name: "Phone Calls", value: phoneCallCount, color: "#8b5cf6" },
            { name: "Text Messages", value: textMessageCount, color: "#2d4a3e" },
            { name: "Video Calls", value: videoCallCount, color: "#34a853" }
        ];
    }, [timeline]);

    const totalCalls = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-white font-sans">
            {/* Header Section */}
            <div className="p-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
                    Friendship Analytics
                </h1>
            </div>

            {/* Chart Card */}
            <div className="p-6 md:p-10 min-h-[400px] flex flex-col">
                <h2 className="text-xl font-semibold text-[#2d4a3e] mb-8">
                    By Interaction Type
                </h2>

                <div className="flex justify-center items-center w-full overflow-hidden">
                    {totalCalls > 0 ? (
                        <PieChart width={320} height={320}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius="60%"
                                outerRadius="80%"
                                paddingAngle={8}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                        </PieChart>
                    ) : (
                        <div className="h-[320px] flex items-center justify-center text-gray-400">
                            No data available to display
                        </div>
                    )}
                </div>

                {/* Custom Legend */}
                <div className="flex justify-center items-center gap-6 mt-6">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <span className="text-sm font-medium text-gray-500">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StatsPage