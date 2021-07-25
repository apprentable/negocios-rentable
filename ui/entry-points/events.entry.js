require('components/grid');
require('../components/core/core.scss');

var EventsTable = require('com/events-table');
var header = require('../components/header');

var $ = require('jquery');

$(document).ready(function () {
  header.init();

  $.ajax('/docs/events.json').done(function(data) {
    new EventsTable(document.getElementById('events'), data);
  });
  //new NavTree(document.getElementById('reference-nav'));
});