import { Sparkline } from '_common/Chart';

import theme from '_theme';


const colors = theme.get().colors;


const Items = {};

Items.init = () => {

  const containerEl = document.querySelector('#DashboardItems');

  if (!containerEl) {
    return false;
  }

  drawChart();

  function drawChart() {
    $('#DashboardItems .Stats').each(function() {

      let type = $(this).data('type');

      let data = [];

      if ($(this).data('data')) {
        data = $(this).data('data').split(',').map(function(item) {
          if (item.indexOf(':') > 0) {
            return item.split(':');
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
