import React from 'react'
import Chart from 'react-apexcharts'

const DoughnutChart = () => {
    return (
        <React.Fragment>
            <div className="container-fluid mt-3 mb-3"></div>
            <Chart 
            type = "donut"
            width = {300}
            height = {400}
            series = {[70,30]}
            options = {{
                    chart: {
                      toolbar: {
                        show: false,
                      }
                    },
                labels: ['Masuk', 'Tidak Masuk'],
                plotOptions: {
                    pie: {
                      donut: {
                        labels: {
                          show: false,
                          total: {
                            show: true,
                            label: '',
                            fontSize: '20px',
                            fontWeight: 600,
                            color: '#30C04F',
                            formatter: function (w) {
                              return w.globals.series[0] + "%"
                            }
                          }
                        },
                        size: '65%',
                        strokeWidth: 0,
                        strokeCurve: true
                      },
                    },
                  },
                  
                
                dataLabels: {
                    enabled: false,
                    formatter: function (val, opts) {
                        return opts.w.config.labels[opts.seriesIndex] + ": " + val + "%"
                    },
                    style: {
                        fontSize: '14px',
                        fontWeight: 400,
                        colors: ['#333333']
                    }
                },
                colors: ['#30C04F', '#C72929'],
                legend: {
                    position: 'top',
                },
            }}
            />
        </React.Fragment>
    )
}

export default DoughnutChart;



