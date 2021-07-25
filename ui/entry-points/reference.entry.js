require('components/grid');
require('../components/core/core.scss');

var NavTree = require('com/nav-tree');
var header = require('../components/header');

var $ = require('jquery');

$(document).ready(function () {
  header.init();
  new NavTree(document.getElementById('reference-nav'));
});