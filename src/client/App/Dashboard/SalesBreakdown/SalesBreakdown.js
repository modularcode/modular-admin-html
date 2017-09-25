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
        { label: 'Download Sales', value: 12 },
        { label: 'In-Store Sales', value: 30 },
        { label: 'Mail-Order Sales', value: 20 }
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
