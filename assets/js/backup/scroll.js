window.requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(f){setTimeout(f, 1000/60)};

var layer1 = document.getElementById('layer1');
var layer2 = document.getElementById('layer2');
var layer3 = document.getElementById('layer3');
var layer4 = document.getElementById('layer4');
var layer5 = document.getElementById('layer5');
var layer6 = document.getElementById('layer6');
var header = document.getElementById('header');
var header2 = document.getElementById('outer-header');

function parallax(){
  var scrolltop = window.pageYOffset;
  layer1.style.top = -scrolltop * .4 +0+ 'px';
  layer2.style.top = -scrolltop * .45 +0+'px';
  layer3.style.top = -scrolltop * .5 +0+ 'px';
  layer4.style.top = -scrolltop * .55 +0+ 'px';
  layer5.style.top = -scrolltop * .65 +0+ 'px';
  layer6.style.top = -scrolltop * .8 +0+ 'px';


  var headerSize = header2.getBoundingClientRect();
  if (headerSize.top <= 0) {
    header.style.position = 'fixed';
  } else {
    header.style.position = 'static';
  }
}

window.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(parallax); // call parallaxbubbles() on next available screen paint
}, false)
