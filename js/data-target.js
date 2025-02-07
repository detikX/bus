Highcharts.chart('container-target', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(255,255,255,.3)'
    },
    title: {
        text: null,
    },
    subtitle: {
        text: null,
    },
    xAxis: {
        categories: ['2025', '2027', '2030'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [

        {
            name: 'Bus Listrik',
            data: [45321, 75000, 150000,]
        }
    ]
});
