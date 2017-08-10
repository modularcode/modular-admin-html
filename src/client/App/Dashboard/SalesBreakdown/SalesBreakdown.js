import { Morris } from '_common/Chart';


import theme from '_theme';
import Util from '_common/Util';


const colors = theme.get().colors;


const SalesBreakdown = {};

SalesBreakdown.init = () => {

  const containerEl = document.querySelector('#DashboardSalesBreakdownChart');

  if (!containerEl) {
    return false;
  }

  drawChart();

  function drawChart() {

    Util.empty(containerEl);


    Morris.Donut({
      element: containerEl,
      data: [
        { label: "Download Sales", value: 12 },
        { label: "In-Store Sales", value: 30 },
        { label: "Mail-Order Sales", value: 20 }
      ],
      resize: true,
      colors: [
        colors['amber-200'].string(),
        colors['light-blue-200'].string(),
        colors['blue-grey-200'].string(),
      ]
    });
  }



};


export default SalesBreakdown;



// var $dashboardSalesBreakdownChart = $('#dashboard-sales-breakdown-chart');

//     if (!$dashboardSalesBreakdownChart.length) {
//         return false;
//     }

//     function drawSalesChart(){

//     $dashboardSalesBreakdownChart.empty();

//         Morris.Donut({
//             element: 'dashboard-sales-breakdown-chart',
//             data: [{ label: "Download Sales", value: 12 },
//                 { label: "In-Store Sales", value: 30 },
//                 { label: "Mail-Order Sales", value: 20 } ],
//             resize: true,
//             colors: [
//                 tinycolor(config.chart.colorPrimary.toString()).lighten(10).toString(),
//                 tinycolor(config.chart.colorPrimary.toString()).darken(8).toString(),
//                 config.chart.colorPrimary.toString()
//             ],
//         });

//         var $sameheightContainer = $dashboardSalesBreakdownChart.closest(".sameheight-container");

//         setSameHeights($sameheightContainer);
//     }

//     drawSalesChart();
