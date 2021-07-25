require('components/grid');
require('../components/core/core.scss');

var $ = require('jquery');

var header = require('../components/header');

$(document).ready(function () {
  header.init();
  //new NavTree(document.getElementById('reference-nav'));
});