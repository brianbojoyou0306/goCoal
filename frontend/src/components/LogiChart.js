import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const seriesData = [
    {
      name: "series1",
      data: [71, 45, 23, 78, 91, 100, 34],
    },
    {
      name: "series2",
      data: [100, 56, 87, 23, 45, 39, 11],
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
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
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
