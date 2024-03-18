import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const seriesData = [
    {
      name: "Coking coal",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Non Coking coal",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      height: 400,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-09-19T00:00:00.000Z",
        "2023-09-19T01:30:00.000Z",
        "2023-09-19T02:30:00.000Z",
        "2023-09-19T03:30:00.000Z",
        "2023-09-19T04:30:00.000Z",
        "2023-09-19T05:30:00.000Z",
        "2023-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={seriesData}
          type="area"
          height={200}
          width={600}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
