var config = window.config = {};

config.colorPrimary = tinycolor($("#ref .color-primary").css("color")).toHexString();
console.log(config.colorPrimary);