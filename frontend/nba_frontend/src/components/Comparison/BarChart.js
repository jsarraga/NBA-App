import ReactApexChart from "react-apexcharts";
import React from 'react';

function BarChart(props) {


    let options = {
        chart: {
        stacked: true
        },
        colors: ['#61892f', '#86c232'],
        plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',

        },
        },
        dataLabels: {
        enabled: false
        },
        stroke: {
        width: 1,
        colors: ["#fff"]
        },

        grid: {
        xaxis: {
            show: false,
            showLines: false
        }
        },
        yaxis: {
        min: -30,
        max: 30,
        title: {
            // text: 'Categories',
        },
        },
        tooltip: {
        shared: false,
        x: {
            // formatter: function (val) {
            // return val
            // }
        },
        y: {
            // formatter: function (val) {
            // return Math.abs(val) + "%"
            // }
        }
        },
        xaxis: {
        categories: ['Pts', '3pm', 'Reb', 'Ast', 'Stl', 'Blk', 'Fg%', 'Ft%', 'TO'
        ],
        labels: {
            // formatter: function (val) {
            // return Math.abs(Math.round(val)) + "%"
            // }
        }
        }
    }

    let series = [
        {
        name: props.name2, 
        data: [props.otherData.pts, props.otherData.tpm, props.otherData.reb, props.otherData.ast, props.otherData.stl, 
            props.otherData.blk, props.otherData.fgp, props.otherData.ftp, props.otherData.tov
        ] 
        },
        {
        name: props.name1,
        data: [-(props.data.pts), -(props.data.tpm), -(props.data.reb), -(props.data.ast), -(props.data.stl),
                -(props.data.blk), -(props.data.fgp), -(props.data.ftp), -(props.data.tov)
        ]
        }
    ]

    return (
        
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height="350" />
        </div>
        

        );
    }


export default BarChart;