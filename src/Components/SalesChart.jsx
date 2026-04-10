import { useEffect, useRef } from "react";
import { SALES_DATA } from "../constants";

export default function SalesChart() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    function buildChart() {
      if (chartRef.current) chartRef.current.destroy();

      const xLabels = SALES_DATA.map((_, i) => {
        const val = Math.round(5 + (i * 55) / (SALES_DATA.length - 1));
        return i % 3 === 0 ? `${val}k` : "";
      });

      chartRef.current = new window.Chart(canvasRef.current, {
        type: "line",
        data: {
          labels: xLabels,
          datasets: [
            {
              data: SALES_DATA,
              borderColor: "#4f46e5",
              backgroundColor: "rgba(99,102,241,0.08)",
              borderWidth: 2,
              pointRadius: 3,
              pointBackgroundColor: "#4f46e5",
              fill: true,
              tension: 0.35,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (c) => `$${c.parsed.y.toLocaleString()}k`,
              },
            },
          },
          scales: {
            x: {
              grid: { color: "rgba(0,0,0,0.05)" },
              ticks: { font: { size: 11 }, color: "#9ca3af" },
            },
            y: {
              min: 0,
              max: 100,
              grid: { color: "rgba(0,0,0,0.05)" },
              ticks: {
                font: { size: 11 },
                color: "#9ca3af",
                callback: (v) => `${v}%`,
              },
            },
          },
        },
      });
    }

    if (window.Chart) {
      buildChart();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
      script.onload = buildChart;
      document.head.appendChild(script);
    }

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: 230 }}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Sales chart for October"
      />
    </div>
  );
}
