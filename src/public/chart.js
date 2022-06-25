fetch('./output/matches.json').then((res) => res.json()).then((data1) => {
    chartMatchesWonPerYear(data1);
})

// fetch('./output/extraRunsPerTeam.json').then((res) => res.json()).then((data2) => {
//     chartExtraRunsPerTeam(data2);
// })


// fetch('./output/matchesWonPerTeamPerYear.json').then((res) => res.json()).then((data3) => {
//     chartMatchesWonPerTeamPerYear(data3);
// })

function chartMatchesWonPerYear(data1) {
    Highcharts.chart('container1', {

        title: {
            text: 'Matches Won By Teams As Per Year'
        },

        yAxis: {
            title: {
                text: 'No of Matches Won'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2008 to 2017'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2008
            }
        },

        series: [{
            name: 'No. of matches Played Per Year',
            data: Object.values(data1)
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    })

}


// function chartExtraRunsPerTeam(data2) {
//     Highcharts.chart('container2', {

//         title: {
//             text: 'Extra Runs Given As per Teams'
//         },

//         yAxis: {
//             title: {
//                 text: 'Teams'
//             }
//         },

//         xAxis: {
//             accessibility: {
//                 rangeDescription: 
//             }
//         },

//         legend: {
//             layout: 'vertical',
//             align: 'right',
//             verticalAlign: 'middle'
//         },

//         plotOptions: {
//             series: {
//                 label: {
//                     connectorAllowed: false
//                 },
//                 pointStart: Object.keys(data2)
//             }
//         },

//         series: [{
//             name: 'No. of matches Played Per Year',
//             data: Object.values(data2)
//         }],

//         responsive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 500
//                 },
//                 chartOptions: {
//                     legend: {
//                         layout: 'horizontal',
//                         align: 'center',
//                         verticalAlign: 'bottom'
//                     }
//                 }
//             }]
//         }

//     })

// }



// // fetch('./output/.json').then((res) => res.json()).then((data1) => {
// //     chartExtraRunsPerTeam(data1);
// // })

// // function chartExtraRunsPerTeam(data1) {
// //     Highcharts.chart('container3', {

// //         title: {
// //             text: 'Extra Runs Given As per Teams'
// //         },

// //         yAxis: {
// //             title: {
// //                 text: 'Teams'
// //             }
// //         },

// //         xAxis: {
// //             accessibility: {
// //                 rangeDescription: Object.keys(data1)
// //             }
// //         },

// //         legend: {
// //             layout: 'vertical',
// //             align: 'right',
// //             verticalAlign: 'middle'
// //         },

// //         plotOptions: {
// //             series: {
// //                 label: {
// //                     connectorAllowed: false
// //                 },
// //                 pointStart: Object.keys(data1[0])
// //             }
// //         },

// //         series: [{
// //             name: 'No. of matches Played Per Year',
// //             data: Object.values(data1)
// //         }],

// //         responsive: {
// //             rules: [{
// //                 condition: {
// //                     maxWidth: 500
// //                 },
// //                 chartOptions: {
// //                     legend: {
// //                         layout: 'horizontal',
// //                         align: 'center',
// //                         verticalAlign: 'bottom'
// //                     }
// //                 }
// //             }]
// //         }

// //     })

// // }

// function chartMatchesWonPerYear(data3) {
//     Highcharts.chart('container3', {

//         title: {
//             text: 'Matches Won By Teams As Per Year'
//         },

//         yAxis: {
//             title: {
//                 text: 'No of Matches Won'
//             }
//         },

//         xAxis: {
//             accessibility: {
//                 rangeDescription: 'Range: 2008 to 2017'
//             }
//         },

//         legend: {
//             layout: 'vertical',
//             align: 'right',
//             verticalAlign: 'middle'
//         },

//         plotOptions: {
//             series: {
//                 label: {
//                     connectorAllowed: false
//                 },
//                 pointStart: 2008
//             }
//         },

//         series: [{
//             name: 'No. of matches Played Per Year',
//             data: Object.values(data3)
//         }],

//         responsive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 500
//                 },
//                 chartOptions: {
//                     legend: {
//                         layout: 'horizontal',
//                         align: 'center',
//                         verticalAlign: 'bottom'
//                     }
//                 }
//             }]
//         }

//     })

// }
