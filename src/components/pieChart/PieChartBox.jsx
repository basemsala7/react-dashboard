import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useQuery } from "react-query";

import "./pie.css";

const PieChartBox = () => {
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://crazy-flannel-nightgown-ant.cyclic.app/api/dashboard/devices`
      );
      if (!res.ok) throw Error();
      return await res.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const { isLoading, data, isError } = useQuery(`devices`, fetchData);
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
    <>
      <div className="pieChartBox">
        <h1>Leads by Source</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={data}
                innerRadius={"70%"}
                outerRadius={"90%"}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="options">
          {data.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PieChartBox;
