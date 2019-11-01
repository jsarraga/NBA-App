import ReactApexChart from 'react-apexcharts';
import React from 'react';
import './RadarChart.css';



function RadarChart(props) {

    let options = {
          chart: {
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            },
          },
          labels: ['Pts', '3pm', 'Reb', 'Ast', 'Stl', 'Blk', 'FG%', 'FT%'],
          title: {
            // text: 'Radar Chart - Multi Series'
          },
          stroke: {
            width: 0
          },
          fill: {
            opacity: 0.4
          },
          markers: {
            size: 2,
            hover: {
              size: 10
            },
            yaxis: {
              show: false,
              showAlways: false,
              seriesName: undefined,
              opposite: false,
              reversed: false,
              logarithmic: false,
              tickAmount: 6,
              min: 6,
              max: 6,
              forceNiceScale: false,
              floating: false,
              decimalsInFloat: undefined,
              labels: {
                  show: true,
                  align: 'right',
                  minWidth: 0,
                  maxWidth: 160,
                  style: {
                      color: undefined,
                      fontSize: '12px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      cssClass: 'apexcharts-yaxis-label',
                  },
                  offsetX: 0,
                  offsetY: 0,
                  rotate: 0,
              },
              axisBorder: {
                  show: true,
                  color: '#78909C',
                  offsetX: 0,
                  offsetY: 0
              },
              axisTicks: {
                  show: true,
                  borderType: 'solid',
                  color: '#78909C',
                  width: 6,
                  offsetX: 0,
                  offsetY: 0
              },
              title: {
                  text: 'Big thangs',
                  rotate: -90,
                  offsetX: 0,
                  offsetY: 0,
                  style: {
                      color: undefined,
                      fontSize: '30px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      cssClass: 'apexcharts-yaxis-title',
                  },
              },
              crosshairs: {
                  show: true,
                  position: 'back',
                  stroke: {
                      color: '#b6b6b6',
                      width: 1,
                      dashArray: 0,
                  },
              },
              tooltip: {
                  enabled: true,
                  offsetX: 0,
              },
              
          }
          }
        }
    
        // League Leaders:
        // pts = 36.1
        // tpm = 5.1
        // reb = 15.6
        // ast = 11.1
        // stl = 2.2
        // blk = 2.7
        // fgp = .669
        // ftp = .928
        
        const series = [{
            name: props.data.name,
            data: [(props.data.pts/36.1), (props.data.tpm/5.1), (props.data.reb/15.6), (props.data.ast/11.1), 
                    (props.data.stl/2.2), (props.data.blk/2.7), (props.data.fgp/.669), (props.data.ftp/.928)]
        }]

      return (
          <div id="chart" className="chart">
            <ReactApexChart options={options} series={series} type="radar" height="200" />
          </div>

        );

    }

    export default RadarChart;