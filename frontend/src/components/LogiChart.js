import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const seriesData = [
    {
      name: "railways",
      data: [11, 22, 56, 78, 34, 67, 73],
    },
    {
      name: "marine",
      data: [100, 56, 87, 23, 45, 29, 21],
    },
  ];

  const options = {
    chart: {
      height: 350,
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
        "2020-09-19T00:00:00.000Z",
        "2020-09-19T01:30:00.000Z",
        "2020-09-19T02:30:00.000Z",
        "2020-09-19T03:30:00.000Z",
        "2020-09-19T04:30:00.000Z",
        "2020-09-19T05:30:00.000Z",
        "2020-09-19T06:30:00.000Z",
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
