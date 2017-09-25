const Util = {};

Util.getViewportWidth = function() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

Util.getViewportName = function() {
  var viewportWidth = Util.getViewportWidth();

  if (viewportWidth < 576) {
    return 'xs';
  }
  else if (viewportWidth >= 576 &&  viewportWidth < 768) {
    return 'sm';
  }
  else if (viewportWidth >= 768 &&  viewportWidth < 992) {
    return 'md';
  }
  else if (viewportWidth >= 992 &&  viewportWidth < 1200) {
    return 'lg';
  }
  else {
    return 'xl';
  }
};

Util.randomScalingFactor = function() {
  return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};


Util.addEventListener = function (el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function() {
      handler.call(el);
    });
  }
};

Util.triggerEvent = function (el, eventName, options) {
  var event;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, options);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, options);
  }
  el.dispatchEvent(event);
};


Util.empty = function (el) {

  if (!el) return;

  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};


Util.isHidden = function (el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none');
};

Util.isVisible = function(el) {
  return !Util.isHidden(el);
};



export default Util;
