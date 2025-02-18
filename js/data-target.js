Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container-target', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(255,255,255,.3)',
        // borderRadius: '16px'
    },
    title: {
        text: null,
    },
    credits: {
        enabled: false //buat highcharts com
    },
    subtitle: {
        text: null,
    },
    xAxis: {
        categories: ['2022', '2023', '2024', '2025'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        },
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: '14px "Jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        },
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: '14px "Jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    tooltip: {
        valueSuffix: ' (Unit)',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Jost',
            fontSize: '1rem'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                style: {
                    // color: "#fafafa",
                    font: 'normal 1.2rem "Jost", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
            }
        }
    },
    series: [

        {
            name: 'Bus Listrik',
            data: [52, 100, 300, 500]
        }
    ]
});
