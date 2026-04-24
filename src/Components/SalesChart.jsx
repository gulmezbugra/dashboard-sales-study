import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { SALES_DATA } from "../constants";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

const labels = SALES_DATA.map((_, i) => {
  const val = Math.round(5 + (i * 55) / (SALES_DATA.length - 1));
  return i % 3 === 0 ? `${val}k` : "";
});

const data = {
  labels,
  datasets: [{
    data: SALES_DATA,
    borderColor: "#4f46e5",
    backgroundColor: "rgba(99,102,241,0.08)",
    borderWidth: 2,
    pointRadius: 3,
    pointBackgroundColor: "#4f46e5",
    fill: true,
    tension: 0.35,
  }],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: (c) => `$${c.parsed.y.toLocaleString()}k` } },
  },
  scales: {
    x: { grid: { color: "rgba(0,0,0,0.05)" }, ticks: { font: { size: 11 }, color: "#9ca3af" } },
    y: { min: 0, max: 100, grid: { color: "rgba(0,0,0,0.05)" }, ticks: { font: { size: 11 }, color: "#9ca3af", callback: (v) => `${v}%` } },
  },
};

export default function SalesChart() {
  return (
    <div className="chart-wrapper">
      <Line data={data} options={options} />
    </div>
  );
}
