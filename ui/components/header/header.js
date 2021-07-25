// JS modules
var $ = require('jquery');
var dispatcher = require('utils/dispatcher');
var EVENTS = require('utils/events');
// Styles
require('./header.scss');
require('./search-box.scss');

var breakpoints = {
  lg: 1200,
  md: 960,
  sm: 640,
  xsm: 320
};

var selectors = {
  root: '.header',
  navList: '#nav-main',
  navItem: '.nav-list__item',
  searchItem: '#nav-search-item',
  subBlock: '.header__sub',
  subItem: '.header__sub-item'
};


/**
 * @typedef {Object} headerConfig 
 * @property {Number} timeToShow
 * @property {Number} timeToHide
 * @property {Function} onInit
 * @property {Function} onBeforeShowSub
 * @property {Function} onAfterShowSub
 * @property {Function} onBeforeShowSearch
 * @property {Function} onAfterShowSearch
 *
 */

var defaults = {
  timeToShow: 50,
  timeToHide: 250,
  mobileBreakpoint: breakpoints.md,

  onInit: null,
  onBeforeShowSub: null,
  onAfterShowSub: null,
  onBeforeShowSearch: null,
  onAfterShowSearch: null
};


/**
 * The actual Header instance.
 * @constructor
 * @param {String} [selector]
 * @param {headerConfig} [config]
 */
function Header(selector, config) {
  if (!(this instanceof Header)) {
    return new Header(selector, config);
  }

  this.selectors = $.extend({}, selectors, {root: selector});
  this.config = $.extend({}, defaults, config);

  //this.init(selector);
}

/**
 * Initializing
 */
Header.prototype.init = function () {
  var onCSELoaded = function(){
    var $searchFormInput = $('input.gsc-input');
    var $searchFormSubmitButton = $('input.gsc-search-button');

    $searchFormInput.attr("placeholder", "search")
  };

  window.__gcse = {
    callback: onCSELoaded
  };

  //load google cse
  var cx = '004349664068998938688:esrfrrwnp64';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.src = '//cse.google.com/cse.js?cx=' + cx;
  gcse.async = false;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
};

module.exports = new Header();
