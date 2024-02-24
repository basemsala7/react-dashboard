import BarChartBox from "../../components/barChart/BarChartBox ";
import BigChartBox from "../../components/bigChart/BigChartBox";
import LineChart from "../../components/lineChart/LineChart";
import PieChartBox from "../../components/pieChart/PieChartBox";
import TopDeals from "../../components/topDeals/TopDeals";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboardWraper">
      <div className="box-1">
        <TopDeals />
      </div>
      <div className="box-2">
        <LineChart />
      </div>
      <div className="box-3">
        <LineChart />
      </div>
      <div className="box-4">
        <PieChartBox />
      </div>
      <div className="box-5">
        <LineChart />
      </div>
      <div className="box-6">
        <LineChart />
      </div>
      <div className="box-7">
        <BigChartBox />
      </div>
      <div className="box-8">
        <BarChartBox slug="visit" />
      </div>
      <div className="box-9">
        <BarChartBox slug="revenue" />
      </div>
    </div>
  );
};

export default Dashboard;
