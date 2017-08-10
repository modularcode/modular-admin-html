import { Sparkline } from '_common/Chart';

import theme from '_theme';
import Util from '_common/Util';


const colors = theme.get().colors;


const Items = {};

Items.init = () => {

  const containerEl = document.querySelector('#DashboardItems');

  if (!containerEl) {
    return false;
  }

  drawChart();

  function drawChart() {
    $("#DashboardItems .Stats").each(function() {

      let type = $(this).data('type');

      let data = [];

      if ($(this).data('data')) {
        data = $(this).data('data').split(',').map(function(item) {
          if (item.indexOf(":") > 0) {
            return item.split(":");
          }
          else {
            return item;
          }
        });
      }
      // Generate random data
      else {
        for (var i = 0; i < 17; i++) {
          data.push(
            50 + Math.round(50 * Math.random())
          );
        }
      }

      Sparkline($(this), data, {
        barColor: colors['primary'].string(),
        height: $(this).height(),
        type: type
      });

    });
  }

};

export default Items;


// function drawDashboardItemsListSparklines(){
//     $(".dashboard-page .items .sparkline").each(function() {
//       var type = $(this).data('type');

//       // There is predefined data
//       if ($(this).data('data')) {
//         var data = $(this).data('data').split(',').map(function(item) {
//           if (item.indexOf(":") > 0) {
//             return item.split(":");
//           }
//           else {
//             return item;
//           }
//         });
//       }
//       // Generate random data
//       else {
//         var data = [];
//         for (var i = 0; i < 17; i++) {
//           data.push(Math.round(100 * Math.random()));
//         }
//       }


//       $(this).sparkline(data, {
//         barColor: config.chart.colorPrimary.toString(),
//         height: $(this).height(),
//         type: type
//       });
//     });
//   }

//   drawDashboardItemsListSparklines();
