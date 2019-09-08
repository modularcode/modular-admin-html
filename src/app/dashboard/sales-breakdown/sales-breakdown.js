$(function() {

    var $dashboardSalesBreakdownChart = $('#dashboard-sales-breakdown-chart');

    if (!$dashboardSalesBreakdownChart.length) {
        return false;
    } 

    function drawSalesChart(){

    $dashboardSalesBreakdownChart.empty();

        Morris.Donut({
            element: 'dashboard-sales-breakdown-chart',
            data: [{ label: "Myöhästymässä", value: 12 },
                { label: "Ajallaan", value: 30 },
                { label: "Myöhästyneet", value: 3 } ],
            resize: true,
            colors: [
                "#FFAA00",
                tinycolor(config.chart.colorPrimary.toString()).darken(8).toString(),
                "#FE2A0E",
            ],
        });

        var $sameheightContainer = $dashboardSalesBreakdownChart.closest(".sameheight-container");

        setSameHeights($sameheightContainer);
    }

    drawSalesChart();

    $(document).on("themechange", function(){
       drawSalesChart();
    });
    
})