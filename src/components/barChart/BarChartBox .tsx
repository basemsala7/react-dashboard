import { useQuery } from "react-query";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import { BarChartType } from "../../types/types";
import "./barChart.css";

const BarChartBox = ({ slug }: { slug: string }) => {
  const fetchBarChartData = async (slug: string) => {
    try {
      const res = await fetch(
        `https://dashboard-backend-orpin.vercel.app/api/dashboard/${slug}`
      );
      if (!res.ok) throw Error();
      return await res.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { isLoading, data, isError } = useQuery(`${slug}`, () =>
    fetchBarChartData(slug)
  );
  console.log(data);
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
    <div className="barChartBox">
      <h1>{data.title}</h1>
      <div className="">
        <ResponsiveContainer width="99%" height={160}>
          <BarChart data={data.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={data.dataKey} fill={data.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
