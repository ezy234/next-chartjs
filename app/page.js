import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import PolarAreaChart from "./components/PolarAreaChart";
import RadarChart from "./components/RadarChart";
import ScatterChart from "./components/ScatterChart";
import PieChart from "./components/pieChart";

export default function Home() {
  return (
    <div className="container">
      Chart js
      <div>
        <h3>Bar Chart</h3>
        <BarChart />
      </div>
      <div>
        <h3>Pie Chart</h3>
        <PieChart />
      </div>
      <div>
        <h3>Doughnut Chart</h3>
        <DoughnutChart />
      </div>
      <div>
        <h3>Polar Area Chart</h3>
        <PolarAreaChart />
      </div>
      <div>
        <h3>Radar Chart</h3>
        <RadarChart />
      </div>
      <div>
        <h3>Line Chart</h3>
        <LineChart />
      </div>
      <div>
        <h3>Scatter Chart</h3>
        <ScatterChart />
      </div>
    </div>
  );
}
