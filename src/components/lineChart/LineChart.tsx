import "./lineCharts.css";
import { FaUsers } from "react-icons/fa6";

import {
  Line,
  LineChart as LineChartElement,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Sun", users: 400 },
  { name: "Mon", users: 600 },
  { name: "Tue", users: 500 },
  { name: "Wed", users: 700 },
  { name: "Thu", users: 400 },
  { name: "Fri", users: 500 },
  { name: "Sat", users: 450 },
];
const LineChart = () => {
  return (
    <div className="lineChartWraper">
      <div className="info">
        <div className="titleContainer">
          <FaUsers />
          <p>Total Users</p>
        </div>
        <h2>11.238</h2>
      </div>

      <div className="linechart">
        <ResponsiveContainer width="99%" height="100%">
          <LineChartElement width={500} height={300} data={data}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              position={{ x: -15, y: 50 }}
            />{" "}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              dot={false}
            />
          </LineChartElement>
        </ResponsiveContainer>
        <p>this month </p>
        <p id="per">15%</p>
      </div>
    </div>
  );
};

export default LineChart;
