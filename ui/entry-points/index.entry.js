require('./index.scss');
require('components/core/core.scss');

require('components/grid');
var header = require('components/header');
require('components/button');
require('fullpage.js');
require('fullpage.js/jquery.fullPage.css');

require('com/cookie-banner');

var $ = require('jquery');

$(document).ready(function () {
  header.init();

  $('#fullpage').fullpage({
    sectionsColor: ['transparent', '#3b3e43', '#fff', '#3b3e43']
  });

  $('.learn-more-button').on('click', function(){
    $.fn.fullpage.moveSectionDown();
  });

  var $tabs = $('.tabs__tab');
  var $tabPanes = $('.tabs__pane');

  $tabs.on('click', function(){
    var tabId = this.getAttribute("data-id");

    $tabs.removeClass('is-active');
    $tabPanes.removeClass('is-active');

    $('.tabs__tab[data-id=' + tabId + ']').addClass("is-active");
    $('.tabs__pane[data-tab-id=' + tabId + ']').addClass("is-active");
  })
});

