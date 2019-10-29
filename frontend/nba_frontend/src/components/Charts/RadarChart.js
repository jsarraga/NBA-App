import ReactApexChart from 'react-apexcharts';
import React from 'react';
import './RadarChart.css';



class RadarChart extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
        options: {
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
            }
          }
        },
        series: [{
            name: props.data.name,
            data: [props.data.pts, props.data.tpm, props.data.reb, props.data.ast, 
                    props.data.stl, props.data.blk, props.data.fgp, props.data.ftp]
        }]
      }
    }

    render() {
      
      return (
          <div id="chart" className="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height="200" />
          </div>

        );
      }
    }


    export default RadarChart;