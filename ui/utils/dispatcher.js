/**
 * Dispatcher module.
 * @module dispatcher/dispatcher
 *
 * Extends basic Node.js EventEmitter
 * @external events
 * @see https://www.npmjs.com/package/events
 * @type {EventEmitter|exports|module.exports}
 */

var eventEmitter = require('events').EventEmitter,
    EVENTS = require('./events');

function Dispatcher () {
  if (!(this instanceof Dispatcher)) {
    return new Dispatcher();
  }
}

/**
 * Set limit for number of listeners.
 * By default EventEmitters will print a warning if more than 10 listeners.
 * Set to zero for unlimited.
 *
 * @param  {Number} n
 * @return {Dispatcher}
 */

Dispatcher.prototype.setMaxListeners = eventEmitter.prototype.setMaxListeners;

/**
 * Removes all listeners, or those of the specified event.
 * It's not a good idea to remove listeners that were added elsewhere in the code,
 * especially when it's on an emitter that you didn't create
 * (e.g. sockets or file streams).
 *
 * @param {Array} events
 * @return {Dispatcher}
 * */

Dispatcher.prototype.removeAllListeners = eventEmitter.prototype.removeAllListeners;

/**
 * Removes a listener from the listener array for the specified event.
 * Caution: changes array indices in the listener array behind the listener.
 *
 * @param {String} event
 * @param {Function} listener
 * @return {Dispatcher}
 * */

Dispatcher.prototype.removeListener = eventEmitter.prototype.removeListener;

/**
 * Returns a copy of the array of listeners for the specified event.
 *
 * @param {String} event
 * @return {Array} listeners
 * */

Dispatcher.prototype.listeners = eventEmitter.prototype.listeners;

/**
 * Adds a listener to the end of the listeners array for the specified event.
 * No checks are made to see if the listener has already been added.
 * Multiple calls passing the same combination of event and listener
 * will result in the listener being added multiple times.
 *
 * @param {string} event
 * @param {Function} listener
 * @return {Dispatcher}
 * */

Dispatcher.prototype.addListener = eventEmitter.prototype.addListener;

/**
 * Adds a listener to the end of the listeners array for the specified events.
 *
 * @param {string|Array} events
 * @param {Function} handler
 * @return {Dispatcher|function}
 * */

Dispatcher.prototype.on = function(events, handler) {
  if (typeof events == 'string') {
    return this.addListener(events, handler);
  }
  else if (Array.isArray(events) && events.length == 1) {
    return this.addListener(events[0], handler);
  }
  else {
    return this.onAny(events, handler);
  }
};

/**
 * Adds a listener to all provided event names.<br>
 * To remove the listener, the returned function must be called instead of doing dispatcher.removeListener(...)
 *
 * @param {string|Array} events - The event name/s
 * @param {function} listener - The listener function
 * @returns {function} The remove listener function
 * */

Dispatcher.prototype.onAny = function (events, listener) {
  var self = this;

  var removeCalled = false;
  var removeFunction = null;

  if (events && listener && (typeof listener === 'function')) {
    if (Array.isArray(events)) {
      var index;
      for (index = 0; index < events.length; index++) {
        self.on(events[index], listener);
      }

      removeFunction = function removeListener() {
        if (!removeCalled) {
          for (index = 0; index < events.length; index++) {
            self.removeListener(events[index], listener);
          }
          removeCalled = true;
        }
      };
    } else {
      self.on(events, listener);

      removeFunction = function removeListener() {
        if (!removeCalled) {
          self.removeListener(events, listener);
          removeCalled = true;
        }
      };
    }
  } else {
    throw new Error('Missing mandatory parameters');
  }

  return removeFunction;
};

/**
 * Adds a one time listener for the event.
 * This listener is invoked only the next time the event is fired,
 * after which it is removed.
 *
 * @param {String} events
 * @param {Function} handler
 * @return {Dispatcher}
 * */

Dispatcher.prototype.once = eventEmitter.prototype.once;

/**
 * Calls each of the listeners in order with the supplied arguments.
 * Returns true if event had listeners, false otherwise.
 *
 * @param  {String} event
 * @param  {Function} listener
 * @return {Boolean}
 */

Dispatcher.prototype.emit = eventEmitter.prototype.emit;

/**
 * Adds a listener to the end of the listeners array for the Document Ready event.
 *
 * @param {Function} callback
 * @return {Dispatcher}
 * */

Dispatcher.prototype.domReady = function (callback) {
  return this.once(EVENTS.DOCUMENT.READY, callback);
};

/**
 * Create and expose new instance of `Dispatcher`
 */

module.exports = new Dispatcher();