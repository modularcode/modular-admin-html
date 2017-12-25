import { Morris } from '_common/Chart';


import theme from '_theme';
import utils from '_common/_utils';


const colors = theme.get().colors;


// History component
const History = {};

History.init = () => {

  const TabContentEl = document.querySelector('#DashboardHistoryTabContent');

  if (!TabContentEl) {
    return false;
  }

  // drawing visits chart
  drawChart();

  utils.addEventListener(document, 'tab.select', () => {

    drawChart();

  });

  function drawChart() {

    const AudienceTabEl = document.querySelector('#DashboardHistoryAudienceTab');
    const DownloadsTabEl = document.querySelector('#DashboardHistoryDownloadsTab');

    if (utils.isVisible(AudienceTabEl)) {
      drawAudienceChart();
    }
    else if (utils.isVisible(DownloadsTabEl)) {
      drawDownloadsChart();
    }
  }


  function drawAudienceChart() {

    const containerEl = document.querySelector('#DashboardHistoryAudienceChart');

    utils.empty(containerEl);

    const dataVisits = [
      { x: '2015-09-01', visits: 70, users: 36 },
      { x: '2015-09-02', visits: 75, users: 39 },
      { x: '2015-09-03', visits: 50, users: 57 },
      { x: '2015-09-04', visits: 75, users: 55 },
      { x: '2015-09-05', visits: 50, users: 60 },
      { x: '2015-09-06', visits: 75, users: 70 },
      { x: '2015-09-07', visits: 86, users: 73 }
    ];


    Morris.Line({
      element: containerEl,
      data: dataVisits,
      xkey: 'x',
      ykeys: ['users', 'visits'],
      ymin: 'auto 40',
      labels: ['Users', 'Visits'],
      xLabels: 'day',
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
        colors['light-green-400'].string(),
        colors['light-blue-300'].string(),

      ],
      pointFillColors: [
        colors['light-green-400'].string(),
        colors['light-blue-300'].string(),
      ]
    });
  }

  function drawDownloadsChart() {

    const containerEl = document.querySelector('#DashboardHistoryDownloadsChart');

    utils.empty(containerEl);

    const dataDownloads = [
      {
        year: '2006',
        downloads: 1300
      },
      {
        year: '2007',
        downloads: 1526
      },
      {
        year: '2008',
        downloads: 2000
      },
      {
        year: '2009',
        downloads: 1800
      },
      {
        year: '2010',
        downloads: 1650
      },
      {
        year: '2011',
        downloads: 620
      },
      {
        year: '2012',
        downloads: 1000
      },
      {
        year: '2013',
        downloads: 1896
      },
      {
        year: '2014',
        downloads: 850
      },
      {
        year: '2015',
        downloads: 1500
      }
    ];


    Morris.Bar({
      element: containerEl,
      data: dataDownloads,
      xkey: 'year',
      ykeys: ['downloads'],
      labels: ['Downloads'],
      hideHover: 'auto',
      resize: true,
      barColors: [
        colors['primary'].string(),
        colors['primary'].string()
      ],
    });
  }

};


export default History;
