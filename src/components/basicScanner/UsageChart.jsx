import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Progress } from "antd";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const UsageChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [200, 400, 300, 500, 600, 400, 800, 900, 700, 600, 400, 500],
        borderColor: "#38BDF8",
        backgroundColor: "rgba(56, 189, 248, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#38BDF8",
        hoverRadius: 7,
      },
      {
        label: "Dataset 2",
        data: [100, 300, 200, 400, 500, 300, 600, 700, 500, 400, 300, 400],
        borderColor: "#4ADE80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#4ADE80",
        hoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "nearest",
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#9CA3AF",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#9CA3AF",
        },
        grid: {
          color: "#374151",
        },
      },
    },
  };

  return (
    <div className="bg-[#2a2e31] rounded-2xl text-white flex flex-col h-[600px]">
      <h2 className="px-2 py-1 text-lg font-semibold mb-4">Usage</h2>
      <div className="overflow-x-auto w-full mt-6">
        <div className="w-max min-w-[500px] bg-[#2a3c48] rounded-lg p-6 tablet:m-6 my-0">
          <div className="w-full h-96 tablet:h-80 laptop:h-72 mb-6">
            <Line data={data} options={options} className="!w-auto !h-full" />
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <Progress
                type="circle"
                percent={25}
                width={60}
                strokeColor="#38BDF8"
                className="text-white"
                format={() => <span style={{ color: "#38BDF8" }}>25%</span>}
              />
            </div>
            <div className="flex flex-col items-center">
              <Progress
                type="circle"
                percent={70}
                width={60}
                strokeColor="#4ADE80"
                className="text-white"
                format={() => <span style={{ color: "#4ADE80" }}>70%</span>}
              />
            </div>
            <div className="flex flex-col items-center">
              <Progress
                type="circle"
                percent={35}
                width={60}
                strokeColor="#FACC15"
                className="text-white"
                format={() => <span style={{ color: "#FACC15" }}>35%</span>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageChart;
