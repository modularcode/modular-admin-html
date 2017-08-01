import Chart from 'chart.js';

import theme from '_theme';

Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontColor = theme.get().colorText.string();


export default Chart;
