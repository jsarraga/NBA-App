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
            opacity: 0.8,
            colors: ['#86C232']
          },
          markers: {
            size: 2,
            hover: {
              size: 10
            }  
          },
          yaxis: {
            show: false,
            showAlways: false,
        },
        },
        // League Leaders:
        // pts = 36.1
        // tpm = 5.1
        // reb = 15.6
        // ast = 11.1
        // stl = 2.2
        // blk = 2.7
        // fgp = .669
        // ftp = .928
        
        series: [{
            name: props.data.name,
            data: [(props.data.pts/36.1), (props.data.tpm/5.1), (props.data.reb/15.6), (props.data.ast/11.1), 
                    (props.data.stl/2.2), (props.data.blk/2.7), (props.data.fgp/.669), (props.data.ftp/.928)]
        }]
      }
      console.log(props.data)
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


    