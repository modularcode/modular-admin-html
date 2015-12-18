$(function() {

    if (!$('#sales-chart').length) {
        return false;
    }

    Morris.Donut({
        element: 'sales-chart',
        data: [{ label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 } ],
        resize: true,
        colors: [
            tinycolor(config.colorPrimary.toString()).lighten(10).toString(),
            tinycolor(config.colorPrimary.toString()).darken(10).toString(),
            config.colorPrimary.toString()
        ],
    });
})