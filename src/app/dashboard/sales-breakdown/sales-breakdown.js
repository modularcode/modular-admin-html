$(function() {

    var $dashboardSalesBreakdownChart = $('#dashboard-sales-breakdown-chart');

    if (!$dashboardSalesBreakdownChart.length) {
        return false;
    }

    Morris.Donut({
        element: 'dashboard-sales-breakdown-chart',
        data: [{ label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 } ],
        resize: true,
        colors: [
            tinycolor(config.colorPrimary.toString()).lighten(10).toString(),
            tinycolor(config.colorPrimary.toString()).darken(8).toString(),
            config.colorPrimary.toString()
        ],
    });

    var $sameheightContainer = $dashboardSalesBreakdownChart.closest(".sameheight-container");

    setSameHeights($sameheightContainer);
})