"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

export default function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://dummyjson.com/users");
      if (response.status != 200) {
        console.error("Bad response");
      }
      const data = response.data;
      // console.log(data);
      const firstSix = data.users.splice(0, 6);
      setChartData(firstSix);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const label = chartData.map((items) => items.firstName);
      const data = chartData.map((items) => items.weight);

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: label,
          datasets: [
            {
              // barPercentage: 0.9,
              // barThickness: 50,
              label: "Info",
              data: data,
              backgroundColor: [
                "rgb(255, 99, 132, 0.2)",
                "rgb(255, 159, 64, 0.2)",
                "rgb(255, 205, 86, 0.2)",
                "rgb(75, 192, 192, 0.2)",
                "rgb(54, 162, 235, 0.2)",
                "rgb(153, 102, 255, 0.2)",
                "rgb(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
              borderRadius: 10,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Weight Name Info",
            },
          },
          layout: {
            padding: 40,
          },
          // responsive: true
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [chartData]);

  function handleDownload() {
    if (chartRef.current) {
      const file = chartRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = file;
      link.download = "barChart.png";
      link.click();
    }
  }
  return (
    <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
      <canvas ref={chartRef} />
      <button
        onClick={handleDownload}
        className="rounded-md bg-amber-600 bg-opacity-25 p-3 m-4 border border-amber-800"
      >
        Download Chart
      </button>
    </div>
  );
}
