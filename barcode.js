var JsBarcode = require('jsbarcode');

// Canvas v1
var Canvas = require("canvas");
// Canvas v2
var { createCanvas } = require("canvas");

// Canvas v2
var canvas = createCanvas();

JsBarcode(canvas, 'MV00800000000100B01', {format: "CODE39"});
console.log(canvas.toDataURL("image/png"));