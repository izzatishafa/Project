import React from 'react'
import Chart from 'react-apexcharts'


const DoughnutChart = () => {
  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ['#30C04F', '#C72929'],
    dataLabels: {
      enabled: false,
    },
    labels: ['Masuk', 'Tidak Masuk'],
    legend: {
      position: 'top',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: 'Masuk',
              formatter: (w) => {
                const total = w.globals.seriesTotals.reduce(
                  (acc, val) => acc + val,
                  0
                );
                const percentage = parseInt(
                  (w.globals.series[0] / total) * 100
                );
                return `${percentage}%`;
              },
              fontSize: '20px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#30C04F',
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const chartSeries = [70, 30];

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3"></div>
      <Chart
        type="donut"
        width={300}
        height={400}
        series={chartSeries}
        options={chartOptions}
      />
    </React.Fragment>
  );
};

export default DoughnutChart







