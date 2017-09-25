import 'jquery-sparkline/jquery.sparkline.js';

const Sparkline = (el, data, options) => {

  return $(el).sparkline(data, options);

};

export default Sparkline;
