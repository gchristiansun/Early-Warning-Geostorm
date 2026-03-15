import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function DSTChart({ data }) {
  const chartData = data.map(d => ({
    time: `D${d.day} H${d.hour}`,
    dst: d.dst
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="dst"
          stroke="#ff7300"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );

}

export default DSTChart;