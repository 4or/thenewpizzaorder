import React, { Fragment } from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from "highcharts-react-official";


const firstHOC = (App,QUERY) =>{

    class HOC extends React.Component {
 
        state = {
            name:"ahmed bejaoui",
            age:22
        }
        render() {
          return (
            <HighchartsReact
            
            highcharts={Highcharts}
            options={{ 
                chart: {
                    type: 'column',
                    backgroundColor: 'black',
                },
                
                style: {
                    fontFamily: '\'Unica One\', sans-serif',
                },
                 
                
                title: {
                    style: {color:"white"},
                    text: 'Daily Attempts  '
                },
                subtitle: {
                    text: ' '
                },
                credits: {
                    enabled: false
                },
                xAxis: { 
                    categories: [
                        '2019-01-12',
                        '2019-01-13',
                        '2019-01-14',
                        '2019-01-15' 
                    ],
                    labels:{
                        style: {color:"white"},
                    },
                    crosshair: true  
                },
                yAxis: {
                    min: 0,
                    title: {
                        style: {color:"white"},
                        text: 'Number Of Transactions'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true, style: {color:"black"},
                      
                },
                plotOptions: {
                    
                    column: { borderRadius: 4,
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    color: "#2b908f",
                    name:"Number Of Transactions",
                    data: [1,1,2,5]
            
                }]
            }}
          />
          )
        }
      }
      return HOC
}

export default firstHOC;
