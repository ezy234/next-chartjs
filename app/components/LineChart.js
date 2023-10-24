"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: [15, 37, 43, 47, 57, 76, 113],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 45, 67, 24, 64],
              backgroundColor: ["rgb(255, 99, 132, 0.2)"],
              borderColor: ["rgb(255, 99, 132)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true
          scales: {
            x: {
              type: "linear",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
