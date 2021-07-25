/**
 * Module representing the events dictionary.
 * @module events
 * @type {object}
 */

var EVENTS = {
  WINDOW: {
    SCROLL: 'window:scroll',
    RESIZE: 'window:resize',
    KEYPRESS: 'window:keypress'
  },

  DOCUMENT: {
    READY: 'document:ready'
  },

  HEADER: {
    FIXED: 'header:fixed',
    UNFIXED: 'header:unfixed',
    SHOWNAV: 'header:showNav',
    HIDENAV: 'header:hideNav'
  }
};

module.exports = EVENTS;