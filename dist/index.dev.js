"use strict";

function playSound(e) {
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  var key = document.querySelector(".piano-key[data-key=\"".concat(e.keyCode, "\"]"));
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

var keys = document.querySelectorAll(".btn");
keys.forEach(function (e) {
  return e.addEventListener("click", function (c) {
    var audio = document.querySelectorAll("audio");
    var key = document.querySelectorAll(".btn");
    var keyCode = c.target.attributes[0].value;
    audio.forEach(function (e) {
      if (e.attributes[0].value == keyCode) {
        audio.currentTime = 0;
        e.play();
      }
    });
  });
});
window.addEventListener("keyup", playSound);