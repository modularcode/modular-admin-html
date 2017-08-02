function drawVisitsChart() {

  var ctx = document.getElementById("DashboardHistoryVisitsChart").getContext("2d");

  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var config = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "Users",
        backgroundColor: theme.get().colors.yellow.string(),
        borderColor: theme.get().colors.yellow.string(),
        data: [
          10,
          19,
          27,
          30,
          35,
          49,
          68,
        ],
        fill: false,
      }, {
        label: "Visits",
        fill: false,
        backgroundColor: theme.get().colors.green.string(),
        borderColor: theme.get().colors.green.string(),
        data: [
          30,
          45,
          63,
          90,
          100,
          120,
          178,
        ],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      // title:{
      //   display:true,
      //   text:'Chart.js Line Chart'
      // },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        gridLines: {
          tickMarkLength: 0
        },
        xAxes: [{
          display: true,
          // gridLines: {
          //   // drawTicks: false,
          //   // offsetGridLines: true,
          //   // zeroLineBorderDashOffset: 10
          // }
          // scaleLabel: {
          //   display: true,
          //   labelString: 'Month'
          // }
        }],
        yAxes: [{
          display: true,
          // gridLines: {
          //   // drawTicks: false
          // }
          // scaleLabel: {
          //   display: true,
          //   labelString: 'Value'
          // }
        }]
      }
    }
  };


  var myLine = new ChartJS(ctx, config);

}
