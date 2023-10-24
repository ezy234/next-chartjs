"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function RadarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "radar",
        data: {
          labels: ["John", "Jane", "Doe", "Emily", "Jack", "David", "Ruby"],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 45, 67, 24, 64],
              backgroundColor: ["rgb(255, 99, 132, 0.2)"],
              borderColor: ["rgb(255, 99, 132)"],
              borderWidth: 1,
            },
            {
              label: "Info Two",
              data: [24, 69, 13, 95, 37, 14, 54],
              backgroundColor: ["rgb(255, 159, 64, 0.2)"],
              borderColor: ["rgb(255, 99, 132)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true
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
