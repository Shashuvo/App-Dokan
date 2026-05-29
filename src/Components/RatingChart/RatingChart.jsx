import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const RatingChart = ({ ratings }) => {
    const sortedRatings = [...ratings].sort((a, b) => {
        const aNum = parseInt(a.name);
        const bNum = parseInt(b.name);
        return bNum - aNum;
    });

    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold text-[#001931] mb-6">
                Ratings
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={sortedRatings}
                    layout="vertical"
                    margin={{ top: 10, right: 40, bottom: 10, left: 10 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={false}
                        stroke="#E5E7EB"
                    />
                    <XAxis
                        type="number"
                        tick={{ fontSize: 18, fill: "#627382" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        type="category"
                        dataKey="name"
                        width={80}
                        interval={0}
                        tick={(props) => {
                            const { x, y, payload } = props;
                            return (
                                <text
                                    x={x - 64}
                                    y={y}
                                    dx={-16}
                                    dy={5}
                                    textAnchor="start"
                                    fill="#627382"
                                    fontSize={18}
                                >
                                    {payload.value}
                                </text>
                            );
                        }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        fill="#FF8811"
                        barSize={32}
                        radius={[0, 3, 3, 0]}
                        isAnimationActive={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;