import { useQuery } from "react-query";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChart.css";

const BigChartBox = () => {
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dashboard-backend-orpin.vercel.app/api/dashboard/revenueanalytics`
      );
      if (!res.ok) throw Error();
      return await res.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const { isLoading, data, isError } = useQuery(`revenueanalytics`, fetchData);

  if (isLoading) return <span className="loader"></span>;
  if (isError)
    return (
      <div className="error">
        <h2>opps !</h2>
        <br></br>
        <p>Some thing wrong</p>
      </div>
    );
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
