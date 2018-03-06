'use strict';

jQuery(document).ready(function($) {
  
  
  var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true,

  });

  anime({
    targets: '.logo',
    scale: 1.4,
    delay: 1000,
    duration: 1000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
  });

});