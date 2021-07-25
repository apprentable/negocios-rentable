require('components/grid');
require('../components/core/core.scss');

var VideoGallery = require('com/video-gallery');
var header = require('../components/header');

var $ = require('jquery');

$(document).ready(function () {
  header.init();

  $.ajax('/docs/videos.json').done(function(data) {
    new VideoGallery(document.getElementById('video-gallery'), {
      playerElem: document.getElementById('video-player'),
      descriptionElem: document.getElementById('video-description'),
      data: data
    });
  });
  //new NavTree(document.getElementById('reference-nav'));
});