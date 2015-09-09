$(function() {

    if (!$('#dashboard-visits-chart').length) {
        return false;
    }

    var data = [
        { x: '2015-09-01', y: 70},
        { x: '2015-09-02', y: 75 },
        { x: '2015-09-03', y: 50},
        { x: '2015-09-04', y: 75 },
        { x: '2015-09-05', y: 50 },
        { x: '2015-09-06', y: 75 },
        { x: '2015-09-07', y: 86 } 
    ];


    Morris.Line({
        element: 'dashboard-visits-chart',
        data: data,
        xkey: 'x',
        ykeys: ['y'],
        ymin: 'auto 40',
        labels: ['Visits'],
        xLabels: "day",
        hideHover: 'auto',
        yLabelFormat: function (y) {
            // Only integers
            if (y === parseInt(y, 10)) {
                return y;
            }
            else {
                return '';
            }
        },
        resize: true,
        lineColors: [
            config.colorPrimary.toString(),
            tinycolor(config.colorPrimary.toString()).darken(10).toString()
        ],
    });

});