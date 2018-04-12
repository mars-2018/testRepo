"use strict";

function init() {
  var cntnr = document.querySelectorAll('section');

  for (var i = 0; i < cntnr.length; i++) {
    cntnr[i].onclick = container;
  }
}


function container() {
  this.style.backgroundColor = setRGB();
}

function setRGB() {
  var retVal = '#';
  
  for (var i = 0; i <= 2; i++) {
    retVal += (Math.floor(Math.random(128) * 100 + 64)).toString(16); //Pastel-Colors
  }
  
  return retVal;
}

window.addEventListener('load', init);