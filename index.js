$(function () {
"use strict";

// Code courtesy Github: http://goo.gl/vtSdBK
var qs = (function(a) {
  if (a === "") { return {}; }
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p=a[i].split('=');
    if (p.length !== 2) { continue; }
    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

var badRobot = qs["badRobot"];
if (typeof badRobot !== "undefined") {
  bootbox.alert("Yep, bad robots ahead. You best check on " + badRobot + '.');
}

});
