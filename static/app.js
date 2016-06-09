/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _app = __webpack_require__(4);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(86);
	
	var $appContainer = (0, _jquery2.default)('[data-role="app"]'),
	    appView = new _app2.default();
	
	$appContainer.append(appView.render().el);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	//     Backbone.js 1.3.3
	
	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org
	
	(function (factory) {
	
	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.global === global && global;
	
	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(3), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	    // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	      var _ = require('underscore'),
	          $;
	      try {
	        $ = require('jquery');
	      } catch (e) {}
	      factory(root, exports, _, $);
	
	      // Finally, as a browser global.
	    } else {
	        root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
	      }
	})(function (root, Backbone, _, $) {
	
	  // Initial Setup
	  // -------------
	
	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;
	
	  // Create a local reference to a common array method we'll want to use later.
	  var _slice = Array.prototype.slice;
	
	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';
	
	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;
	
	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function () {
	    root.Backbone = previousBackbone;
	    return this;
	  };
	
	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;
	
	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;
	
	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function addMethod(length, method, attribute) {
	    switch (length) {
	      case 1:
	        return function () {
	          return _[method](this[attribute]);
	        };
	      case 2:
	        return function (value) {
	          return _[method](this[attribute], value);
	        };
	      case 3:
	        return function (iteratee, context) {
	          return _[method](this[attribute], cb(iteratee, this), context);
	        };
	      case 4:
	        return function (iteratee, defaultVal, context) {
	          return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	        };
	      default:
	        return function () {
	          var args = _slice.call(arguments);
	          args.unshift(this[attribute]);
	          return _[method].apply(_, args);
	        };
	    }
	  };
	  var addUnderscoreMethods = function addUnderscoreMethods(Class, methods, attribute) {
	    _.each(methods, function (length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };
	
	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function cb(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function (model) {
	      return model.get(iteratee);
	    };
	    return iteratee;
	  };
	  var modelMatcher = function modelMatcher(attrs) {
	    var matcher = _.matches(attrs);
	    return function (model) {
	      return matcher(model.attributes);
	    };
	  };
	
	  // Backbone.Events
	  // ---------------
	
	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};
	
	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;
	
	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function eventsApi(iteratee, events, name, callback, opts) {
	    var i = 0,
	        names;
	    if (name && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };
	
	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function (name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };
	
	  // Guard the `listening` argument from the public API.
	  var internalOn = function internalOn(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });
	
	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }
	
	    return obj;
	  };
	
	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function (obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];
	
	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
	    }
	
	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };
	
	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function onApi(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context,
	          ctx = options.ctx,
	          listening = options.listening;
	      if (listening) listening.count++;
	
	      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
	    }
	    return events;
	  };
	
	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function (name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };
	
	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function (obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;
	
	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);
	
	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];
	
	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;
	
	      listening.obj.off(name, callback, this);
	    }
	
	    return this;
	  };
	
	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function offApi(events, name, callback, options) {
	    if (!events) return;
	
	    var i = 0,
	        listening;
	    var context = options.context,
	        listeners = options.listeners;
	
	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }
	
	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];
	
	      // Bail out if there are no events stored.
	      if (!handlers) break;
	
	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }
	
	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };
	
	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function (name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };
	
	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function (obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };
	
	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function onceMap(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function () {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };
	
	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function (name) {
	    if (!this._events) return this;
	
	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) {
	      args[i] = arguments[i + 1];
	    }eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };
	
	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function triggerApi(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };
	
	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function triggerEvents(events, args) {
	    var ev,
	        i = -1,
	        l = events.length,
	        a1 = args[0],
	        a2 = args[1],
	        a3 = args[2];
	    switch (args.length) {
	      case 0:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx);
	        }return;
	      case 1:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx, a1);
	        }return;
	      case 2:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx, a1, a2);
	        }return;
	      case 3:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
	        }return;
	      default:
	        while (++i < l) {
	          (ev = events[i]).callback.apply(ev.ctx, args);
	        }return;
	    }
	  };
	
	  // Aliases for backwards compatibility.
	  Events.bind = Events.on;
	  Events.unbind = Events.off;
	
	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);
	
	  // Backbone.Model
	  // --------------
	
	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.
	
	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function (attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };
	
	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {
	
	    // A hash of attributes whose current and previous value differ.
	    changed: null,
	
	    // The value returned during the last failed validation.
	    validationError: null,
	
	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',
	
	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // Return a copy of the model's `attributes` object.
	    toJSON: function toJSON(options) {
	      return _.clone(this.attributes);
	    },
	
	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function sync() {
	      return Backbone.sync.apply(this, arguments);
	    },
	
	    // Get the value of an attribute.
	    get: function get(attr) {
	      return this.attributes[attr];
	    },
	
	    // Get the HTML-escaped value of an attribute.
	    escape: function escape(attr) {
	      return _.escape(this.get(attr));
	    },
	
	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function has(attr) {
	      return this.get(attr) != null;
	    },
	
	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function matches(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },
	
	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function set(key, val, options) {
	      if (key == null) return this;
	
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }
	
	      options || (options = {});
	
	      // Run validation.
	      if (!this._validate(attrs, options)) return false;
	
	      // Extract attributes and options.
	      var unset = options.unset;
	      var silent = options.silent;
	      var changes = [];
	      var changing = this._changing;
	      this._changing = true;
	
	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }
	
	      var current = this.attributes;
	      var changed = this.changed;
	      var prev = this._previousAttributes;
	
	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }
	
	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);
	
	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }
	
	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },
	
	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function unset(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, { unset: true }));
	    },
	
	    // Clear all attributes on the model, firing `"change"`.
	    clear: function clear(options) {
	      var attrs = {};
	      for (var key in this.attributes) {
	        attrs[key] = void 0;
	      }return this.set(attrs, _.extend({}, options, { unset: true }));
	    },
	
	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function hasChanged(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },
	
	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function changedAttributes(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },
	
	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function previous(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },
	
	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function previousAttributes() {
	      return _.clone(this._previousAttributes);
	    },
	
	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function fetch(options) {
	      options = _.extend({ parse: true }, options);
	      var model = this;
	      var success = options.success;
	      options.success = function (resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },
	
	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function save(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }
	
	      options = _.extend({ validate: true, parse: true }, options);
	      var wait = options.wait;
	
	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }
	
	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function (resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	
	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);
	
	      var method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);
	
	      // Restore attributes.
	      this.attributes = attributes;
	
	      return xhr;
	    },
	
	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function destroy(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;
	
	      var destroy = function destroy() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };
	
	      options.success = function (resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };
	
	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },
	
	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function url() {
	      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },
	
	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function parse(resp, options) {
	      return resp;
	    },
	
	    // Create a new model with identical attributes to this one.
	    clone: function clone() {
	      return new this.constructor(this.attributes);
	    },
	
	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function isNew() {
	      return !this.has(this.idAttribute);
	    },
	
	    // Check if the model is currently in a valid state.
	    isValid: function isValid(options) {
	      return this._validate({}, _.extend({}, options, { validate: true }));
	    },
	
	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function _validate(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, { validationError: error }));
	      return false;
	    }
	
	  });
	
	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	    omit: 0, chain: 1, isEmpty: 1 };
	
	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');
	
	  // Backbone.Collection
	  // -------------------
	
	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.
	
	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function (models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({ silent: true }, options));
	  };
	
	  // Default options for `Collection#set`.
	  var setOptions = { add: true, remove: true, merge: true };
	  var addOptions = { add: true, remove: false };
	
	  // Splices `insert` into `array` at index `at`.
	  var splice = function splice(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) {
	      tail[i] = array[i + at];
	    }for (i = 0; i < length; i++) {
	      array[i + at] = insert[i];
	    }for (i = 0; i < tail.length; i++) {
	      array[i + length + at] = tail[i];
	    }
	  };
	
	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {
	
	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function toJSON(options) {
	      return this.map(function (model) {
	        return model.toJSON(options);
	      });
	    },
	
	    // Proxy `Backbone.sync` by default.
	    sync: function sync() {
	      return Backbone.sync.apply(this, arguments);
	    },
	
	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function add(models, options) {
	      return this.set(models, _.extend({ merge: false }, options, addOptions));
	    },
	
	    // Remove a model, or a list of models from the set.
	    remove: function remove(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = { added: [], merged: [], removed: removed };
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },
	
	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function set(models, options) {
	      if (models == null) return;
	
	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }
	
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	
	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;
	
	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};
	
	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;
	
	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
	
	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];
	
	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;
	
	          // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	            model = models[i] = this._prepareModel(model, options);
	            if (model) {
	              toAdd.push(model);
	              this._addReference(model, options);
	              modelMap[model.cid] = true;
	              set.push(model);
	            }
	          }
	      }
	
	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }
	
	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function (m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }
	
	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({ silent: true });
	
	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }
	
	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },
	
	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function reset(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({ silent: true }, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },
	
	    // Add a model to the end of the collection.
	    push: function push(model, options) {
	      return this.add(model, _.extend({ at: this.length }, options));
	    },
	
	    // Remove a model from the end of the collection.
	    pop: function pop(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },
	
	    // Add a model to the beginning of the collection.
	    unshift: function unshift(model, options) {
	      return this.add(model, _.extend({ at: 0 }, options));
	    },
	
	    // Remove a model from the beginning of the collection.
	    shift: function shift(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },
	
	    // Slice out a sub-array of models from the collection.
	    slice: function slice() {
	      return _slice.apply(this.models, arguments);
	    },
	
	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function get(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] || this._byId[this.modelId(obj.attributes || obj)] || obj.cid && this._byId[obj.cid];
	    },
	
	    // Returns `true` if the model is in the collection.
	    has: function has(obj) {
	      return this.get(obj) != null;
	    },
	
	    // Get the model at the given index.
	    at: function at(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },
	
	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function where(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },
	
	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function findWhere(attrs) {
	      return this.where(attrs, true);
	    },
	
	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function sort(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});
	
	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);
	
	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },
	
	    // Pluck an attribute from each model in the collection.
	    pluck: function pluck(attr) {
	      return this.map(attr + '');
	    },
	
	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function fetch(options) {
	      options = _.extend({ parse: true }, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function (resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },
	
	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function create(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function (m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },
	
	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function parse(resp, options) {
	      return resp;
	    },
	
	    // Create a new collection with an identical list of models as this one.
	    clone: function clone() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },
	
	    // Define how to uniquely identify models in the collection.
	    modelId: function modelId(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },
	
	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function _reset() {
	      this.length = 0;
	      this.models = [];
	      this._byId = {};
	    },
	
	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function _prepareModel(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },
	
	    // Internal method called by both remove and set.
	    _removeModels: function _removeModels(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;
	
	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	
	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];
	
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	
	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },
	
	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function _isModel(model) {
	      return model instanceof Model;
	    },
	
	    // Internal method to create a model's ties to a collection.
	    _addReference: function _addReference(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },
	
	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function _removeReference(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },
	
	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function _onModelEvent(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }
	
	  });
	
	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	    foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	    select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	    contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	    head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	    without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	    isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	    sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3 };
	
	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');
	
	  // Backbone.View
	  // -------------
	
	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.
	
	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function (options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };
	
	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;
	
	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
	
	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {
	
	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',
	
	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function $(selector) {
	      return this.$el.find(selector);
	    },
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function render() {
	      return this;
	    },
	
	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function remove() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },
	
	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function _removeElement() {
	      this.$el.remove();
	    },
	
	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function setElement(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },
	
	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function _setElement(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },
	
	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function delegateEvents(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },
	
	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function delegate(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },
	
	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function undelegateEvents() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },
	
	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function undelegate(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },
	
	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function _createElement(tagName) {
	      return document.createElement(tagName);
	    },
	
	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function _ensureElement() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },
	
	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function _setAttributes(attributes) {
	      this.$el.attr(attributes);
	    }
	
	  });
	
	  // Backbone.sync
	  // -------------
	
	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function (method, model, options) {
	    var type = methodMap[method];
	
	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });
	
	    // Default JSON-request options.
	    var params = { type: type, dataType: 'json' };
	
	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }
	
	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }
	
	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? { model: params.data } : {};
	    }
	
	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function (xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }
	
	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }
	
	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function (xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };
	
	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };
	
	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };
	
	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function () {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };
	
	  // Backbone.Router
	  // ---------------
	
	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function (options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };
	
	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam = /(\(\?)?:\w+/g;
	  var splatParam = /\*\w+/g;
	  var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	
	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function route(_route, name, callback) {
	      if (!_.isRegExp(_route)) _route = this._routeToRegExp(_route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(_route, function (fragment) {
	        var args = router._extractParameters(_route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },
	
	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function execute(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },
	
	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function navigate(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },
	
	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function _bindRoutes() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route,
	          routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },
	
	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function _routeToRegExp(route) {
	      route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
	        return optional ? match : '([^/?]+)';
	      }).replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },
	
	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function _extractParameters(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function (param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }
	
	  });
	
	  // Backbone.History
	  // ----------------
	
	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function () {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);
	
	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };
	
	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;
	
	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;
	
	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;
	
	  // Has the history handling already been started?
	  History.started = false;
	
	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {
	
	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,
	
	    // Are we at the app root?
	    atRoot: function atRoot() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },
	
	    // Does the pathname match the root?
	    matchRoot: function matchRoot() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },
	
	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function decodeFragment(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },
	
	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function getSearch() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },
	
	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function getHash(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },
	
	    // Get the pathname and search params, without the root.
	    getPath: function getPath() {
	      var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },
	
	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function getFragment(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },
	
	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function start(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;
	
	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options = _.extend({ root: '/' }, this.options, options);
	      this.root = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState = !!this.options.pushState;
	      this._hasPushState = !!(this.history && this.history.pushState);
	      this._usePushState = this._wantsPushState && this._hasPushState;
	      this.fragment = this.getFragment();
	
	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');
	
	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {
	
	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;
	
	          // Or if we've started out with a hash-based route, but we're currently
	          // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	            this.navigate(this.getHash(), { replace: true });
	          }
	      }
	
	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }
	
	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function (eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };
	
	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }
	
	      if (!this.options.silent) return this.loadUrl();
	    },
	
	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function stop() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function (eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };
	
	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }
	
	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }
	
	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },
	
	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function route(_route2, callback) {
	      this.handlers.unshift({ route: _route2, callback: callback });
	    },
	
	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function checkUrl(e) {
	      var current = this.getFragment();
	
	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }
	
	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },
	
	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function loadUrl(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function (handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },
	
	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function navigate(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = { trigger: !!options };
	
	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');
	
	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;
	
	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));
	
	      if (this.fragment === fragment) return;
	      this.fragment = fragment;
	
	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
	
	        // If hash changes haven't been explicitly disabled, update the hash
	        // fragment to store history.
	      } else if (this._wantsHashChange) {
	          this._updateHash(this.location, fragment, options.replace);
	          if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	            var iWindow = this.iframe.contentWindow;
	
	            // Opening and closing the iframe tricks IE7 and earlier to push a
	            // history entry on hash-tag change.  When replace is true, we don't
	            // want this.
	            if (!options.replace) {
	              iWindow.document.open();
	              iWindow.document.close();
	            }
	
	            this._updateHash(iWindow.location, fragment, options.replace);
	          }
	
	          // If you've told us that you explicitly don't want fallback hashchange-
	          // based history, then `navigate` becomes a page refresh.
	        } else {
	            return this.location.assign(url);
	          }
	      if (options.trigger) return this.loadUrl(fragment);
	    },
	
	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function _updateHash(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }
	
	  });
	
	  // Create the default Backbone.history.
	  Backbone.history = new History();
	
	  // Helpers
	  // -------
	
	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function extend(protoProps, staticProps) {
	    var parent = this;
	    var child;
	
	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function child() {
	        return parent.apply(this, arguments);
	      };
	    }
	
	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);
	
	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;
	
	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;
	
	    return child;
	  };
	
	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
	
	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function urlError() {
	    throw new Error('A "url" property or function must be specified');
	  };
	
	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function wrapError(model, options) {
	    var error = options.error;
	    options.error = function (resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };
	
	  return Backbone;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function () {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype,
	      ObjProto = Object.prototype,
	      FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys,
	      nativeBind = FuncProto.bind,
	      nativeCreate = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function Ctor() {};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function _(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function optimizeCb(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1:
	        return function (value) {
	          return func.call(context, value);
	        };
	      case 2:
	        return function (value, other) {
	          return func.call(context, value, other);
	        };
	      case 3:
	        return function (value, index, collection) {
	          return func.call(context, value, index, collection);
	        };
	      case 4:
	        return function (accumulator, value, index, collection) {
	          return func.call(context, accumulator, value, index, collection);
	        };
	    }
	    return function () {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function cb(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function (value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
	    return function (obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function baseCreate(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor();
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function property(key) {
	    return function (obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function isArrayLike(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function (obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function (obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function (obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function (obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function (value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function (obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function (obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function (value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function (obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function (obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function (obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function (obj, iteratee, context) {
	    var result = -Infinity,
	        lastComputed = -Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function (obj, iteratee, context) {
	    var result = Infinity,
	        lastComputed = Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function (obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function (obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function (value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function (left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function group(behavior) {
	    return function (obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function (result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key]++;else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function (obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function (obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [],
	        fail = [];
	    _.each(obj, function (value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function (array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function (array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function (array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function flatten(input, shallow, strict, startIndex) {
	    var output = [],
	        idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0,
	            len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function (array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function (array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function () {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function (array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function (array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function (value) {
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function () {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function (array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function (list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function (array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function (array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0,
	        high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function (array, item, idx) {
	      var i = 0,
	          length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	          i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function (start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function (func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function bound() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function (func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function bound() {
	      var position = 0,
	          length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) {
	        args.push(arguments[position++]);
	      }return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function (obj) {
	    var i,
	        length = arguments.length,
	        key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function (func, hasher) {
	    var memoize = function memoize(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function (func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function () {
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function (func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function later() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function () {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function (func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function later() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function () {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function (func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function (predicate) {
	    return function () {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function () {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) {
	        result = args[i].call(this, result);
	      }return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function (times, func) {
	    return function () {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function (times, func) {
	    var memo;
	    return function () {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) {
	      if (_.has(obj, key)) keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) {
	      keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = _.keys(obj),
	        length = keys.length,
	        results = {},
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys[index];
	      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function (obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function (obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj),
	        key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function (object, oiteratee, context) {
	    var result = {},
	        obj = object,
	        iteratee,
	        keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function iteratee(value, key, obj) {
	        return key in obj;
	      };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	  // Return a copy of the object without the blacklisted properties.
	  _.omit = function (obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function iteratee(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function (prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function (obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function (obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function (object, attrs) {
	    var keys = _.keys(attrs),
	        length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor,
	          bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a),
	          key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function (a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function (obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function (obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function (obj) {
	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
	    _['is' + name] = function (obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function (obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
	    _.isFunction = function (obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function (obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function (obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function (obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function (obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function (obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function (obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function () {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function (value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function (value) {
	    return function () {
	      return value;
	    };
	  };
	
	  _.noop = function () {};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function (obj) {
	    return obj == null ? function () {} : function (key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function (attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function (obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function (n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) {
	      accum[i] = iteratee(i);
	    }return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function (min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function () {
	    return new Date().getTime();
	  };
	
	  // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function createEscaper(map) {
	    var escaper = function escaper(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function (string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function (object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function (prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate: /<%([\s\S]+?)%>/g,
	    interpolate: /<%=([\s\S]+?)%>/g,
	    escape: /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'": "'",
	    '\\': '\\',
	    '\r': 'r',
	    '\n': 'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function escapeChar(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function (text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function template(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function (obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function result(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function (obj) {
	    _.each(_.functions(obj), function (name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function () {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function () {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function () {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(undefined);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];
	
	var document = window.document;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "2.2.3",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
	
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
	
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
	
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
	
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		register: function( owner, initial ) {
			var value = initial || {};
	
			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;
	
			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {
	
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key === undefined ) {
				this.register( owner );
	
			} else {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
	
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
	
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data, camelKey;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||
	
						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );
	
					if ( data !== undefined ) {
						return data;
					}
	
					camelKey = jQuery.camelCase( key );
	
					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {
	
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =
	
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
		}
	
		jQuery.extend( support, {
			pixelPosition: function() {
	
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );
	
				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );
	
				documentElement.removeChild( container );
				div.removeChild( marginDiv );
	
				return ret;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {
	
			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
	
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
	
					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);
	
			jQuery.event.trigger( e, null, elem );
	
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _how = __webpack_require__(6);
	
	var _how2 = _interopRequireDefault(_how);
	
	var _why = __webpack_require__(52);
	
	var _why2 = _interopRequireDefault(_why);
	
	var _counters = __webpack_require__(79);
	
	var _counters2 = _interopRequireDefault(_counters);
	
	var _app = __webpack_require__(83);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
	
				this._router = new _backbone2.default.Router({
					routes: {
						'': this._routeHandler.bind(this, 'why'),
						'how': this._routeHandler.bind(this, 'how'),
						'why': this._routeHandler.bind(this, 'why'),
						':whatever': this._redirect.bind(this, 'why')
					}
				});
				!_backbone2.default.History.started && _backbone2.default.history.start();
			}
		}, {
			key: '_redirect',
			value: function _redirect() {
				var pageName = arguments.length <= 0 || arguments[0] === undefined ? 'why' : arguments[0];
	
				this._scrollTo(0);
				this._router.navigate(pageName, true);
			}
		}, {
			key: '_routeHandler',
			value: function _routeHandler(pageName) {
				this._scrollTo(0);
				this._renderPage(pageName);
			}
		}, {
			key: '_scrollTo',
			value: function _scrollTo(position) {
				(0, _jquery2.default)('body, html').scrollTop(position);
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				_underscore2.default.extend(data, {
					// city: this.geoModel.get('city'),
					styles: _app2.default
				});
				return data;
			}
		}, {
			key: '_renderPage',
			value: function _renderPage(pageName) {
				this.removeChildren('app-container');
				var pageView = this.registerChild(new this._pages[pageName](), 'app-container');
				this.appendChildren('app-container');
				return pageView;
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(85);
			}
		}, {
			key: '_pages',
			get: function get() {
				return {
					how: _how2.default,
					why: _why2.default
				};
			}
		}, {
			key: 'className',
			get: function get() {
				return _app2.default.root;
			}
		}, {
			key: 'events',
			get: function get() {
				var _this2 = this;
	
				return {
					'click [data-action="scroll-to"]': function clickDataActionScrollTo(e) {
						var $element = (0, _jquery2.default)('' + (0, _jquery2.default)(e.currentTarget).data('element'));
						$element.length && _this2._scrollTo($element.offset().top);
						return false;
					},
	
					'click [data-action="redirect-and-scroll-to"]': function clickDataActionRedirectAndScrollTo(e) {
						var pageName = (0, _jquery2.default)(e.currentTarget).data('page');
						_this2._redirect(pageName);
						var $element = (0, _jquery2.default)('' + (0, _jquery2.default)(e.currentTarget).data('element'));
						$element.length && _this2._scrollTo($element.offset().top);
						return false;
					}
				};
			}
		}]);

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Backbone$View) {
		_inherits(_class, _Backbone$View);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'initialize',
			value: function initialize() {
				var _this2 = this;
	
				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				_underscore2.default.extend(this, options);
				this._children = {};
				this.on('appended', function () {
					_this2._appended();
				});
				this.init && this.init(options);
			}
		}, {
			key: 'render',
			value: function render(data) {
				this.$el.html(this._template(this._prepareData(data)));
				!_underscore2.default.isEmpty(this._children) && this.appendChildren.apply(this, _underscore2.default.keys(this._children));
				return this;
			}
		}, {
			key: 'createChild',
			value: function createChild(view, containerName, $container) {
				console.warn('deprecated method BaseView.createChild');
				return this.registerChild(view, containerName);
			}
		}, {
			key: 'registerChild',
			value: function registerChild(view, containerName) {
				this._children[containerName] ? this._children[containerName].push(view) : this._children[containerName] = [view];
				return view;
			}
		}, {
			key: 'removeChildren',
			value: function removeChildren() {
				var _this3 = this;
	
				for (var _len = arguments.length, containerNames = Array(_len), _key = 0; _key < _len; _key++) {
					containerNames[_key] = arguments[_key];
				}
	
				if (!containerNames.length) containerNames = _underscore2.default.keys(this._children);
				_underscore2.default.each(containerNames, function (containerName) {
					_underscore2.default.invoke(_this3._children[containerName], 'remove');
					delete _this3._children[containerName];
				});
				return this;
			}
		}, {
			key: 'appendChildren',
			value: function appendChildren() {
				var _this4 = this;
	
				for (var _len2 = arguments.length, containerNames = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					containerNames[_key2] = arguments[_key2];
				}
	
				if (!containerNames.length) containerNames = _underscore2.default.keys(this._children);
	
				_underscore2.default.each(containerNames, function (containerName) {
					_underscore2.default.invoke(_this4._children[containerName], 'delegateEvents');
					_this4.$('[data-view=' + containerName + ']').append(_underscore2.default.pluck(_this4._children[containerName], '$el'));
					_underscore2.default.each(_this4._children[containerName], function (child) {
						child._appended();
						child.appendChildren();
					});
				});
			}
		}, {
			key: '_appended',
			value: function _appended() {}
		}, {
			key: 'remove',
			value: function remove() {
				this.removeChildren();
				_get(Object.getPrototypeOf(_class.prototype), 'remove', this).call(this);
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				return data;
			}
		}]);
	
		return _class;
	}(_backbone2.default.View);
	
	exports.default = _class;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _page = __webpack_require__(7);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _share = __webpack_require__(8);
	
	var _share2 = _interopRequireDefault(_share);
	
	var _map = __webpack_require__(10);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _geo = __webpack_require__(16);
	
	var _geo2 = _interopRequireDefault(_geo);
	
	var _cities = __webpack_require__(18);
	
	var _cities2 = _interopRequireDefault(_cities);
	
	var _cities3 = __webpack_require__(20);
	
	var _cities4 = _interopRequireDefault(_cities3);
	
	var _page3 = __webpack_require__(21);
	
	var _page4 = _interopRequireDefault(_page3);
	
	var _typography = __webpack_require__(23);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _inputs = __webpack_require__(25);
	
	var _inputs2 = _interopRequireDefault(_inputs);
	
	var _how = __webpack_require__(27);
	
	var _how2 = _interopRequireDefault(_how);
	
	var _share3 = __webpack_require__(29);
	
	var _share4 = _interopRequireDefault(_share3);
	
	var _typograf = __webpack_require__(88);
	
	var _typograf2 = _interopRequireDefault(_typograf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var tp = new _typograf2.default({ lang: 'ru' });
	
	var citiesCollection = new _cities2.default();
	
	_cities4.default.forEach(function (city) {
		citiesCollection.add(city);
	});
	
	var HowShareView = function (_ShareView) {
		_inherits(HowShareView, _ShareView);
	
		function HowShareView() {
			_classCallCheck(this, HowShareView);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(HowShareView).apply(this, arguments));
		}
	
		_createClass(HowShareView, [{
			key: '_prepareData',
			value: function _prepareData() {
				return _underscore2.default.extend(_get(Object.getPrototypeOf(HowShareView.prototype), '_prepareData', this).call(this), { share: _share4.default });
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(31);
			}
		}]);
	
		return HowShareView;
	}(_share2.default);
	
	var ShareModel = function (_Backbone$Model) {
		_inherits(ShareModel, _Backbone$Model);
	
		function ShareModel() {
			_classCallCheck(this, ShareModel);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ShareModel).apply(this, arguments));
		}
	
		_createClass(ShareModel, [{
			key: 'defaults',
			get: function get() {
				return {
					title: 'Как стать донором костного мозга',
					description: 'И зачем это нужно. Рассказываем о донорстве костного мозга, чтобы увеличить российский регистр и помочь людям находить подходящих доноров. Присоединяйтесь!',
					image: 'http://arthurstam.github.io/static/share_main.png'
				};
			}
		}]);
	
		return ShareModel;
	}(_backbone2.default.Model);
	
	var _class = function (_PageView) {
		_inherits(_class, _PageView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				var _this4 = this;
	
				this.geoModel = new _geo2.default();
	
				ymaps.ready(function () {
					if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(function (position) {
							_this4.geoModel.fetch(position.coords.latitude, position.coords.longitude).then(function () {
								var city = _this4._findCity(_this4.geoModel.get('placeId'));
								if (city) {
									_this4._setCity(city);
								} else {
									_this4.render({
										error: {
											emptyCity: true,
											data: {
												formattedAddress: _this4.geoModel.get('formattedAddress')
											}
										}
									});
									return;
								}
								_this4.render();
							}, function (error) {
								_this4.render();
							});
						}, function (error) {
							_this4.render();
						});
					}
				});
			}
		}, {
			key: '_findCity',
			value: function _findCity(placeId) {
				return citiesCollection.find(function (city) {
					return city.get('placeId') == placeId;
				});
			}
		}, {
			key: '_setCity',
			value: function _setCity(city) {
				var placeId = city ? city.get('placeId') : null;
				citiesCollection.each(function (city) {
					city.selected = city.get('placeId') == placeId;
				});
				this.currentCity = city;
				return city;
			}
		}, {
			key: 'render',
			value: function render() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				_get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this, data);
				if (this.currentCity) {
					this.removeChildren('how-map');
					var mapView = this.registerChild(new _map2.default({
						city: this.currentCity
					}), 'how-map');
					this.appendChildren('how-map');
					mapView.render();
				}
				return this;
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				_underscore2.default.extend(data, {
					page: _page4.default,
					typography: _typography2.default,
					inputs: _inputs2.default,
					how: _how2.default,
					share: _share4.default
				});
	
				data.citiesCollection = citiesCollection;
				data.currentCity = this.currentCity;
				if (data.error) {
					return data;
				}
	
				if (this.currentCity) {
					var points = _underscore2.default.clone(this.currentCity.get('points'));
					points.forEach(function (point) {
						if (point.info) {
							point.info = tp.execute(point.info);
						}
						if (point.time) {
							point.time = tp.execute(point.time);
						}
					});
					data.firstPoint = points.shift();
					data.oddPoints = _underscore2.default.filter(points, function (point, index) {
						return index % 2;
					});
					data.evenPoints = _underscore2.default.filter(points, function (point, index) {
						return !(index % 2);
					});
				}
	
				return data;
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(51);
			}
		}, {
			key: 'events',
			get: function get() {
				var _this5 = this;
	
				return {
					'change [data-action="select-city"]': function changeDataActionSelectCity(e) {
						var placeId = (0, _jquery2.default)(e.currentTarget).val();
						var city = _this5._findCity(placeId);
						_this5._setCity(city);
						_this5.render();
					},
	
					'click [data-action="show-all-points"]': function clickDataActionShowAllPoints(e) {
						_this5.$el.find('[data-action="show-all-points"]').hide();
						_this5.$el.find('[data-action="hide-all-points"]').show();
						_this5.$el.find('[data-role="all-points"]').show();
					},
	
					'click [data-action="hide-all-points"]': function clickDataActionHideAllPoints(e) {
						_this5.$el.find('[data-action="show-all-points"]').show();
						_this5.$el.find('[data-action="hide-all-points"]').hide();
						_this5.$el.find('[data-role="all-points"]').hide();
					}
				};
			}
		}]);

		return _class;
	}(_page2.default);

	exports.default = _class;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);

		function _class() {
			_classCallCheck(this, _class);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _config = __webpack_require__(9);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				this.listenTo(this.shareModel, 'change', this.render);
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var shareUrl = _config2.default.api.url + '/share?title=' + encodeURIComponent(this.shareModel.get('title')) + '&description=' + encodeURIComponent(this.shareModel.get('description')) + '&image=' + encodeURIComponent(this.shareModel.get('image')) + '&redirect_url=' + encodeURIComponent(location.href);
				return {
					vkUrl: this._generateVkUrl(shareUrl),
					fbUrl: this._generateFbUrl(shareUrl)
				};
			}
		}, {
			key: '_generateVkUrl',
			value: function _generateVkUrl(shareUrl) {
				return 'https://vk.com/share.php?url=' + encodeURIComponent(shareUrl);
			}
		}, {
			key: '_generateFbUrl',
			value: function _generateFbUrl(shareUrl) {
				return 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);
			}
		}]);

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		api: {
			url: 'https://donor-api.herokuapp.com'
		}
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _map = __webpack_require__(11);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {}
		}, {
			key: 'render',
			value: function render() {
				_get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);
				this._renderMap();
				return this;
			}
		}, {
			key: '_renderMap',
			value: function _renderMap() {
				this.$el.attr('id', 'map');
				this._map = new ymaps.Map('map', {
					center: [this.city.get('coords')[0], this.city.get('coords')[1]],
					zoom: 4
				});
				this._addPlacemarks(this.city.get('points'));
			}
		}, {
			key: 'remove',
			value: function remove() {
				this._map.destroy();
				return _get(Object.getPrototypeOf(_class.prototype), 'remove', this).call(this);
			}
		}, {
			key: '_addPlacemarks',
			value: function _addPlacemarks(points) {
				var coords = _underscore2.default.pluck(points, 'coords');
	
				var collection = new ymaps.GeoObjectCollection({}, {
					preset: 'islands#redIcon'
				});
	
				for (var i = 0; i < coords.length; i++) {
					var placemark = new ymaps.Placemark(coords[i]);
					placemark.properties.set('balloonContent', points[i].address + '<br>' + points[i].name);
					collection.add(placemark);
				}
	
				this._map.geoObjects.add(collection);
				this._map.setBounds(this._map.geoObjects.getBounds());
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				return {
					styles: _map2.default
				};
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(15);
			}
		}, {
			key: 'className',
			get: function get() {
				return _map2.default.root;
			}
		}]);

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./map.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./map.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".k7lRAK3VJqzyYxR8yJVXx {\n\twidth: 100%;\n\theight: 100%;\n}", ""]);
	
	// exports
	exports.locals = {
		"root": "k7lRAK3VJqzyYxR8yJVXx"
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(){return "";};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _ajax = __webpack_require__(17);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Backbone$Model) {
		_inherits(_class, _Backbone$Model);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'fetch',
			value: function fetch(lat, lon) {
				var _this2 = this;
	
				return new Promise(function (resolve, reject) {
					(0, _ajax2.default)({
						url: location.protocol + '//maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&sensor=true&language=ru',
						type: 'get'
					}).then(function (response) {
						var locality = _underscore2.default.find(response.results, function (item) {
							return _underscore2.default.contains(item.types, 'locality');
						});
						_this2.set('formattedAddress', locality.formatted_address).set('placeId', locality.place_id);
						resolve();
					}, function () {
						reject();
					});
				});
			}
		}, {
			key: 'defaults',
			get: function get() {
				return {
					formattedAddress: '',
					placeId: ''
				};
			}
		}]);
	
		return _class;
	}(_backbone2.default.Model);
	
	exports.default = _class;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
		var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
		return new Promise(function (resolve, reject) {
			_jquery2.default.ajax(params).done(function (response) {
				resolve(response);
			}).error(function (response) {
				reject(response);
			});
		});
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _city = __webpack_require__(19);
	
	var _city2 = _interopRequireDefault(_city);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Backbone$Collection) {
		_inherits(_class, _Backbone$Collection);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'model',
			get: function get() {
				return _city2.default;
			}
		}]);
	
		return _class;
	}(_backbone2.default.Collection);
	
	exports.default = _class;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Backbone$Model) {
		_inherits(_class, _Backbone$Model);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'defaults',
			get: function get() {
				return {
					value: '',
					coords: [],
					name: '',
					formatted_address: '',
					points: []
				};
			}
		}]);
	
		return _class;
	}(_backbone2.default.Model);
	
	exports.default = _class;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = [{
		value: 'murmansk',
		coords: [68.969563, 33.07454],
		name: 'Мурманск',
		placeId: 'ChIJ1SIM7TAQNEQRpSHDyzC6xpg',
		points: [{
			coords: [68.95147, 33.103143],
			name: 'Мурманская Областная Станция Переливания Крови',
			address: 'ул. Павлова, 6',
			time: 'предварительная запись с 15 до 18.00',
			phone: '8 (8152) 25-02-61 (62 доктора)',
			info: 'Принимают только доноров, на типирование можно сдать со второго раза, процедуру объясняют при записи'
		}, {
			coords: [68.925654, 33.107868],
			name: 'CMD – Центр молекулярной диагностики',
			address: 'Пр. Кольский, д. 61',
			time: 'до сентября 2016 прием приостановлен, только группы от 20 человек',
			phone: '8 (8152) 20-77-68',
			info: 'до сентября 2016 прием приостановлен, только группы от 20 человек'
		}, {
			coords: [69.015151, 33.103313],
			name: 'CMD – Центр молекулярной диагностики',
			address: 'Ул. Лобова, д. 4',
			time: 'до сентября 2016 прием приостановлен, только группы от 20 человек',
			phone: '8 (8152) 20-77-68',
			info: 'до сентября 2016 прием приостановлен, только группы от 20 человек'
		}]
	}, {
		value: 'spb',
		coords: [59.939095, 30.315868],
		placeId: 'ChIJ7WVKx4w3lkYR_46Eqz9nx20',
		name: 'Санкт-Петербург',
		points: [{
			coords: [59.96566, 30.324968],
			name: 'Институт детской гематологии и трансплантологии им. Р.М. Горбачевой',
			address: 'Ст.м. Петроградская, ул. Рентгена, 12, 10 эт., каб. 1007',
			time: 'вторник 16:00 - 19:00, четверг 10:00 - 12:00',
			info: 'Записываться заранее не нужно, просто приходите'
		}, {
			coords: [59.964273, 30.321348],
			name: 'ПСПбГМУ им. Павлова',
			address: 'Ст.м. Петроградская, ул. Льва Толстого д. 19, корп. 53',
			time: 'понедельник - четверг, с 8.30 до 11.30',
			phone: '+7 (812) 429-24-13',
			info: 'При себе иметь паспорт с пропиской в любом городе РФ'
		}, {
			coords: [59.83839, 30.418231],
			name: 'Санкт-Петербургская детская инфекционная больница № 5 им. Н.Ф.Филатова',
			address: 'Ст. м. Купчино, ул. Бухарестская, д. 134',
			time: 'понедельник - пятница, с 9.00 до 12.00',
			phone: '+7 (812) 366-71-66',
			info: 'При себе иметь паспорт с пропиской в любом городе РФ'
		}, {
			coords: [59.972298, 30.279091],
			name: 'Городская клиническая больница № 31',
			address: 'Ст.м. Крестовский остров, пр. Динамо, д. 3',
			time: 'понедельник, вторник и четверг с 8.30 до 12.00, вторник и четверг с 15.00 до 18.00. В среду ОПК принимают организованные группы доноров по предварительной записи',
			phone: '+7 (812) 235-73-81',
			info: 'При себе иметь паспорт с пропиской в любом городе РФ'
		}]
	}, {
		value: 'msk',
		coords: [55.75396, 37.620393],
		name: 'Москва',
		placeId: 'ChIJybDUc_xKtUYRTM9XV8zWRD0',
		points: [{
			coords: [55.543766, 37.539922],
			name: 'Медицинская клиника LeVita',
			address: 'Ул. Южнобутовская, д. 10 (ст. метро «Бульвар Адмирала Ушакова»)',
			time: 'пн-чт 12:00 - 16:00, Пт 14:00 - 17:00',
			phone: '+7 (495) 505-5078, +7 (499) 793-2381, +7 (499) 793-2336, +7 (499) 793-2427',
			info: 'Записаться можно на сайте клиники www.levita-med.ru, www.levita-kids.ru'
		}, {
			coords: [55.801334, 37.552058],
			name: 'Гематологический научный центр Минздрава России',
			address: 'Новый Зыковский проезд, д.4А (ст. метро «Динамо»)',
			time: 'пн-пт 8:00 - 14:00',
			phone: '+7 (905) 568-5760, +7 (903) 128-84-18'
		}]
	}, {
		value: 'kzn',
		coords: [55.798551, 49.106324],
		placeId: 'ChIJmc2sfCutXkERZYyttbl3y38',
		name: 'Казань',
		points: [{
			coords: [55.783251, 49.126734],
			name: 'Казанский филиал Кировского регистра',
			address: 'ул. Островского, 69/3',
			time: 'будние дни с 8 до 12',
			phone: '+7 (843) 292-12-02'
		}, {
			coords: [55.72857, 49.1788],
			name: 'Детская республиканская клиническая больница',
			address: 'Оренбургский тракт, 140, 1 корпус, Отделение переливания крови, 3-й этаж поликлиники',
			time: 'будние дни 8:30 – 12:00',
			phone: '+7 (843) 267-89-20'
		}, {
			coords: [55.73002, 49.188655],
			name: 'РКБ',
			address: 'Оренбургский тракт, 138',
			phone: '+7 (843) 237-35-36'
		}, {
			coords: [55.753169, 49.171075],
			name: 'Межрегиональный клинико-диагностический центр (МКДЦ)',
			address: 'Ул. Карбышева, 12 А, Отделение переливания крови, Блок Б, 1 этаж',
			time: '8:00 – 12:00',
			phone: '+7 (843) 291-10-97, +7 (843) 291-10-75'
		}]
	}];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./page.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./page.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._1qYSRV45fgKNO9VAvI4i5T:not(:first-child) {\n\tmargin-top: 44px;\n}\n\n._1qYSRV45fgKNO9VAvI4i5T:not(:last-child) {\n\tmargin-bottom: 44px;\n}\n\n._1QFXZkT9hFspnGBHrgzOla {\n\tposition: relative;\n\tpadding: 0 0 50px;\n}\n\n.iHIj2vUWlJL27N8tZtKfa {\n\twidth: 657px;\n\tmargin: auto;\n}\n\n._2AX1khG2HUetQLrpLQ2Ioz {\n\tpadding: 44px 0;\n\tbackground-color: rgba(9, 159, 175, 0.27);\n\tmargin-bottom: 44px;\n}\n\n.gugwRJ4TwKTo5q8bqDByV {\n\tfont-size: 14px;\n\tline-height: 24px;\n\tfont-weight: 300;\n\tdisplay: flex;\n}\n\n._22yIhYV_EDPENQPJXpEc0b {\n\tmargin-right: 10px;\n}", ""]);
	
	// exports
	exports.locals = {
		"section": "_1qYSRV45fgKNO9VAvI4i5T",
		"root": "_1QFXZkT9hFspnGBHrgzOla",
		"container": "iHIj2vUWlJL27N8tZtKfa",
		"footer": "_2AX1khG2HUetQLrpLQ2Ioz",
		"credentials": "gugwRJ4TwKTo5q8bqDByV",
		"credentialsImage": "_22yIhYV_EDPENQPJXpEc0b"
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./typography.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./typography.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".mCMeBlawmTHgj-kOia8gK {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 16px;\n\tline-height: 24px;\n\tfont-weight: 300;\n}\n\n.Yld6iXMiFH4Vt7IopVoky {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 48px;\n\tline-height: 55px;\n\tfont-weight: 700;\n\ttext-align: center;\n}\n\n._3uvNU1E_zK3vlKn7iIK57u {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 30px;\n\tline-height: 32px;\n\tfont-weight: 700;\n\tmargin-bottom: 21px;\n}\n\n._3lv3I_riifEMhkoO2Dukx_ {\n}\n\n._3lv3I_riifEMhkoO2Dukx_:not(:first-child) {\n\tmargin-top: 21px;\n}\n\n._3lv3I_riifEMhkoO2Dukx_:not(:last-child) {\n\tmargin-bottom: 21px;\n}\n\n._2hyzGKrHnqHZ4dKDiYJjSk {\n\tcursor: pointer;\n\tcolor: #078599;\n\ttext-decoration: underline;\n}\n\n._1V1iXsJ-eSoGgmng5LyZmq {\n\tcursor: pointer;\n\tcolor: #078599;\n\tborder-bottom: 1px dotted #078599;\n}\n\n._2H3KkHxmbHI3WvlhyzZCnq {\n\tfont-weight: 700;\n}\n\n.x5OPdyuVfERXP6Zae2_p3 {\n\tfont-family: 'Roboto', sans-serif;\n\tcolor: #078599;\n\tfont-weight: 400;\n}\n\n._3NPcCWvioPO4gSH3wqBu96 {\n\tdisplay: block;\n\tfont-size: 54px;\n\tline-height: 56px;\n\tfont-weight: 700;\n\tmargin-bottom: -4px;\n}\n\n._3dPZLkyD7-DdI3_7WT-B1F {\n\tdisplay: block;\n\tline-height: 23px;\n}\n\n._256MTZBCB1RaS5QMBrDnjm {\n\tdisplay: block;\n\tfont-size: 12px;\n}\n\n._3rskhd6gSf-w_n0a8nK10n {\n\tdisplay: flex;\n}\n\n._3rskhd6gSf-w_n0a8nK10n .x5OPdyuVfERXP6Zae2_p3, ._3rskhd6gSf-w_n0a8nK10n ._3c59ynQ1xcQwe4miRYkPbZ {\n\tflex-shrink: 0;\n\tmargin-left: 24px;\n}\n\n._3rskhd6gSf-w_n0a8nK10n ._3c59ynQ1xcQwe4miRYkPbZ {\n\twidth: 196px;\n}\n\n._1GUWZ5UGIjNQxoLL6Q2miN {\n\tjustify-content: space-between;\n}\n\n._2q4iT4rckcnIidE1puWG0d {\n\tfont-family: 'Roboto', sans-serif;\n\twidth: 768px;\n\tmargin-left: calc( ( 657px - 768px ) / 2 );\n\tpadding: 50px calc( ( 768px - 657px ) / 2 ) 64px;\n\tbackground-color: rgba(9, 159, 175, 0.27);\n}\n\n._3abqwcGNOd_J3E1Oi-yi6N {\n\tflex-shrink: 0;\n}\n\n._3abqwcGNOd_J3E1Oi-yi6N:first-child {\n\twidth: 44%;\n}\n\n._3abqwcGNOd_J3E1Oi-yi6N:last-child {\n\twidth: 50%;\n}", ""]);
	
	// exports
	exports.locals = {
		"text": "mCMeBlawmTHgj-kOia8gK",
		"header": "Yld6iXMiFH4Vt7IopVoky",
		"subheader": "_3uvNU1E_zK3vlKn7iIK57u",
		"paragraph": "_3lv3I_riifEMhkoO2Dukx_ mCMeBlawmTHgj-kOia8gK",
		"link": "_2hyzGKrHnqHZ4dKDiYJjSk",
		"linkPseudo": "_1V1iXsJ-eSoGgmng5LyZmq",
		"bold": "_2H3KkHxmbHI3WvlhyzZCnq mCMeBlawmTHgj-kOia8gK",
		"footnote": "x5OPdyuVfERXP6Zae2_p3",
		"footnoteCounter": "_3NPcCWvioPO4gSH3wqBu96",
		"footnoteText": "_3dPZLkyD7-DdI3_7WT-B1F",
		"footnoteMeta": "_256MTZBCB1RaS5QMBrDnjm",
		"float": "_3rskhd6gSf-w_n0a8nK10n",
		"media": "_3c59ynQ1xcQwe4miRYkPbZ",
		"floatJustifyBetween": "_1GUWZ5UGIjNQxoLL6Q2miN _3rskhd6gSf-w_n0a8nK10n",
		"note": "_2q4iT4rckcnIidE1puWG0d",
		"col2": "_3abqwcGNOd_J3E1Oi-yi6N"
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./inputs.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./inputs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._10fHIjkbAdfadwMqaQz6Pc {\n\tdisplay: none;\n}\n\n._10fHIjkbAdfadwMqaQz6Pc:checked + ._1qRt3sNTNbILEj2ckyiMuH::after {\n\topacity: 1;\n}\n\n._1qRt3sNTNbILEj2ckyiMuH {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 300;\n\tfont-size: 16px;\n\tposition: relative;\n\tpadding-left: 42px;\n\theight: 26px;\n\tline-height: 26px;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n\n._1qRt3sNTNbILEj2ckyiMuH::before {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 26px;\n\theight: 26px;\n\tborder: 1px solid #000;\n\tborder-radius: 50%;\n\tcontent: '';\n}\n\n._1qRt3sNTNbILEj2ckyiMuH::after {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 4px;\n\tbottom: 4px;\n\twidth: 18px;\n\theight: 18px;\n\tbackground-color: #FFD637;\n\tborder-radius: 50%;\n\ttransition: all 0.15s ease;\n\topacity: 0;\n\tcontent: '';\n}\n\n.jX-n3oTShl9DdR8pTgsJO {\n\tdisplay: none;\n}\n\n.jX-n3oTShl9DdR8pTgsJO:checked + ._1cpV2qSiHdrEnfAa1NIoLC::after {\n\topacity: 1;\n}\n\n._1cpV2qSiHdrEnfAa1NIoLC {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 300;\n\tfont-size: 16px;\n\tposition: relative;\n\tpadding-left: 42px;\n\tline-height: 26px;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n\n._1cpV2qSiHdrEnfAa1NIoLC::before {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 26px;\n\theight: 26px;\n\tborder: 1px solid #000;\n\tcontent: '';\n}\n\n._1cpV2qSiHdrEnfAa1NIoLC::after {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 4px;\n\ttop: 4px;\n\twidth: 18px;\n\theight: 18px;\n\ttransition: all 0.15s ease;\n\tbackground-color: #FFD637;\n\topacity: 0;\n\tcontent: '';\n}\n\n._3lp0pnIvm8INrj2DL5oHcL {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 300;\n\tdisplay: inline-block;\n\tborder: 1px solid #000;\n\theight: 42px;\n    width: 86px;\n\tpadding: 8px;\n\tfont-size: 24px;\n\ttext-align: center;\n\tborder-radius: 0;\n\tbox-shadow: none;\n}\n\n._3kVhXjYTQ-iYqCY9buu_8L {\n\tfont-family: 'Roboto', sans-serif;\n\tletter-spacing: 4px;\n\tfont-size: 22px;\n\tfont-weight: 300;\n\tcolor: #000;\n\ttext-transform: uppercase;\n\tborder: none;\n\tbackground-image: none;\n\tbackground-color: #f0c730;\n\theight: 62px;\n\tline-height: 62px;\n\tmin-width: 290px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tcolor: #fff;\n\ttransform: translate3d(0,0,0);\n\tbox-shadow: 3px 3px 0px 0px #c89d25;\n\ttransition: all 0.15s ease;\n}\n\n._3kVhXjYTQ-iYqCY9buu_8L:hover {\n\tbackground-color: #dfb52b;\n}\n\n._3kVhXjYTQ-iYqCY9buu_8L[disabled] {\n\tbox-shadow: none;\n\topacity: 0.7;\n\tcursor: default;\n\tbackground-color: #f0c730;\n}\n\n._3kVhXjYTQ-iYqCY9buu_8L:active {\n\tposition: relative;\n\ttransform: translate3d(2px,2px,0);\n\tbox-shadow: 1px 1px 0px 0px #c89d25;\n}\n\n.u5lqlNo6_x0Aq3I55gEjP {\n\tanimation: _1lP-KYA1WVO-YcgrRmr9_W 0.82s cubic-bezier(.36,.07,.19,.97) both;\n\ttransform: translate3d(0, 0, 0);\n\tbackface-visibility: hidden;\n\tperspective: 1000px;\n}\n\nselect {\n\t-webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n._2GFL1NFl8wZczLoXqOQXSK {\n\tfont-family: 'Roboto', sans-serif;\n    height: 44px;\n    padding-left: 12px;\n    padding-right: 50px;\n    border-radius: 0;\n    background-color: transparent;\n    position: relative;\n    border: 1px solid #000;\n    background-repeat: no-repeat;\n    background-position: calc(100% - 10px) 16px;\n    background-size: 14px;\n    font-size: 16px;\n    cursor: pointer;\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAOCAMAAADzLXfBAAAAKlBMVEUAAAAHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZlcyRY1AAAADXRSTlMAECAwQFBggJ+/z9/vqywp7gAAAE1JREFUeNptz0EOgCAMRNGP1YoI97+u0djQkHnL+ZsW2yV8SFDV7MhQebV1vviUJdyFP/Q8dyNYDgeTzfkk83SKCq2QxRt9AxUMoQ0nPOlaCJGajzbZAAAAAElFTkSuQmCC);\n}\n\n@keyframes _1lP-KYA1WVO-YcgrRmr9_W {\n\t10%, 90% {\n\t\ttransform: translate3d(-2px, 0, 0);\n\t}\n\n\t20%, 80% {\n\t\ttransform: translate3d(3px, 0, 0);\n\t}\n\n\t30%, 50%, 70% {\n\t\ttransform: translate3d(-6px, 0, 0);\n\t}\n\n\t40%, 60% {\n\t\ttransform: translate3d(6px, 0, 0);\n\t}\n}", ""]);
	
	// exports
	exports.locals = {
		"radioInput": "_10fHIjkbAdfadwMqaQz6Pc",
		"radioLabel": "_1qRt3sNTNbILEj2ckyiMuH",
		"checkboxInput": "jX-n3oTShl9DdR8pTgsJO",
		"checkboxLabel": "_1cpV2qSiHdrEnfAa1NIoLC",
		"input": "_3lp0pnIvm8INrj2DL5oHcL",
		"button": "_3kVhXjYTQ-iYqCY9buu_8L",
		"inputInvalid": "u5lqlNo6_x0Aq3I55gEjP",
		"shake": "_1lP-KYA1WVO-YcgrRmr9_W",
		"select": "_2GFL1NFl8wZczLoXqOQXSK"
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./how.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./how.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._1WejIhpkUMh4VTkZQk4pv3 {\n\tmax-width: 1024px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 40px;\n}\n\n._1WejIhpkUMh4VTkZQk4pv3 img {\n\tmax-width: 100%;\n}\n\n._1WejIhpkUMh4VTkZQk4pv3 {\n\twidth: 796px;\n\tmargin-bottom: -42px;\n}\n\n._35cLu0FiJi8Aya9kANGLJP {\n\tfont-size: 27px;\n\tfont-weight: bold;\n\tcolor: inherit;\n}\n\n._97IAdnFwwX7o6UPALTnL6 {\n\tmargin-top: 8px;\n}\n\n.HuN9t2QlrbX1i05Ufjyww {\n\twidth: 170px;\n}\n\n._1lODHij9o9HfotBQjjNm1N {\n\theight: 160px;\n}\n\n._16uNMo0YxWsGGoEf8l36O2 {\n\tmargin-top: -30px;\n\tmargin-bottom: -15px;\n\twidth: 768px;\n\tmargin-left: calc( ( 657px - 768px ) / 2 );\n}\n\n._1JUaYIX0pZ6y5TiSwfSVJX {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-bottom: 20px;\n}\n\n._24cloWyOMvyXkA4KqmWHqc {\n\t\n}\n\n._31SNx6Pg9lMDJFG77PbM6u {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n._1mLSKjOuj5mKLEKXod9IKp {\n\twidth: 44%;\n\theight: 240px;\n\tflex-shrink: 0;\n}\n\n._1ahdP_R8lojar64x5rFb-z {\n\twidth: 50%;\n}\n\n.mQRPkQMFqN3wx9eoZSWpY {\n\n}\n\n.ixlLFyr4zj4-lzEqYRtTz:not(:last-child) {\n\tmargin-bottom: 7px;\n}\n\n._1Ua2wPj4wlSWCvPKaa_vny {\n\tfont-weight: 700;\n}\n\n._1Ua2wPj4wlSWCvPKaa_vny:not(:last-child) {\n\tmargin-bottom: 7px;\n}\n\n._2RRDmumvbQsIVyhjaf7TTw:not(:last-child) {\n\tmargin-bottom: 7px;\n}\n\n._2q-RfHocjKPjEkTkhF3kSW:not(:last-child) {\n\tmargin-bottom: 7px;\n}\n\n._1FErJrDjG-s_tsb4PPzfIt {\n\n}\n\n._3rw7ukE8BL0mD-vyBGvhw7 {\n\tdisplay: none;\n\tmargin-top: 21px;\n}\n\n._2PqfvirtOGARWxGav9kYtA {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n._2PqfvirtOGARWxGav9kYtA .mQRPkQMFqN3wx9eoZSWpY:not(:last-child) {\n\tmargin-bottom: 21px;\n}\n\n.fxI46sZRzcMcM2WMK_MNF {\n\twidth: 44%;\n}\n\n._1pOsQLtS3szV91KKUkmY6o {\n\twidth: 50%;\n}\n\n._3cODNT2e0X3yLiS8TW2Y7k {\n\tmargin-top: 7px;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\ttext-decoration: underline;\n}\n\n._3cODNT2e0X3yLiS8TW2Y7k:hover {\n\ttext-decoration: none;\n}\n\n._14cCJkaiOsMy6T9-SNl_2D {\n\tmargin-left: calc(100% - 336px);\n}\n\n._3tRc2PsYuENNsB7R1gQuIM {\n\tdisplay: flex;\n\talign-items: flex-start;\n}\n\n._2keonji84VvzrKT2N9jPfz {\n\tflex-shrink: 0;\n\tmargin-right: 25px;\n\twidth: 52px;\n}", ""]);
	
	// exports
	exports.locals = {
		"artwork": "_1WejIhpkUMh4VTkZQk4pv3",
		"contactEmail": "_35cLu0FiJi8Aya9kANGLJP",
		"contactText": "_97IAdnFwwX7o6UPALTnL6",
		"doctorImage": "HuN9t2QlrbX1i05Ufjyww",
		"typeImage": "_1lODHij9o9HfotBQjjNm1N",
		"whatNextImage": "_16uNMo0YxWsGGoEf8l36O2",
		"findCity": "_1JUaYIX0pZ6y5TiSwfSVJX",
		"findEmpty": "_24cloWyOMvyXkA4KqmWHqc",
		"findContainer": "_31SNx6Pg9lMDJFG77PbM6u",
		"findMap": "_1mLSKjOuj5mKLEKXod9IKp",
		"findMainPoint": "_1ahdP_R8lojar64x5rFb-z",
		"findPoint": "mQRPkQMFqN3wx9eoZSWpY",
		"findPointPhone": "ixlLFyr4zj4-lzEqYRtTz",
		"findPointName": "_1Ua2wPj4wlSWCvPKaa_vny",
		"findPointAddress": "_2RRDmumvbQsIVyhjaf7TTw",
		"findPointTime": "_2q-RfHocjKPjEkTkhF3kSW",
		"findPointMeta": "_1FErJrDjG-s_tsb4PPzfIt",
		"findPoints": "_3rw7ukE8BL0mD-vyBGvhw7",
		"findPointsContainer": "_2PqfvirtOGARWxGav9kYtA",
		"findPointsEven": "fxI46sZRzcMcM2WMK_MNF",
		"findPointsOdd": "_1pOsQLtS3szV91KKUkmY6o",
		"findShowMore": "_3cODNT2e0X3yLiS8TW2Y7k",
		"hideMore": "_14cCJkaiOsMy6T9-SNl_2D _3cODNT2e0X3yLiS8TW2Y7k",
		"goToFirst": "_3tRc2PsYuENNsB7R1gQuIM",
		"goToFirstImage": "_2keonji84VvzrKT2N9jPfz"
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./share.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./share.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._1HVXvv6s3Rx1WEHy8-yNhU {\n\tdisplay: flex;\n}\n\n._3E0EZYTWKvfZdpvH1JanaD, ._1C4zK2wtyxK0jeS4xlTVO5 {\n\twidth: 73px;\n\theight: 73px;\n\tborder-radius: 4px;\n\tborder: 2px solid #078599;\n\tbackground-color: transparent;\n\tcursor: pointer;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n}\n\n._3E0EZYTWKvfZdpvH1JanaD:hover, ._1C4zK2wtyxK0jeS4xlTVO5:hover {\n\tbackground-color: rgba(9, 159, 175, 0.27);\n}\n\n._3E0EZYTWKvfZdpvH1JanaD:active, ._1C4zK2wtyxK0jeS4xlTVO5:active {\n\tbackground-color: #078599;\n}\n\n._3E0EZYTWKvfZdpvH1JanaD:not(:last-child), ._1C4zK2wtyxK0jeS4xlTVO5:not(:last-child) {\n\tmargin-right: 27px;\n}\n\n._3E0EZYTWKvfZdpvH1JanaD {\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAMAAAAsVwj+AAAAKlBMVEUAAAAHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZlcyRY1AAAADXRSTlMAECAwQGBwn6+/z9/vGp7ulQAAAE1JREFUeAHlzbEeQDAQg/GqQ+Pk/V/XT25onYXZt+W/pPSq2bDWnQoxJ00VELvDwgQtg1MdbYMLGFWNAcpLmAEwwlUx3vsOngHP21/BCRujDnfQYzzxAAAAAElFTkSuQmCC);\n}\n\n._3E0EZYTWKvfZdpvH1JanaD:active {\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAqCAMAAADoIdnnAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMAAAUMEhUYKSw3PEBBUF5fa29wjpKUm52mrK6+wcTGyMrNztja3d7k7PDy8/T19vf4+fr7/f5JyMCUAAAAsElEQVR42u3Q2Q6CQAyF4YriNo67uOG+iwIC9v0fTchMlCjV3nnDf/0lTQ8UWP2bgapubV3E6Ljst2hm2kGEujPJivsQn61J1rvhK4tihpdSXptitSDF/AbFmq4SwWa6OIRlinV8xVYQZwDFuvroBJJ+svEXJqUcajaXSaVMhhfHuSt2deKwks3eM1ksAhY78dgOOC/4s2wmhBjoQWwRV2XOm7OcfbCQx1A1IhjRf9kDR21MuYsfLhwAAAAASUVORK5CYII=);\n}\n\n._1C4zK2wtyxK0jeS4xlTVO5 {\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAWCAMAAACFUC6CAAAAM1BMVEUAAAAHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZkHhZlxe57MAAAAEHRSTlMAECAwQFBgcICPn6+/z9/vIxqCigAAAL5JREFUeAGNkNGygyAMRBcIaKmY/P/XXi4lJXHqjOdtZw8riAs0SPgBlb2zRXQyy4fmzuX/lmbF6JRDJoSRZbVBR8qo1KSV9AtVPpyj2q2YRMxKtAHZitUMXifJiCRKAuzkZkV7wx1wkxyWGIBNvQOTqA9/r8ckJF7nFW3l9V0voZlfqgSWybdldhdUstxywnE8FSPLHRWOIk/N+thsl/a8M4Mzq8svb75lkXs2mwTHxq5JKzZ4wq4rEZ2kSRh/b/Qg5V97S/kAAAAASUVORK5CYII=);\n}\n\n._1C4zK2wtyxK0jeS4xlTVO5:active {\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAbCAMAAAA5zj1cAAABSlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9mcS2dAAAAbXRSTlMAAAEDBQYHCAoLDA0OEBITFBUXGB8iJCcoKi8wMTQ2OTs8QEFCREZHSEpMTU5PUFJWXWdscHJ4fH5/gISLlJqhqK6ztba4u7y9w8TGx8vO0dLW2Nna29ze4uPk5ebp6uvs7u/w8/T2+Pn6+/3+kKCElQAAAUlJREFUeNq10+k3AlEYBvBHScSQNUskQpZkZ8iSrexLZFdMUnT//6/uXO/tzjhnzvGl59Pz3Pd35tug7p+pBQSaNE1rhhn32mWJMfaZ0fEnHGaYSNIFYDjLKP3i7DmjecHhHfWo+OQerVkB5xjlhcMl6gfiNEFrUqwjCRMc+vI0guDppjFijpB0b20cYoXWLnharTAl4QJM6HunOQpAoz4EICrdvktArNO+8ig4AHiz1F878QtbcvSyCvQomKBaGQdBLNJTOYRpqnHEGGUDVVh/TW/5+TS1k+UitWO3ghhjjqkEYIHYcYS3sMGOnKOcsUHEHGExYoPYcpTlKRtsOLWfS9+2byqI9huru/f3ZZUcJEjy3AJ1oOu5up78VojGTQXjAIIf1blNUCaclpewOSMFOb8IqvTqqQfDMA69YgWSJa4KxqNeg//6BxI74A3iZZBUAAAAAElFTkSuQmCC);\n}", ""]);
	
	// exports
	exports.locals = {
		"container": "_1HVXvv6s3Rx1WEHy8-yNhU",
		"itemFb": "_3E0EZYTWKvfZdpvH1JanaD",
		"itemVk": "_1C4zK2wtyxK0jeS4xlTVO5"
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.share : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n	<a href=\""
	    + alias2(((helper = (helper = helpers.vkUrl || (depth0 != null ? depth0.vkUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"vkUrl","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.share : depth0)) != null ? stack1.itemVk : stack1), depth0))
	    + "\"></a>\n	<a href=\""
	    + alias2(((helper = (helper = helpers.fbUrl || (depth0 != null ? depth0.fbUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"fbUrl","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.share : depth0)) != null ? stack1.itemFb : stack1), depth0))
	    + "\"></a>	\n</div>\n";
	},"useData":true});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(33)['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}
	
	var _handlebarsBase = __webpack_require__(34);
	
	var base = _interopRequireWildcard(_handlebarsBase);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var _handlebarsSafeString = __webpack_require__(48);
	
	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
	
	var _handlebarsException = __webpack_require__(36);
	
	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
	
	var _handlebarsUtils = __webpack_require__(35);
	
	var Utils = _interopRequireWildcard(_handlebarsUtils);
	
	var _handlebarsRuntime = __webpack_require__(49);
	
	var runtime = _interopRequireWildcard(_handlebarsRuntime);
	
	var _handlebarsNoConflict = __webpack_require__(50);
	
	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
	
	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();
	
	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;
	
	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };
	
	  return hb;
	}
	
	var inst = create();
	inst.create = create;
	
	_handlebarsNoConflict2['default'](inst);
	
	inst['default'] = inst;
	
	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(35);
	
	var _exception = __webpack_require__(36);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _helpers = __webpack_require__(37);
	
	var _decorators = __webpack_require__(45);
	
	var _logger = __webpack_require__(47);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;
	
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};
	
	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';
	
	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};
	
	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}
	
	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,
	
	  logger: _logger2['default'],
	  log: _logger2['default'].log,
	
	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },
	
	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },
	
	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};
	
	var log = _logger2['default'].log;
	
	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};
	
	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;
	
	function escapeChar(chr) {
	  return escape[chr];
	}
	
	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	var toString = Object.prototype.toString;
	
	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function isFunction(value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;
	
	/* eslint-enable func-style */
	
	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? toString.call(value) === '[object Array]' : false;
	};
	
	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	
	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }
	
	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }
	
	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}
	
	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}
	
	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}
	
	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}
	
	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
	
	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;
	
	    message += ' - ' + line + ':' + column;
	  }
	
	  var tmp = Error.prototype.constructor.call(this, message);
	
	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }
	
	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }
	
	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}
	
	Exception.prototype = new Error();
	
	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _helpersBlockHelperMissing = __webpack_require__(38);
	
	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
	
	var _helpersEach = __webpack_require__(39);
	
	var _helpersEach2 = _interopRequireDefault(_helpersEach);
	
	var _helpersHelperMissing = __webpack_require__(40);
	
	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
	
	var _helpersIf = __webpack_require__(41);
	
	var _helpersIf2 = _interopRequireDefault(_helpersIf);
	
	var _helpersLog = __webpack_require__(42);
	
	var _helpersLog2 = _interopRequireDefault(_helpersLog);
	
	var _helpersLookup = __webpack_require__(43);
	
	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
	
	var _helpersWith = __webpack_require__(44);
	
	var _helpersWith2 = _interopRequireDefault(_helpersWith);
	
	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(35);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;
	
	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }
	
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    }
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(35);
	
	var _exception = __webpack_require__(36);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }
	
	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;
	
	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }
	
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }
	
	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;
	
	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }
	
	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }
	
	    if (context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;
	
	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }
	
	    if (i === 0) {
	      ret = inverse(this);
	    }
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _exception = __webpack_require__(36);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(35);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }
	
	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });
	
	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }
	
	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;
	
	    instance.log.apply(instance, args);
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(35);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    var fn = options.fn;
	
	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }
	
	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _decoratorsInline = __webpack_require__(46);
	
	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
	
	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(35);
	
	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function ret(context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }
	
	    props.partials[options.args[0]] = options.fn;
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(35);
	
	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',
	
	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }
	
	    return level;
	  },
	
	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);
	
	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }
	
	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }
	
	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};
	
	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';
	
	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}
	
	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};
	
	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}
	
	var _utils = __webpack_require__(35);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _exception = __webpack_require__(36);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _base = __webpack_require__(34);
	
	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;
	
	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}
	
	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + (typeof templateSpec === 'undefined' ? 'undefined' : _typeof(templateSpec)));
	  }
	
	  templateSpec.main.decorator = templateSpec.main_d;
	
	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);
	
	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }
	
	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);
	
	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }
	
	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }
	
	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },
	
	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,
	
	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },
	
	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },
	
	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;
	
	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }
	
	      return obj;
	    },
	
	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };
	
	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var data = options.data;
	
	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }
	
	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;
	
	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);
	
	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };
	
	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }
	
	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}
	
	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }
	
	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }
	
	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);
	
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}
	
	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}
	
	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }
	
	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;
	
	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }
	
	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }
	
	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}
	
	function noop() {
	  return '';
	}
	
	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}
	
	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "							<option value=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.placeId : stack1), depth0))
	    + "\" "
	    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
	    + "</option>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return "selected=\"selected\"";
	},"4":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.emptyCity : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findEmpty : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\">\n								Мы определили ваш город, \n								<br>\n								это "
	    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.data : stack1)) != null ? stack1.formattedAddress : stack1), depth0))
	    + ".\n								<br>\n								Но, к сожалению, в нем\n								<br>\n								нет пунктов для сдачи \n								<br>\n								костного мозга.\n							</div>\n";
	},"7":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findEmpty : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\">\n								Мы не смогли определить, где вы\n								<br>\n								находитесь. Пожалуйста, выберите\n								<br>\n								город вручную.\n							</div>\n";
	},"9":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};
	
	  return "						<div data-view=\"how-map\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findMap : stack1), depth0))
	    + "\"></div>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findMainPoint : stack1), depth0))
	    + "\">\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPoint : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\">\n								<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointName : stack1), depth0))
	    + "\">"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.firstPoint : depth0)) != null ? stack1.name : stack1), depth0))
	    + "</div>\n								<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointAddress : stack1), depth0))
	    + "\">\n									"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.firstPoint : depth0)) != null ? stack1.address : stack1), depth0))
	    + "\n								</div>\n								<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointTime : stack1), depth0))
	    + "\">\n									Время работы: "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.firstPoint : depth0)) != null ? stack1.time : stack1), depth0))
	    + "\n								</div>\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.firstPoint : depth0)) != null ? stack1.phone : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.firstPoint : depth0)) != null ? stack1.info : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "							</div>\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findShowMore : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\" data-action=\"show-all-points\">\n								Все пункты...\n							</div>\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findShowMore : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\" style=\"display: none\" data-action=\"hide-all-points\">\n								Свернуть\n							</div>\n						</div>\n";
	},"10":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "									<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointPhone : stack1), depth0))
	    + "\">\n										Телефон: "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.firstPoint : depth0)) != null ? stack1.phone : stack1), depth0))
	    + "\n									</div>\n";
	},"12":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "									<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointMeta : stack1), depth0))
	    + "\">\n										"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.firstPoint : depth0)) != null ? stack1.info : stack1), depth0))
	    + "\n									</div>\n";
	},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};
	
	  return "								<div class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].how : depths[1])) != null ? stack1.findPoint : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].typography : depths[1])) != null ? stack1.text : stack1), depth0))
	    + "\">\n									<div class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].how : depths[1])) != null ? stack1.findPointName : stack1), depth0))
	    + "\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</div>\n									<div class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].how : depths[1])) != null ? stack1.findPointAddress : stack1), depth0))
	    + "\">\n										"
	    + alias2(alias1((depth0 != null ? depth0.address : depth0), depth0))
	    + "\n									</div>\n									<div class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].how : depths[1])) != null ? stack1.findPointTime : stack1), depth0))
	    + "\">\n										Время работы: "
	    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
	    + "\n									</div>\n"
	    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.phone : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.info : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "								</div>\n";
	},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "										<div class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].how : depths[1])) != null ? stack1.findPointPhone : stack1), depth0))
	    + "\">\n											Телефон: "
	    + alias2(alias1((depth0 != null ? depth0.phone : depth0), depth0))
	    + "\n										</div>\n";
	},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "										<div class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].how : depths[1])) != null ? stack1.findPointMeta : stack1), depth0))
	    + "\">\n											"
	    + alias2(alias1((depth0 != null ? depth0.info : depth0), depth0))
	    + "\n										</div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.root : stack1), depth0))
	    + "\">\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.artwork : stack1), depth0))
	    + "\">\n		<img src=\"/static/how_artwork.png\">\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.styles : depth0)) != null ? stack1.pageContainer : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.styles : depth0)) != null ? stack1.test : stack1), depth0))
	    + "\" data-view=\"how-test\"></div>\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.header : stack1), depth0))
	    + "\">Как стать<br>донором костного мозга</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				О&nbsp;донорстве костного мозга знают мало, поэтому многие боятся становиться донорами. Кто-то думает, что&nbsp;костный мозг вырезают из&nbsp;костей, другие слышали, что&nbsp;врач иглой протыкает позвоночник. Мы&nbsp;хотим развеять безосновательные страхи и&nbsp;рассказать, как&nbsp;все происходит на&nbsp;самом деле&nbsp;&mdash; шаг за&nbsp;шагом.\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\" id=\"first-step\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Первый шаг. Найти, где сдать кровь</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1["float"] : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\">\n					Чтобы вступить в&nbsp;регистр потенциальных доноров костного мозга, нужно сдать кровь на&nbsp;типирование. Типирование&nbsp;&mdash; это тест на&nbsp;тканевую совместимость между донором и&nbsp;реципиентом. От&nbsp;этой совместимости зависит, приживется&nbsp;ли костный мозг в&nbsp;новом организме.\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnote : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnoteText : stack1), depth0))
	    + "\">\n						Для 100% генетической совместимости\n						<br>\n						донора и пациента должны совпасть\n						<br>\n						10 четырехзначных параметров ДНК.\n						<br>\n						Вероятность совпадения 1:10000.\n						<br>\n						Для транплантации достаточно\n						<br>\n						90% совместимости\n					</div>\n				</div>\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Специальных пунктов сдачи крови на&nbsp;типирование нет. Вступить в&nbsp;регистр можно в&nbsp;некоторых пунктах переливания крови и&nbsp;в&nbsp;лабораториях регистра. Выберите свой город и&nbsp;найдите удобный пункт.\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.find : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findCity : stack1), depth0))
	    + "\">\n					<select class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputs : depth0)) != null ? stack1.select : stack1), depth0))
	    + "\" data-action=\"select-city\">\n						<option>Выберите город</option>\n"
	    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.citiesCollection : depth0)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "					</select>\n"
	    + ((stack1 = helpers.unless.call(alias3,(depth0 != null ? depth0.currentCity : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findContainer : stack1), depth0))
	    + "\">\n"
	    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.currentCity : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPoints : stack1), depth0))
	    + "\" data-role=\"all-points\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointsContainer : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointsEven : stack1), depth0))
	    + "\">\n"
	    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.evenPoints : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "						</div>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.findPointsOdd : stack1), depth0))
	    + "\">\n"
	    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.oddPoints : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Второй шаг. Сдать кровь</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1["float"] : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				<div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						В&nbsp;пункте приёма крови вы&nbsp;заполняете анкету и&nbsp;подписываете соглашение. Соглашение подтверждает, что вы&nbsp;вступаете в&nbsp;регистр добровольно и&nbsp;знаете о&nbsp;всех этапах донорства.\n					</div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						Тут же вы сдаете 10 мл крови.  \n					</div>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnote : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						<a target=\"_blank\" href=\"/static/pdf/anketa.pdf\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">\n							Анкета\n							<br>\n							о состоянии здоровья\n						</a>\n					</div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						<a target=\"_blank\" href=\"/static/pdf/register_agreement.pdf\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">\n							Соглашение \n							<br>\n							о вступлении в регистр\n						</a>\n					</div>\n				</div>\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Поздравляем, вы&nbsp;в&nbsp;регистре! Вы&nbsp;попадаете в&nbsp;регистр автоматически после того, как&nbsp;вашу кровь протипируют в&nbsp;лаборатории. Сотрудники регистра позвонят, только если ваш костный мозг кому-то подойдет.\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class="
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.note : stack1), depth0))
	    + ">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Персональные данные под защитой</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.floatJustifyBetween : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n								<span class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.bold : stack1), depth0))
	    + "\">Регистр не раскрывает ваши данные</span>\n								<br>\n								Пробирку с&nbsp;анализом подписывают девятизначным кодом. Этот&nbsp;же код пишут на&nbsp;анкете с&nbsp;вашими персональными данными. Результаты типирования и&nbsp;код хранятся в&nbsp;одной базе, а&nbsp;персональные данные&nbsp;&mdash; в&nbsp;другой.\n							</div>\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n								База с&nbsp;персональными данными находится на&nbsp;отдельном сервере без выхода в&nbsp;интернет. Сотрудник сопоставит код и&nbsp;имя, только если кому-то подойдут ваши клетки.\n							</div>\n						</div>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n								<span class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.bold : stack1), depth0))
	    + "\">Регистр не раскрывает данные пациента</span>\n								<br>\n								О&nbsp;реципиенте вам скажут немного: пол, возраст, вес и&nbsp;как в&nbsp;общих чертах прошла трасплантация.\n							</div>\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n								Срок анонимности&nbsp;&mdash; два года. Потом сотрудник регистра предложит донору и&nbsp;реципиенту написать друг другу письма&nbsp;и, если оба согласятся, встретиться.\n							</div>	\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Третий шаг. Ждать</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1["float"] : stack1), depth0))
	    + " "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				<div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						Потенциальный донор может подойти кому-то на&nbsp;следующий день, через несколько лет или&nbsp;вообще никогда не&nbsp;подойти.\n					</div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						Помните, что мы&nbsp;увеличиваем регистр, чтобы спасать жизни. Поэтому оцените свои силы заранее и&nbsp;вступайте в&nbsp;регистр с&nbsp;твердым намерением стать реальным донором.\n					</div>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnote : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.contact : stack1), depth0))
	    + "\">\n						<a href=\"mailto:donor@advita.ru\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.contactEmail : stack1), depth0))
	    + "\">donor@advita.ru</a>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.contactText : stack1), depth0))
	    + "\">\n							Обо всех изменениях пишите\n							<br>\n							в фонд Advita — мы передадим\n							<br>\n							информацию в регистр.\n							<br>\n							И неважно, откуда вы и где\n							<br>\n							сдавали кровь\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Люди, которые числятся в&nbsp;регистре, но&nbsp;в&nbsp;последний момент отказываются от&nbsp;реального донорства, зря тратят деньги благотворительных организаций и&nbsp;время пациента&nbsp;&mdash; время, которое может быть решающим.\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Четвертый шаг. Пройти обследование</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1["float"] : stack1), depth0))
	    + "\">\n				<div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						Итак, прошло время, и&nbsp;ваши клетки кому-то подошли. Сотрудник регистра звонит вам и&nbsp;спрашивает, готовы&nbsp;ли вы&nbsp;стать реальным донором.\n					</div>	\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						Если соглашаетесь, вам назначают более детальное, развернутое типирование&nbsp;&mdash; чтобы убедиться, что&nbsp;подходите. Если точно подходите, проходите обследование. Какое&nbsp;&mdash; зависит от&nbsp;состояния здоровья. Это в&nbsp;любом случае будет обычный биохимический анализ крови. Если вас что-то беспокоит, врач назначит дополнительные анализы.\n					</div>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.media : stack1), depth0))
	    + "\">\n					<img class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.doctorImage : stack1), depth0))
	    + "\" src=\"/static/doctor.png\">\n				</div>\n			</div>	\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Пятый шаг. Стать донором</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Забрать костный мозг от&nbsp;донора можно двумя способами. Каким будут брать у&nbsp;вас, вы&nbsp;выбираете сами.\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.floatJustifyBetween : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.type : stack1), depth0))
	    + "\">\n						<img src=\"/static/spit.png\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.typeImage : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\"><span class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.bold : stack1), depth0))
	    + "\">Из тазовой кости</span></div>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\">\n							Врач проколет тазовую кость и&nbsp;возьмет небольшую часть костного мозга. Вы&nbsp;будете под общим наркозом. Операция займёт около 30&nbsp;минут. Во&nbsp;время операции вы&nbsp;ничего не&nbsp;почувствуете, но&nbsp;несколько дней после операции будут &laquo;ныть кости&raquo;. Вы&nbsp;легко снимете дискомфорт обезболивающими таблетками.\n						</div>\n					</div>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.type : stack1), depth0))
	    + "\">\n						<img src=\"/static/kapelnitsa.png\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.typeImage : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\"><span class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.bold : stack1), depth0))
	    + "\">Из вены</span></div>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\">\n							У&nbsp;вас берут кровь из&nbsp;вены одной руки и&nbsp;возвращают в&nbsp;вену на&nbsp;другой руке. По&nbsp;дороге кровь проходит через сепаратор, отлавливающий клетки костного мозга. Процедура занимает пять-шесть часов. Анестезия не&nbsp;нужна, вы&nbsp;находитесь в&nbsp;сознании и&nbsp;успеваете посмотреть три&nbsp;любимых фильма или поспать.\n						</div>	\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Что потом</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Через два года после успешной трансплантации у&nbsp;донора и&nbsp;реципиента спросят, хотят&nbsp;ли они познакомиться. Если оба согласятся, состоится встреча.\n			</div>\n		</div>\n		<img src=\"/static/obyatye.png\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.whatNextImage : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.floatJustifyBetween : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						&laquo;И&nbsp;вот они встретились. Два&nbsp;черноглазых парня,&nbsp;&mdash; одному&nbsp;14, другому&nbsp;42, чем-то неуловимо похожие друг на&nbsp;друга и&nbsp;почти стопроцентные братья по&nbsp;крови&raquo;\n					</div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						<a href=\"http://takiedela.ru/2016/03/perelivanie-zhizni/\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">История от Юлии Варенцовой</a>\n					</div>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						&laquo;Я&nbsp;видел встречу только однажды, и&nbsp;это&nbsp;одно из&nbsp;самых сильных впечатлений за&nbsp;всю мою жизнь&raquo;\n					</div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n						<a href=\"https://snob.ru/selected/entry/50262?v=1464270594\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">Репортаж Валерия Панюшкина</a>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.footer : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.goToFirst : stack1), depth0))
	    + "\">\n						<img src=\"/static/location.png\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.goToFirstImage : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.how : depth0)) != null ? stack1.goToFirstText : stack1), depth0))
	    + "\">\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n								Если вы&nbsp;решили стать донором костного мозга, сделайте первый шаг&nbsp;&mdash; найдите пункт, в&nbsp;котором сможете сдать кровь и&nbsp;вступить в&nbsp;регистр.\n							</div>\n							<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n								<a href=\"#\" data-action=\"scroll-to\" data-element=\"#first-step\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">Найти удобный пункт</a>\n							</div>\n						</div>\n					</div>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					Если сомневаетесь, <a href=\"http://advita.ru/donor.php\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">узнайте больше на сайте Advita</a>.\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					В любом случае расскажите о донорстве костного мозга друзьям.\n					<br>\n					Так вы можете спасти чью-то жизнь, даже если не вступите в регистр. \n				</div>\n				<div data-view=\"how-share\"></div>\n			</div>\n		</div>\n	</div>	\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.credentials : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.credentialsImage : stack1), depth0))
	    + "\">\n				<img src=\"/static/credentials_why.png\">\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.credentialsText : stack1), depth0))
	    + "\">\n				Сделала Алиса Яннау в Школе редакторов Бюро Горбунова. \n				<br>\n				Иллюстратор — Марина Савицкая, разработчик — Артур Стамбульцян.\n				<br>\n				<a href=\"/static/pdf/agreement.pdf\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">Пользовательское соглашение</a>.\n			</div>	\n		</div>\n	</div>\n</div>";
	},"useData":true,"useDepths":true});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _page = __webpack_require__(7);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _test = __webpack_require__(53);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _counters = __webpack_require__(79);
	
	var _counters2 = _interopRequireDefault(_counters);
	
	var _page3 = __webpack_require__(21);
	
	var _page4 = _interopRequireDefault(_page3);
	
	var _typography = __webpack_require__(23);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _why = __webpack_require__(80);
	
	var _why2 = _interopRequireDefault(_why);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_PageView) {
		_inherits(_class, _PageView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				var _this2 = this;
	
				this.countersModel = new _counters2.default();
	
				this.registerChild(new _test2.default(), 'how-test');
	
				this.countersModel.fetchPotentialDonors().then(function () {
					_this2.render();
				}, function () {});
	
				this.render();
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				return _underscore2.default.extend(data, {
					page: _page4.default,
					typography: _typography2.default,
					why: _why2.default,
					data: {
						potentialDonors: this.countersModel.potentialDonors
					}
				});
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(82);
			}
		}]);

		return _class;
	}(_page2.default);

	exports.default = _class;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.isLastStep = exports.reasons = exports.states = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _start2 = __webpack_require__(54);
	
	var _start3 = _interopRequireDefault(_start2);
	
	var _game = __webpack_require__(60);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _age = __webpack_require__(64);
	
	var _age2 = _interopRequireDefault(_age);
	
	var _weight = __webpack_require__(67);
	
	var _weight2 = _interopRequireDefault(_weight);
	
	var _auto = __webpack_require__(69);
	
	var _auto2 = _interopRequireDefault(_auto);
	
	var _disease = __webpack_require__(71);
	
	var _disease2 = _interopRequireDefault(_disease);
	
	var _finish = __webpack_require__(73);
	
	var _finish2 = _interopRequireDefault(_finish);
	
	var _test = __webpack_require__(55);
	
	var _test2 = _interopRequireDefault(_test);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var states = { START: 'START', GAME: 'GAME', FINISH: 'FINISH' };
	
	var reasons = { AGE: 'AGE', WEIGHT: 'WEIGHT', AUTO: 'AUTO', DISEASE: 'DISEASE' };
	
	function isLastStep(stepIndex, stepsAmount) {
		return stepIndex + 1 >= stepsAmount;
	}
	
	var steps = [{
		View: _age2.default
	}, {
		View: _weight2.default
	}, {
		View: _auto2.default
	}, {
		View: _disease2.default
	}];
	
	var TestModel = function (_Backbone$Model) {
		_inherits(TestModel, _Backbone$Model);
	
		function TestModel() {
			_classCallCheck(this, TestModel);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(TestModel).apply(this, arguments));
		}
	
		_createClass(TestModel, [{
			key: 'defaults',
			get: function get() {
				return {
					state: states.START,
					step: 0,
					result: true,
					reason: null,
					data: {}
				};
			}
		}, {
			key: 'ageFail',
			get: function get() {
				return this.get('reason') == reasons.AGE;
			}
		}, {
			key: 'age17',
			get: function get() {
				return this.get('data').age == 17;
			}
		}, {
			key: 'age16',
			get: function get() {
				return this.get('data').age == 16;
			}
		}, {
			key: 'age15_10',
			get: function get() {
				return this.get('data').age && this.get('data').age <= 15 && this.get('data').age >= 10;
			}
		}, {
			key: 'age10less',
			get: function get() {
				return this.get('data').age && this.get('data').age < 10;
			}
		}, {
			key: 'age45more',
			get: function get() {
				return this.get('data').age && this.get('data').age > 45;
			}
		}, {
			key: 'weightFail',
			get: function get() {
				return this.get('reason') == reasons.WEIGHT;
			}
		}, {
			key: 'weight47less',
			get: function get() {
				return this.get('data').weight && this.get('data').weight <= 47;
			}
		}, {
			key: 'weight48_49',
			get: function get() {
				return this.get('data').weight == 49 || this.get('data').weight == 48;
			}
		}, {
			key: 'autoFail',
			get: function get() {
				return this.get('reason') == reasons.AUTO;
			}
		}, {
			key: 'diseaseFail',
			get: function get() {
				return this.get('reason') == reasons.DISEASE;
			}
		}, {
			key: 'success',
			get: function get() {
				return this.get('result');
			}
		}]);
	
		return TestModel;
	}(_backbone2.default.Model);
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				return _underscore2.default.extend(data, {
					styles: _test2.default
				});
			}
		}, {
			key: 'init',
			value: function init() {
				this.testModel = new TestModel();
				this.listenTo(this.testModel, 'change:state change:step', this._changeState);
				this._changeState();
			}
		}, {
			key: '_changeState',
			value: function _changeState() {
				this.removeChildren('test-container');
				switch (this.testModel.get('state')) {
					case states.START:
						this.registerChild(new _start3.default(), 'test-container');
						break;
					case states.GAME:
						this.registerChild(new _game2.default({
							testModel: this.testModel,
							stepsAmount: steps.length,
							currentStepIndex: this.testModel.get('step'),
							StepView: steps[this.testModel.get('step')].View
						}), 'test-container');
						break;
					case states.FINISH:
						this.registerChild(new _finish2.default({
							testModel: this.testModel
						}), 'test-container');
						break;
				}
				this.render();
			}
		}, {
			key: '_start',
			value: function _start() {
				this.testModel.set({
					state: states.GAME
				});
			}
		}, {
			key: 'className',
			get: function get() {
				return _test2.default.root;
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(78);
			}
		}, {
			key: 'events',
			get: function get() {
				return {
					'click [data-action="test-start"]': '_start'
				};
			}
		}]);
	
		return _class;
	}(_base2.default);
	
	exports.default = _class;
	exports.states = states;
	exports.reasons = reasons;
	exports.isLastStep = isLastStep;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _test = __webpack_require__(55);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _start = __webpack_require__(57);
	
	var _start2 = _interopRequireDefault(_start);
	
	var _inputs = __webpack_require__(25);
	
	var _inputs2 = _interopRequireDefault(_inputs);
	
	var _typography = __webpack_require__(23);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				this.render();
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				return _underscore2.default.extend(data, {
					testStyles: _test2.default,
					startStyles: _start2.default,
					inputsStyles: _inputs2.default,
					typography: _typography2.default
				});
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(59);
			}
		}, {
			key: 'className',
			get: function get() {
				return _start2.default.root;
			}
		}]);

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./test.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./test.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".ShiC6JgIaOalBQVpIsYtL {\n\tmargin: auto;\n\tposition: relative;\n}\n\n._1ZNJ4h3Uct4YGPwsOlP-a2 {\n\tposition: relative;\n\tz-index: 2;\n\ttext-align: center;\n}\n\n._10prCLGoK4eiHXC-VVYaZu {\n\t\n}\n\n._2a18C1cpDnHlHQPP919Gwu {\n\tfont-size: 16px;\n\ttext-transform: uppercase;\n\tmargin-bottom: 14px;\n\tletter-spacing: 4px;\n}\n\n/*.title {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 40px;\n\tline-height: 45px;\n\tfont-weight: bold;\n\tmargin-bottom: 15px;\n}\n\n.subtitle {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 300;\n\tfont-size: 18px;\n\tline-height: 26px;\n\tmargin-bottom: 35px;\n\tletter-spacing: -0.2px;\n}*/", ""]);
	
	// exports
	exports.locals = {
		"root": "ShiC6JgIaOalBQVpIsYtL",
		"container": "_1ZNJ4h3Uct4YGPwsOlP-a2",
		"step": "_10prCLGoK4eiHXC-VVYaZu",
		"test": "_2a18C1cpDnHlHQPP919Gwu"
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules!./../../../node_modules/postcss-loader/index.js!./start.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules!./../../../node_modules/postcss-loader/index.js!./start.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._2c_X9l_2tFGA0jZbDU9JRH {\n\twidth: 758px;\n\tleft: calc( ( 657px - 758px ) / 2 );\n\tpadding: 85px 0 0;\n\tposition: relative;\n\tmin-height: 474px;\n}\n\n._2c_X9l_2tFGA0jZbDU9JRH::after {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: url(\"/static/test_bg.png\");\n\tbackground-position: center center;\n\tbackground-size: auto 474px;\n\tbackground-repeat: no-repeat;\n\topacity: 0.35;\n\tcontent: '';\n}\n\n.HTG0JT2qR5xnUiu13GRMe {\n\tposition: relative;\n\tz-index: 2;\n}\n\n._28psnc6FGdBBukliEFLXCe {\n\tmargin-top: 70px;\n}", ""]);
	
	// exports
	exports.locals = {
		"root": "_2c_X9l_2tFGA0jZbDU9JRH",
		"container": "HTG0JT2qR5xnUiu13GRMe",
		"actions": "_28psnc6FGdBBukliEFLXCe"
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.startStyles : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.testStyles : depth0)) != null ? stack1.test : stack1), depth0))
	    + "\">тест</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Могу ли я стать донором?</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n		Ответьте на четыре вороса и узнайте,\n		<br>\n		можете ли вы стать донором костного мозга.\n		<br>\n		Или прочитайте <a target=\"_blank\" href=\"/static/pdf/protivopokazania.pdf\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">полный список противопоказаний</a>.\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.startStyles : depth0)) != null ? stack1.actions : stack1), depth0))
	    + "\">\n		<button class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.button : stack1), depth0))
	    + "\" data-action=\"test-start\">начать</button>\n	</div>\n</div>	";
	},"useData":true});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _test = __webpack_require__(55);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _game = __webpack_require__(61);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				this.registerChild(new this.StepView({
					testModel: this.testModel,
					currentStepIndex: this.currentStepIndex,
					stepsAmount: this.stepsAmount
				}), 'test-step');
				this.render();
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				return _underscore2.default.extend(data, {
					testStyles: _test2.default,
					gameStyles: _game2.default,
					currentStepIndex: this.currentStepIndex + 1,
					stepsAmount: this.stepsAmount
				});
			}
		}, {
			key: 'className',
			get: function get() {
				return _game2.default.root;
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(63);
			}
		}]);

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules!./../../../node_modules/postcss-loader/index.js!./game.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules!./../../../node_modules/postcss-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._3HKYlb7Vl6Iztk4-tC_BvZ {\n\ttext-align: left;\n\tmargin: auto;\n\tposition: relative;\n}\n\n._3m4BXQ40TaSw_695CDQc5o {\n\tmargin: 0;\n}\n\n.EjQqlofCJUMJf9KAV_dIh {\n\ttext-align: left;\n}\n\n.EjQqlofCJUMJf9KAV_dIh ._1AqLMaC9TJ6xn7EKtufMhi:not(:last-child) {\n\tmargin-bottom: 21px;\n}\n\n.WQ9BEtiggpUohVS_zgPoD {\n\ttext-align: left;\n}\n\n._2lOXnJo1wdTO1NE9f7TYGq {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: column;\n\theight: 200px;\n\tmargin-bottom: -21px;\n}\n\n._2lOXnJo1wdTO1NE9f7TYGq ._5nZ_ma_l1V-rlYzO9KdDB {\n\twidth: calc(50% - 10px);\n}\n\n._2lOXnJo1wdTO1NE9f7TYGq ._5nZ_ma_l1V-rlYzO9KdDB:not(:last-child) {\n\tmargin-bottom: 21px;\n}\n\n.CY-R0zNjVnWMwfVMTfk1u {\n\tmargin-top: 44px;\n}\n\n._3lYQsW3cc0xDgaiRcAwKBs {\n\tdisplay: none;\n\tposition: absolute;\n    z-index: 3;\n    left: 365px;\n    top: 173px;\n\twidth: 420px;\n\tfont-size: 10px;\n\tline-height: 15px;\n\tbackground-color: rgba(9, 159, 175, 0.27);\n\tpadding: 24px;\n}\n\n._1nF2Jvd23mv6WCj4f2p9-J {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n}\n\n._320FMHY6Zq7JbhbLouCfCj {\n\tfont-weight: bold;\n\tmargin-bottom: 3px;\n}\n\n._1_0uQ0i-1Q2gBAY2m8sRhh {\n\tmargin: 0;\n\tpadding-left: 13px;\n}\n\n._2tuliSpd6Yb2uLyt1BLJAs:first-child {\n\twidth: 270px;\n\tflex-shrink: 0;\n}", ""]);
	
	// exports
	exports.locals = {
		"root": "_3HKYlb7Vl6Iztk4-tC_BvZ",
		"form": "_3m4BXQ40TaSw_695CDQc5o",
		"formAuto": "EjQqlofCJUMJf9KAV_dIh _3m4BXQ40TaSw_695CDQc5o",
		"radio": "_1AqLMaC9TJ6xn7EKtufMhi",
		"formDisease": "WQ9BEtiggpUohVS_zgPoD _3m4BXQ40TaSw_695CDQc5o",
		"formDiseaseContainer": "_2lOXnJo1wdTO1NE9f7TYGq",
		"checkbox": "_5nZ_ma_l1V-rlYzO9KdDB",
		"actions": "CY-R0zNjVnWMwfVMTfk1u",
		"autoList": "_3lYQsW3cc0xDgaiRcAwKBs",
		"autoListContainer": "_1nF2Jvd23mv6WCj4f2p9-J",
		"autoListTitle": "_320FMHY6Zq7JbhbLouCfCj",
		"autoListUl": "_1_0uQ0i-1Q2gBAY2m8sRhh",
		"autoListCol": "_2tuliSpd6Yb2uLyt1BLJAs"
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.testStyles : depth0)) != null ? stack1.test : stack1), depth0))
	    + "\">тест</div>\n<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.stepContent : stack1), depth0))
	    + "\" data-view=\"test-step\"></div>";
	},"useData":true});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _step = __webpack_require__(65);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _test = __webpack_require__(53);
	
	var _test2 = __webpack_require__(55);
	
	var _test3 = _interopRequireDefault(_test2);
	
	var _game = __webpack_require__(61);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_StepView) {
		_inherits(_class, _StepView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: '_inputAge',
			value: function _inputAge(e) {
				var value = (0, _jquery2.default)(e.currentTarget).val();
				this.age = value || undefined;
				value ? this._enable() : this._disable();
			}
		}, {
			key: '_appended',
			value: function _appended() {
				_get(Object.getPrototypeOf(_class.prototype), '_appended', this).call(this);
				this.$el.find('[data-action="test-input"]').focus();
			}
		}, {
			key: '_answer',
			value: function _answer(e) {
				var _this2 = this;
	
				if (isFinite(this.age) && this.age >= 0) {
					if (this.age > 45 || this.age < 18) {
						this.testModel.set({
							state: _test.states.FINISH,
							result: false,
							reason: _test.reasons.AGE,
							data: {
								age: this.age
							}
						});
					} else {
						this._goNext();
					}
				} else {
					this.$el.find('[data-action="test-input"]').focus().val('').trigger('input').addClass(_game2.default.inputInvalid);
					setTimeout(function () {
						_this2.$el.find('[data-action="test-input"]').removeClass(_game2.default.inputInvalid);
					}, 1000);
				}
				e.preventDefault();
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(66);
			}
		}, {
			key: 'events',
			get: function get() {
				return {
					'submit [data-action="test-form"]': '_answer',
					'input [data-action="test-input"]': '_inputAge'
				};
			}
		}]);

		return _class;
	}(_step2.default);

	exports.default = _class;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _test = __webpack_require__(53);
	
	var _test2 = __webpack_require__(55);
	
	var _test3 = _interopRequireDefault(_test2);
	
	var _game = __webpack_require__(61);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _inputs = __webpack_require__(25);
	
	var _inputs2 = _interopRequireDefault(_inputs);
	
	var _typography = __webpack_require__(23);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				this.render();
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				return _underscore2.default.extend(data, {
					testStyles: _test3.default,
					gameStyles: _game2.default,
					inputsStyles: _inputs2.default,
					typography: _typography2.default
				});
			}
		}, {
			key: '_disable',
			value: function _disable() {
				this.$el.find('[data-action="test-submit"]').attr('disabled', 'disabled');
			}
		}, {
			key: '_enable',
			value: function _enable() {
				this.$el.find('[data-action="test-submit"]').removeAttr('disabled');
			}
		}, {
			key: '_appended',
			value: function _appended() {
				this._disable();
			}
		}, {
			key: '_goNext',
			value: function _goNext() {
				if ((0, _test.isLastStep)(this.currentStepIndex, this.stepsAmount)) {
					this.testModel.set({
						state: _test.states.FINISH,
						result: true
					});
				} else {
					this.testModel.set({
						step: this.currentStepIndex + 1
					});
				}
			}
		}, {
			key: 'className',
			get: function get() {
				return _test3.default.step;
			}
		}]);

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Сколько вам лет?</div>\n<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">Мы никому не расскажем.</div>\n<form class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.form : stack1), depth0))
	    + "\" data-action=\"test-form\">\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n		<input class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.input : stack1), depth0))
	    + "\" data-action=\"test-input\" maxlength=\"3\"/>\n	</div>	\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.actions : stack1), depth0))
	    + "\">\n		<button class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.button : stack1), depth0))
	    + "\" data-action=\"test-submit\">дальше</button>\n	</div>\n</form>";
	},"useData":true});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _step = __webpack_require__(65);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _test = __webpack_require__(53);
	
	var _test2 = __webpack_require__(55);
	
	var _test3 = _interopRequireDefault(_test2);
	
	var _game = __webpack_require__(61);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_StepView) {
		_inherits(_class, _StepView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: '_inputWeight',
			value: function _inputWeight(e) {
				var value = (0, _jquery2.default)(e.currentTarget).val();
				this.weight = value || undefined;
				value ? this._enable() : this._disable();
			}
		}, {
			key: '_appended',
			value: function _appended() {
				_get(Object.getPrototypeOf(_class.prototype), '_appended', this).call(this);
				this.$el.find('[data-action="test-input"]').focus();
			}
		}, {
			key: '_answer',
			value: function _answer(e) {
				var _this2 = this;
	
				if (isFinite(this.weight) && this.weight >= 0) {
					if (this.weight < 50) {
						this.testModel.set({
							state: _test.states.FINISH,
							result: false,
							reason: _test.reasons.WEIGHT,
							data: {
								weight: this.weight
							}
						});
					} else {
						this._goNext();
					}
				} else {
					this.$el.find('[data-action="test-input"]').focus().val('').trigger('input').addClass(_game2.default.inputInvalid);
					setTimeout(function () {
						_this2.$el.find('[data-action="test-input"]').removeClass(_game2.default.inputInvalid);
					}, 1000);
				}
				e.preventDefault();
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(68);
			}
		}, {
			key: 'events',
			get: function get() {
				return {
					'submit [data-action="test-form"]': '_answer',
					'input [data-action="test-input"]': '_inputWeight'
				};
			}
		}]);

		return _class;
	}(_step2.default);

	exports.default = _class;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Сколько вы весите?</div>\n<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">Только между нами.</div>\n<form class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.form : stack1), depth0))
	    + "\" data-action=\"test-form\">\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n		<input class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.input : stack1), depth0))
	    + "\" data-action=\"test-input\" maxlength=\"3\"/>&nbsp;&nbsp;КГ\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.actions : stack1), depth0))
	    + "\">\n		<button class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.button : stack1), depth0))
	    + "\" data-action=\"test-submit\">дальше</button>\n	</div>\n</form>";
	},"useData":true});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _step = __webpack_require__(65);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _test = __webpack_require__(53);
	
	var _test2 = __webpack_require__(55);
	
	var _test3 = _interopRequireDefault(_test2);
	
	var _game = __webpack_require__(61);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_StepView) {
		_inherits(_class, _StepView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: '_changeAuto',
			value: function _changeAuto(e) {
				this.auto = e.currentTarget.value === 'false' ? false : true;
				this._enable();
			}
		}, {
			key: '_answer',
			value: function _answer(e) {
				if (_underscore2.default.isBoolean(this.auto)) {
					if (this.auto === true) {
						this.testModel.set({
							state: _test.states.FINISH,
							result: false,
							reason: _test.reasons.AUTO
						});
					} else {
						this._goNext();
					}
				}
				e.preventDefault();
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(70);
			}
		}, {
			key: 'events',
			get: function get() {
				var _this2 = this;
	
				return {
					'submit [data-action="test-form"]': '_answer',
					'change [data-action="test-input"]': '_changeAuto',
					'mouseenter [data-action="show-full-list"]': function mouseenterDataActionShowFullList(e) {
						_this2.$el.find('[data-role="full-list"]').show();
					},
					'mouseleave [data-action="show-full-list"]': function mouseleaveDataActionShowFullList(e) {
						_this2.$el.find('[data-role="full-list"]').hide();
					}
				};
			}
		}]);

		return _class;
	}(_step2.default);

	exports.default = _class;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">\n	Были ли у вас\n	<br>\n	гемотрансмиссионные заболевания?\n</div>\n<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n	Это заболевания, которые передаются через кровь.\n	<br>\n	Например, вирусные гепатиты, СПИД, токсоплазмоз.\n	<br>\n	Если сомневаетесь, посмотрите <span target=\"_blank\" data-action=\"show-full-list\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.linkPseudo : stack1), depth0))
	    + "\">полный список</span>.\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoList : stack1), depth0))
	    + "\" data-role=\"full-list\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListContainer : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListCol : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListTitle : stack1), depth0))
	    + "\">Инфекционные:</div>\n				<ul class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListUl : stack1), depth0))
	    + "\">\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">СПИД, носительство ВИЧ-инфекции;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Сифилис, врожденный или приобретенный;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Вирусные гепатиты, положительный результат\n						<br>\n						исследования на маркеры вирусных гепатитов\n						<br>\n						(HBsAg, анти-HCV антител);</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Туберкулез, все формы;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Бруцеллез;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Сыпной тиф;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Туляремия;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Лепра.</li>\n				</ul>\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListCol : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListTitle : stack1), depth0))
	    + "\">Паразитарные:</div>\n				<ul class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListUl : stack1), depth0))
	    + "\">\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Эхинококкоз;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Токсоплазмоз;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Трипаносомоз;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Филяриатоз;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Ришта;</li>\n					<li class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.autoListLi : stack1), depth0))
	    + "\">Лейшманиоз.</li>\n				</ul>\n			</div>\n		</div>\n	</div>\n</div>\n<form class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.formAuto : stack1), depth0))
	    + "\" data-action=\"test-form\">\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.radio : stack1), depth0))
	    + "\">\n			<input type=\"radio\" value=\"true\" data-action=\"test-input\" name=\"game-auto-radio\" id=\"game-auto-radio-true\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.radioInput : stack1), depth0))
	    + "\">\n			<label for=\"game-auto-radio-true\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.radioLabel : stack1), depth0))
	    + "\">Да</label>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.radio : stack1), depth0))
	    + "\">\n			<input type=\"radio\" value=\"false\" data-action=\"test-input\" name=\"game-auto-radio\" id=\"game-auto-radio-false\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.radioInput : stack1), depth0))
	    + "\">\n			<label for=\"game-auto-radio-false\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.radioLabel : stack1), depth0))
	    + "\">Нет</label>\n		</div>\n	</div>	\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.actions : stack1), depth0))
	    + "\">\n		<button class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.button : stack1), depth0))
	    + "\" data-action=\"test-submit\">дальше</button>\n	</div>\n</form>";
	},"useData":true});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _step = __webpack_require__(65);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _test = __webpack_require__(53);
	
	var _test2 = __webpack_require__(55);
	
	var _test3 = _interopRequireDefault(_test2);
	
	var _game = __webpack_require__(61);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var data = [{
		text: 'Ничего серьезнее ОРВИ',
		danger: false
	}, {
		text: 'Мне удаляли орган',
		danger: true
	}, {
		text: 'Малярия',
		danger: true
	}, {
		text: 'Туберкулез',
		danger: true
	}, {
		text: 'Психическое расстройство',
		danger: true
	}, {
		text: 'Злокачественное заболевание',
		danger: true
	}, {
		text: 'Органическое заболевание центральной нервной системы',
		danger: false
	}];
	
	var _class = function (_StepView) {
		_inherits(_class, _StepView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				_get(Object.getPrototypeOf(_class.prototype), 'init', this).call(this);
				this.selected = {};
			}
		}, {
			key: '_changeDisease',
			value: function _changeDisease(e) {
				var id = (0, _jquery2.default)(e.currentTarget).data('id');
				if (e.currentTarget.checked) {
					this.selected['item-' + id] = data[id];
				} else {
					delete this.selected['item-' + id];
				}
				Object.keys(this.selected).length ? this._enable() : this._disable();
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				return _underscore2.default.extend({ data: data }, _get(Object.getPrototypeOf(_class.prototype), '_prepareData', this).call(this));
			}
		}, {
			key: '_answer',
			value: function _answer(e) {
				var result = true;
				for (var item in this.selected) {
					if (this.selected[item].danger) {
						result = false;
						break;
					}
				}
				if (!result) {
					this.testModel.set({
						state: _test.states.FINISH,
						result: false,
						reason: _test.reasons.DISEASE,
						data: {
							disease: this.selected
						}
					});
				} else {
					this._goNext();
				}
				e.preventDefault();
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(72);
			}
		}, {
			key: 'events',
			get: function get() {
				return {
					'submit [data-action="test-form"]': '_answer',
					'change [data-action="test-input"]': '_changeDisease'
				};
			}
		}]);

		return _class;
	}(_step2.default);

	exports.default = _class;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";
	
	  return "			<div class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].gameStyles : depths[1])) != null ? stack1.checkbox : stack1), depth0))
	    + "\">\n				<input type=\"checkbox\" data-action=\"test-input\" name=\"game-auto-checkbox\" id=\"game-auto-checkbox-"
	    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
	    + "\" class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].inputsStyles : depths[1])) != null ? stack1.checkboxInput : stack1), depth0))
	    + "\" data-id="
	    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
	    + ">\n				<label for=\"game-auto-checkbox-"
	    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
	    + "\" class=\""
	    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].inputsStyles : depths[1])) != null ? stack1.checkboxLabel : stack1), depth0))
	    + "\" "
	    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.danger : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
	    + "</label>\n			</div>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return "data-danger=\"true\"";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Что у вас<br>в медицинской карте?</div>\n<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">Есть сейчас или было когда-то.</div>\n<form class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.formDisease : stack1), depth0))
	    + "\" data-action=\"test-form\">\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.formDiseaseContainer : stack1), depth0))
	    + "\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gameStyles : depth0)) != null ? stack1.actions : stack1), depth0))
	    + "\">\n		<button class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputsStyles : depth0)) != null ? stack1.button : stack1), depth0))
	    + "\" data-action=\"test-submit\">дальше</button>\n	</div>\n</form>";
	},"useData":true,"useDepths":true});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _base = __webpack_require__(5);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _share = __webpack_require__(8);
	
	var _share2 = _interopRequireDefault(_share);
	
	var _test = __webpack_require__(53);
	
	var _test2 = __webpack_require__(55);
	
	var _test3 = _interopRequireDefault(_test2);
	
	var _finish = __webpack_require__(74);
	
	var _finish2 = _interopRequireDefault(_finish);
	
	var _share3 = __webpack_require__(29);
	
	var _share4 = _interopRequireDefault(_share3);
	
	var _inputs = __webpack_require__(25);
	
	var _inputs2 = _interopRequireDefault(_inputs);
	
	var _typography = __webpack_require__(23);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FinishShareView = function (_ShareView) {
		_inherits(FinishShareView, _ShareView);
	
		function FinishShareView() {
			_classCallCheck(this, FinishShareView);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(FinishShareView).apply(this, arguments));
		}
	
		_createClass(FinishShareView, [{
			key: '_prepareData',
			value: function _prepareData() {
				return _underscore2.default.extend(_get(Object.getPrototypeOf(FinishShareView.prototype), '_prepareData', this).call(this), { testStyles: _test3.default, share: _share4.default });
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(76);
			}
		}]);
	
		return FinishShareView;
	}(_share2.default);
	
	var ShareModel = function (_Backbone$Model) {
		_inherits(ShareModel, _Backbone$Model);
	
		function ShareModel() {
			_classCallCheck(this, ShareModel);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ShareModel).apply(this, arguments));
		}
	
		_createClass(ShareModel, [{
			key: 'defaults',
			get: function get() {
				return {
					title: '',
					description: ''
				};
			}
		}]);
	
		return ShareModel;
	}(_backbone2.default.Model);
	
	var _class = function (_BaseView) {
		_inherits(_class, _BaseView);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'init',
			value: function init() {
				this.shareModel = new ShareModel();
				this.shareView = this.registerChild(new FinishShareView({
					shareModel: this.shareModel
				}), 'test-share');
	
				if (this.testModel.success) {
					this.shareModel.set('title', 'Я подхожу!');
					this.shareModel.set('description', 'Могу ли я быть донором костного мозга? Тест для тех, кто еще не знает. И сайт о том, зачем вообще сдавать костный мозг и где.');
					this.shareModel.set('image', 'arthurstam.github.io/static/share_test_positive.png');
				} else {
					this.shareModel.set('title', 'Могу ли я стать донором костного мозга?');
					this.shareModel.set('description', 'Пройдите тест и узнайте, можете ли вы стать донором костного мозга. Или просто почитайте, зачем это нужно.');
					this.shareModel.set('image', 'arthurstam.github.io/static/share_test_negative.png');
				}
	
				this.shareView.render();
				this.render();
			}
		}, {
			key: '_agreementChange',
			value: function _agreementChange(e) {
				switch (e.currentTarget.checked) {
					case false:
						this.shareModel.set('description', 'Пройдите тест и узнайте, можете ли вы стать донором костного мозга. Или просто почитайте, зачем это нужно.');
						break;
					case true:
						if (this.testModel.age17) {
							this.shareModel.set('description', 'Мой результат: Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут с 18 лет. Ждем вас через год!');
						}
						if (this.testModel.age16) {
							this.shareModel.set('description', 'Мой результат: Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут с 18 лет. Ждем вас через 2 года!');
						}
						if (this.testModel.age15_10) {
							this.shareModel.set('description', 'Мой результат: Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут только совершеннолетних. Ждем вас после 18!');
						}
						if (this.testModel.age45more) {
							this.shareModel.set('description', 'Мой результат: Вы не можете стать донором костного мозга, потому что вступить в регистр можно до 45 лет. Донором можно стать до 60 лет, но типирование — дорогая процедура, поэтому важно, чтобы потенциальные доноры числились в регистре как можно дольше.');
						}
						if (this.testModel.age10less) {
							this.shareModel.set('description', 'Мой результат: Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут только совершеннолетних. Ждем вас после 18!');
						}
						if (this.testModel.weight47less) {
							this.shareModel.set('description', 'Мой результат: Вы не можете стать донором костного мозга, потому что в доноры берут людей весом от 50 килограмм. ');
						}
						if (this.testModel.weight48_49) {
							this.shareModel.set('description', 'Мой результат: Сейчас вы не можете стать донором костного мозга, потому что в доноры берут людей весом от 50 килограммов. Но вы очень близки! Пройдите тест ещё раз, указав, что весите 50 килограмм, и посмотрите, нет ли у вас других противопоказаний. Если нет — ждём вас через пару килограммов!');
						}
						if (this.testModel.autoFail) {
							this.shareModel.set('description', 'Мой результат: Вы не можете стать донором костного мозга, потому что аутоиммунные заболевания — абсолютное противопоказание.');
						}
						if (this.testModel.diseaseFail) {
							this.shareModel.set('description', 'Мой результат: Вы не можете стать донором костного мозга, потому что у вас есть противопоказания. У человека, которому нужна пересадка, очень слабый иммунитет. Поэтому даже если вы болели очень давно, врачи решают не рисковать.');
						}
						break;
				}
			}
		}, {
			key: '_prepareData',
			value: function _prepareData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	
				return _underscore2.default.extend(data, {
					testStyles: _test3.default,
					finishStyles: _finish2.default,
					inputStyles: _inputs2.default,
					testModel: this.testModel,
					typography: _typography2.default
				});
			}
		}, {
			key: '_template',
			get: function get() {
				return __webpack_require__(77);
			}
		}, {
			key: 'className',
			get: function get() {
				return _finish2.default.root;
			}
		}, {
			key: 'events',
			get: function get() {
				return {
					'change [data-action="test-finish-agreement"]': '_agreementChange'
				};
			}
		}]);

		return _class;
	}(_base2.default);

	exports.default = _class;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules!./../../../node_modules/postcss-loader/index.js!./finish.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules!./../../../node_modules/postcss-loader/index.js!./finish.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._3B-1CcHYxRdP4xmviYBWko {\n\ttext-align: left;\n}\n\n.BPlcspTWA-U5f8Dm8GR-4 {\n\tfont-size: 0;\n\tletter-spacing: 0;\n\tline-height: 0;\n}\n\n._2pkN-Ik882-3VtpKkxL3v8 {\n\twidth: 28px;\n\theight: 28px;\n\ttext-align: center;\n\tbackground-color: #000;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tline-height: 28px;\n\tcolor: #fff;\n\tfont-size: 15px;\n\tfont-weight: bold;\n\tmargin-right: 11px;\n}\n\n.kZRWI19Iy-xWer-tCiQ37 {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tfont-size: 16px;\n}\n\n._3CcTlLIxG3BS1PKJkuGDM2 {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.FS2caTlSXTucapYV8McOB {\n\tjustify-content: flex-start;\n}\n\n._3QjaZhGdzkNYAsbrUlSWIj {\n\tjustify-content: flex-start;\n\tposition: relative;\n}\n\n._1HnD0zUaIRYJELjx-_Do2W {\n\tposition: relative;\n\tz-index: 2;\n}\n\n.VEb7briyZ5oEkc3yeKD1A {\n\tposition: absolute;\n\tz-index: 1;\n\tleft: 107px;\n    top: -55px;\n    width: 646px;\n}\n\n.UQMNwjI_mEdn198JXfMeZ {\n\n}\n\n._1lZi4vkmIYBBcoC7Rz8Bt6 {\n\twidth: 340px;\n}\n\n._2Qy30uC1QeDUshVxKKwnIH {\n\tposition: absolute;\n\tz-index: 1;\n    right: -130px;\n    bottom: -80px;\n    width: 410px;\n}\n\n.zT-TpgEF96c_-Es7rTxxo {\n\tmargin-top: 40px;\n}\n\n._2S4dD-WewjwRgF4ALZRwgR {\n\tmargin-top: 15px;\n}", ""]);
	
	// exports
	exports.locals = {
		"root": "_3B-1CcHYxRdP4xmviYBWko",
		"header": "BPlcspTWA-U5f8Dm8GR-4",
		"headerIcon": "_2pkN-Ik882-3VtpKkxL3v8",
		"headerText": "kZRWI19Iy-xWer-tCiQ37",
		"content": "_3CcTlLIxG3BS1PKJkuGDM2",
		"contentFail": "FS2caTlSXTucapYV8McOB",
		"contentSuccess": "_3QjaZhGdzkNYAsbrUlSWIj",
		"successText": "_1HnD0zUaIRYJELjx-_Do2W",
		"successImage": "VEb7briyZ5oEkc3yeKD1A",
		"fail": "UQMNwjI_mEdn198JXfMeZ",
		"failText": "_1lZi4vkmIYBBcoC7Rz8Bt6",
		"failImage": "_2Qy30uC1QeDUshVxKKwnIH",
		"share": "zT-TpgEF96c_-Es7rTxxo",
		"agreement": "_2S4dD-WewjwRgF4ALZRwgR"
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.share : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n	<a href=\""
	    + alias2(((helper = (helper = helpers.vkUrl || (depth0 != null ? depth0.vkUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"vkUrl","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.share : depth0)) != null ? stack1.itemVk : stack1), depth0))
	    + "\"></a>\n	<a href=\""
	    + alias2(((helper = (helper = helpers.fbUrl || (depth0 != null ? depth0.fbUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"fbUrl","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.share : depth0)) != null ? stack1.itemFb : stack1), depth0))
	    + "\"></a>	\n</div>\n";
	},"useData":true});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.contentSuccess : stack1), depth0));
	},"3":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.contentFail : stack1), depth0));
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.success : stack1), depth0))
	    + "\">\n			<img src=\"/static/test_success.png\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.successImage : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.successText : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">Да!</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					Вы можете стать донором\n					<br>\n					и спасти чью-то жизнь.\n					<br>\n					Для этого вступите \n					<br>\n					в регистр — сдайте кровь\n					<br>\n					на типирование\n					<br>\n					<a class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\" data-action=\"redirect-and-scroll-to\" data-element=\"#first-step\" data-page=\"how\">в специальном пункте</a>.\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					Расскажите о проекте\n					<br>\n					друзьям, чтобы спасти\n					<br>\n					еще больше жизней.\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.share : stack1), depth0))
	    + "\" data-view=\"test-share\"></div>\n			</div>	\n		<div>\n\n";
	},"7":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};
	
	  return "\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.fail : stack1), depth0))
	    + "\">\n			<img src=\"/static/test_fail.png\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.failImage : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.failText : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.ageFail : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.weightFail : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.autoFail : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.diseaseFail : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.ageFail : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.weightFail : stack1),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.autoFail : stack1),{"name":"if","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.diseaseFail : stack1),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.agreement : stack1), depth0))
	    + "\">\n					<input type=\"checkbox\" data-action=\"test-finish-agreement\" id=\"test-finish-agreement\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputStyles : depth0)) != null ? stack1.checkboxInput : stack1), depth0))
	    + "\">\n					<label for=\"test-finish-agreement\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inputStyles : depth0)) != null ? stack1.checkboxLabel : stack1), depth0))
	    + "\">\n						Рассказать в посте, почему<br>я не подхожу\n					</label>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.share : stack1), depth0))
	    + "\" data-view=\"test-share\"></div>\n			</div>	\n		</div>\n";
	},"8":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age17 : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "");
	},"9":function(container,depth0,helpers,partials,data) {
	    return "							Попробую через год!\n";
	},"11":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age16 : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
	},"12":function(container,depth0,helpers,partials,data) {
	    return "							Попробую через 2 года!\n";
	},"14":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age15_10 : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "");
	},"15":function(container,depth0,helpers,partials,data) {
	    return "							Попробую попозже!\n";
	},"17":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age45more : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
	},"18":function(container,depth0,helpers,partials,data) {
	    return "							Нет, но могу помочь!\n";
	},"20":function(container,depth0,helpers,partials,data) {
	    return "							Стану донором, когда вырасту! \n						";
	},"22":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.weight47less : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "");
	},"23":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.weight48_49 : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"24":function(container,depth0,helpers,partials,data) {
	    return "							Поем и смогу!\n						";
	},"26":function(container,depth0,helpers,partials,data) {
	    return "						Нет, но могу помочь!\n";
	},"28":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age17 : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data})) != null ? stack1 : "");
	},"29":function(container,depth0,helpers,partials,data) {
	    return "							Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут с 18 лет. Ждем вас через год! \n							<br/>\n							<br/>\n							Но помочь вы можете уже сейчас. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней.\n";
	},"31":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age16 : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "");
	},"32":function(container,depth0,helpers,partials,data) {
	    return "							Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут с 18 лет. Ждем вас через 2 года! \n							<br/>\n							<br/>\n							Но помочь вы можете уже сейчас. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней.\n";
	},"34":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age15_10 : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data})) != null ? stack1 : "");
	},"35":function(container,depth0,helpers,partials,data) {
	    return "							Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут только совершеннолетних. Ждем вас после 18!\n							<br/>\n							<br/>\n							Но помочь вы можете уже сейчас. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней.\n";
	},"37":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age45more : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "");
	},"38":function(container,depth0,helpers,partials,data) {
	    return "							Донором можно стать до 60 лет, но типирование — дорогая процедура, поэтому важно, чтобы потенциальные доноры числились в регистре как можно дольше. Поэтому кровь на типирование берут до 45 лет.\n							<br/>\n							<br/>\n							Но вы все равно можете помочь. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней. \n";
	},"40":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.age10less : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"41":function(container,depth0,helpers,partials,data) {
	    return "							Пока вы не можете стать донором костного мозга, потому что слишком молоды — в доноры берут только совершеннолетних. Ждем вас после 18!\n							<br/>\n							<br/>\n							Но помочь вы можете уже сейчас. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней.\n						";
	},"43":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.weight47less : stack1),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.program(46, data, 0),"data":data})) != null ? stack1 : "");
	},"44":function(container,depth0,helpers,partials,data) {
	    return "							Вы не можете стать донором костного мозга, потому что в доноры берут людей весом от 50 килограмм. \n							<br>\n							<br>\n							Но вы все равно можете помочь. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней. \n";
	},"46":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.weight48_49 : stack1),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"47":function(container,depth0,helpers,partials,data) {
	    return "							Сейчас вы не можете стать донором костного мозга, потому что в доноры берут людей весом от 50 килограммов. Но вы очень близки! Пройдите тест ещё раз, указав, что весите 50 килограмм, и посмотрите, нет ли у вас других противопоказаний. Если нет — ждём вас через пару килограммов!\n							<br>\n							<br>\n							Но вы все равно можете помочь. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней. \n						";
	},"49":function(container,depth0,helpers,partials,data) {
	    return "						Вы не можете стать донором костного мозга, потому что гемотрансмиссионное заболевание — абсолютное противопоказание.\n						<br>\n						<br>\n						Но вы все равно можете помочь. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней.\n";
	},"51":function(container,depth0,helpers,partials,data) {
	    return "						Вы не можете стать донором костного мозга, потому что у вас есть противопоказания. У человека, которому нужна пересадка, очень слабый иммунитет. Поэтому даже если вы болели очень давно, врачи решают не рисковать. \n						<br>\n						<br>\n						Но вы все равно можете помочь. Расскажите о проекте друзьям: если кто-то из них станет донором, вы спасете не одну, а несколько жизней. \n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.testStyles : depth0)) != null ? stack1.test : stack1), depth0))
	    + "\">тест</div>\n<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Могу ли я стать донором?</div>\n<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finishStyles : depth0)) != null ? stack1.content : stack1), depth0))
	    + " "
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.result : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
	    + "\">\n\n"
	    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.testModel : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.result : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
	    + "</div>";
	},"useData":true});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\""
	    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.styles : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\" data-view=\"test-container\">\n</div>";
	},"useData":true});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backbone = __webpack_require__(1);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _underscore = __webpack_require__(2);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _ajax = __webpack_require__(17);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	var _config = __webpack_require__(9);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Backbone$Model) {
		_inherits(_class, _Backbone$Model);
	
		function _class() {
			_classCallCheck(this, _class);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
		}
	
		_createClass(_class, [{
			key: 'fetchPotentialDonors',
			value: function fetchPotentialDonors(lat, lon) {
				var _this2 = this;
	
				return new Promise(function (resolve, reject) {
					(0, _ajax2.default)({
						url: _config2.default.api.url + '/potential_donors',
						type: 'get'
					}).then(function (response) {
						_this2.set('potentialDonors', response.value);
						resolve(response);
					}, function () {
						reject();
					});
				});
			}
		}, {
			key: 'defaults',
			get: function get() {
				return {
					potentialDonors: null
				};
			}
		}, {
			key: 'potentialDonors',
			get: function get() {
				var value = this.get('potentialDonors');
				// return value ? value.toLocaleString('ru-RU') : 0;
				return value;
			}
		}]);
	
		return _class;
	}(_backbone2.default.Model);
	
	exports.default = _class;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./why.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./why.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._3wblAYxY0Ty93Y37IcWleG {\n\tmax-width: 1024px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 40px;\n}\n._3wblAYxY0Ty93Y37IcWleG img {\n\tmax-width: 100%;\n}\n._3wblAYxY0Ty93Y37IcWleG {\n\twidth: 730px;\n\tmargin-bottom: 58px;\n}\n._2kCWKAdKZWO2l1mHuhHod3 {\n\tpadding-bottom: 80px;\n}\n._85xiBWTT3XB0Ok82A_jpG {\n\tdisplay: flex;\n}\n._14jXJwRb11AzJ-fIr7B-MM {\n\tflex-shrink: 0;\n\tmargin-right: 20px;\n}\n._2Skk9CJ2BsZ5Lgik74tm-8 {\n\twidth: 92px;\n}\n._1u70M5syH458JPMKFR15eL {\n\tfont-size: 27px;\n\tline-height: 35px;\n\tfont-weight: 300;\n}", ""]);
	
	// exports
	exports.locals = {
		"artwork": "_3wblAYxY0Ty93Y37IcWleG",
		"test": "_2kCWKAdKZWO2l1mHuhHod3",
		"goal": "_85xiBWTT3XB0Ok82A_jpG",
		"goalAuthor": "_14jXJwRb11AzJ-fIr7B-MM",
		"goalAuthorPhoto": "_2Skk9CJ2BsZ5Lgik74tm-8",
		"goalText": "_1u70M5syH458JPMKFR15eL"
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.root : stack1), depth0))
	    + "\">\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.why : depth0)) != null ? stack1.artwork : stack1), depth0))
	    + "\">\n		<img src=\"/static/why_artwork.png\">\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.header : stack1), depth0))
	    + "\">Зачем становиться<br>донором костного мозга</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Костный мозг&nbsp;&mdash; это орган кроветворной системы, на&nbsp;вид&nbsp;&mdash; жидкая субстанция. Он&nbsp;содержит стволовые клетки и&nbsp;продуцирует все кровяные клетки в&nbsp;организме. Если&nbsp;у&nbsp;человека онкологическое, иммунологическое или&nbsp;аутоимунное заболевание, врачи назначают пересадку костного мозга. Часто это&nbsp;последний шанс спасти человеку жизнь.\n			</div>\n		</div>	\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Как ищут доноров</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Когда человеку нужен костный мозг, в&nbsp;первую очередь проверяют его родственников. Шансы невелики&nbsp;&mdash; в&nbsp;случае братьев и&nbsp;сестёр вероятность 1:4, а&nbsp;у&nbsp;родителей и&nbsp;детей ещё&nbsp;меньше. Если среди родных доноров не&nbsp;нашлось, ищут неродственных доноров&nbsp;&mdash; для&nbsp;этого нужен специальный регистр.\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1["float"] : stack1), depth0))
	    + "\">\n					<div>\n						Регистр&nbsp;&mdash; это&nbsp;база потенциальных доноров костного мозга. Потенциальный донор&nbsp;&mdash; еще не&nbsp;донор: у&nbsp;него не&nbsp;забирают костный мозг, он&nbsp;только числится в&nbsp;регистре. Реальным донором человек становится, когда кому-то подходит его костный мозг. Чем&nbsp;больше в&nbsp;регистре потенциальных доноров, тем&nbsp;выше вероятность найти пациенту реального донора.\n					</div>\n					<a class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnote : stack1), depth0))
	    + "\" href=\"http://www.rusfond.ru/registr/009\" target=\"_blank\">\n						<span class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnoteCounter : stack1), depth0))
	    + "\">\n							"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.potentialDonors : stack1), depth0))
	    + "\n						</span>\n						<span class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnoteText : stack1), depth0))
	    + "\">\n							потенциальных\n							<br>\n							доноров в регистре\n							<br>\n							на 27 мая 2016 года.\n						</span>\n						<span class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnoteMeta : stack1), depth0))
	    + "\">\n							Информация с сайта Русфонда\n						</span>	\n					</a>\n				</div>\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class="
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.note : stack1), depth0))
	    + ">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Зачем увеличивать национальный регистр</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					Регистр потенциальных доноров костного мозга есть в&nbsp;каждой развитой стране. Очень&nbsp;большой регистр в&nbsp;Германии&nbsp;&mdash; 6&nbsp;миллионов потенциальных доноров.\n					<br>\n					Можно пользоваться зарубежными регистрами, но&nbsp;важно развивать свой:\n				</div>	\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.floatJustifyBetween : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n							В&nbsp;национальном регистре выше шанс найти подходящего донора, потому что в&nbsp;каждой стране свои генетические особенности.\n						</div>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.col2 : stack1), depth0))
	    + "\">\n							Искать в&nbsp;национальном регистре гораздо дешевле. Поиск в&nbsp;российском регистре стоит 150-300 тысяч рублей, а&nbsp;в&nbsp;зарубежных&nbsp;&mdash; 18&nbsp;000&nbsp;евро.\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.why : depth0)) != null ? stack1.goal : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.why : depth0)) != null ? stack1.goalAuthor : stack1), depth0))
	    + "\">\n					<img src=\"/static/grinberg.png\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.why : depth0)) != null ? stack1.goalAuthorPhoto : stack1), depth0))
	    + "\"/>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.why : depth0)) != null ? stack1.goalAuthorInfo : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\">\n							Павел Гринберг,\n							<br>\n							исполнительный директор\n							<br>\n							фонда Advita\n						</div>\n					</div>\n				</div>\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.why : depth0)) != null ? stack1.goalText : stack1), depth0))
	    + "\">\n					&laquo;Наша цель&nbsp;&mdash; 500 тысяч потенциальных доноров в&nbsp;регистре. Столько нужно, чтобы находить костный мозг половине российских пациентов&raquo;\n				</div>\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Как спасти жизнь</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1["float"] : stack1), depth0))
	    + "\">\n					<div>\n						Мы&nbsp;увеличиваем регистр, чтобы повысить вероятность того, что пациент найдет подходящего донора и&nbsp;выздоровеет. Но&nbsp;система работает только потому, что находятся люди, которые хотят безвозмездно помогать. Сначала они вступают в&nbsp;регистр и&nbsp;становятся потенциальными донорами, а&nbsp;когда их&nbsp;костный мозг подходит, идут на&nbsp;реальное донорство.\n					</div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnote : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnoteCounter : stack1), depth0))
	    + "\">\n							2&thinsp;609\n							<br>\n							2&nbsp;609\n						</div>\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnoteText : stack1), depth0))
	    + "\">\n							человек \n							<br>\n							вступили в регистр\n							<br>\n							за последний месяц\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				После пересадки новые клетки костного мозга в&nbsp;организме реципиента размножаются и&nbsp;производят здоровое потомство. У&nbsp;пациента восстанавливается нормальное кроветворение организма, увеличивается стойкость к&nbsp;вирусам. Получить здоровые клетки можно только от&nbsp;донора&nbsp;&mdash; другой возможности нет.\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.section : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.subheader : stack1), depth0))
	    + "\">Кто может помочь</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				При некоторых заболеваниях нельзя становиться донором костного мозга&nbsp;&mdash; это может быть опасно и&nbsp;для донора, и&nbsp;для реципиента. Врачи не&nbsp;рискуют здоровьем донора ради спасения другого человека и&nbsp;отменяют пересадку при малейшей угрозе. Для здорового человека процедура безопасна.\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1["float"] : stack1), depth0))
	    + "\">\n					<div>\n						Другое дело&nbsp;&mdash; организм пациента, который нуждается в&nbsp;пересадке. Он&nbsp;и&nbsp;так ослаблен болезнью. Перед пересадкой донорских клеток пациент проходит курс сильной химиотерапии, которая убивает его больной костный мозг. Иммунитет пациента не&nbsp;справится с&nbsp;болезнями донора, поэтому важно пересадить максимально здоровый костный мозг.\n					</div>\n					<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnote : stack1), depth0))
	    + "\">\n						<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.footnoteText : stack1), depth0))
	    + "\">\n							Если вы — донор крови,\n							<br>\n							вы можете быть\n							<br>\n							и донором костного\n							<br>\n							мозга. Противопоказания\n							<br>\n							для обеих процедур\n							<br>\n							совпадают\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.why : depth0)) != null ? stack1.test : stack1), depth0))
	    + "\" data-view=\"how-test\"></div>\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.footer : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.paragraph : stack1), depth0))
	    + "\">\n				Если вы подходите и задумались о донорстве, узнайте,\n				<br>\n				<a class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\" href=\"/#/how\">как стать донором костного мозга</a>. \n			</div>\n		</div>\n	</div>\n	<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\">\n		<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.credentials : stack1), depth0))
	    + "\">\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.credentialsImage : stack1), depth0))
	    + "\">\n				<img src=\"/static/credentials_why.png\">\n			</div>\n			<div class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.credentialsText : stack1), depth0))
	    + "\">\n				Сделала Алиса Яннау в Школе редакторов Бюро Горбунова. \n				<br>\n				Иллюстратор — Марина Савицкая, разработчик — Артур Стамбульцян.\n				<br>\n				<a href=\"/static/pdf/agreement.pdf\" target=\"_blank\" class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.typography : depth0)) != null ? stack1.link : stack1), depth0))
	    + "\">Пользовательское соглашение</a>.\n			</div>	\n		</div>\n	</div>\n</div>";
	},"useData":true});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "._262Ej1jMDO2JTW3JIx8Tcp {\n\tmin-width: 1024px;\n}\n\n._262Ej1jMDO2JTW3JIx8Tcp, ._262Ej1jMDO2JTW3JIx8Tcp *, ._262Ej1jMDO2JTW3JIx8Tcp *::before, ._262Ej1jMDO2JTW3JIx8Tcp *::after {\n\tbox-sizing: border-box;\n\toutline: none;\n\ttext-size-adjust: none;\n\t-moz-text-size-adjust: none;\n\t-webkit-text-size-adjust: none;\n\t-ms-text-size-adjust: none;\n}", ""]);
	
	// exports
	exports.locals = {
		"root": "_262Ej1jMDO2JTW3JIx8Tcp"
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(32);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\""
	    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.styles : depth0)) != null ? stack1.container : stack1), depth0))
	    + "\" data-view=\"app-container\"></div>";
	},"useData":true});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./common.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./common.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Roboto', sans-serif;\n}\n\nimg {\n\tdisplay: block;\n}\n\na {\n\ttext-decoration: none;\n}", ""]);
	
	// exports


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*! Typograf | © 2015 Denis Seleznev | https://github.com/typograf/typograf/ */
	
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	        module.exports = factory();
	    } else {
	        root.Typograf = factory();
	    }
	})(undefined, function () {
	    'use strict';
	
	    /**
	     * @constructor
	     * @param {Object} [prefs]
	     * @param {string} [prefs.lang] Language rules
	     * @param {string} [prefs.mode] HTML entities as: 'default' - UTF-8, 'digit' - &#160;, 'name' - &nbsp;
	     * @param {boolean} [prefs.live] Live mode
	     * @param {string|string[]} [prefs.enable] Enable rules
	     * @param {string|string[]} [prefs.disable] Disable rules
	     */
	
	    function Typograf(prefs) {
	        this._prefs = (typeof prefs === 'undefined' ? 'undefined' : _typeof(prefs)) === 'object' ? prefs : {};
	        this._prefs.live = this._prefs.live || false;
	
	        this._settings = {};
	        this._enabledRules = {};
	
	        this._replaceLabel = this._replaceLabel.bind(this);
	        this._pasteLabel = this._pasteLabel.bind(this);
	        this._initSafeTags();
	
	        this._rules.forEach(this._prepareRule, this);
	
	        this._prefs.disable && this.disable(this._prefs.disable);
	        this._prefs.enable && this.enable(this._prefs.enable);
	    }
	
	    /**
	     * Add a rule.
	     *
	     * @static
	     * @param {Object} rule
	     * @param {string} rule.name Name of rule
	     * @param {Function} rule.handler Processing function
	     * @param {number} [rule.index] Sorting index for rule
	     * @param {boolean} [rule.disabled] Rule is disabled by default
	     * @param {boolean} [rule.live] Live mode
	     * @param {Object} [rule.settings] Settings for rule
	     * @return {Typograf} this
	     */
	    Typograf.rule = function (rule) {
	        var parts = rule.name.split('/');
	
	        rule._enabled = rule.disabled === true ? false : true;
	        rule._lang = parts[0];
	        rule._group = parts[1];
	        rule._name = parts[2];
	
	        Typograf._setIndex(rule);
	
	        Typograf.prototype._rules.push(rule);
	
	        if (Typograf._needSortRules) {
	            this._sortRules();
	        }
	
	        return this;
	    };
	
	    Typograf._langs = ['en', 'ru'];
	
	    Typograf._setIndex = function (rule) {
	        var index = rule.index,
	            t = typeof index === 'undefined' ? 'undefined' : _typeof(index),
	            groupIndex = Typograf.groupIndexes[rule._group];
	
	        if (t === 'undefined') {
	            index = groupIndex;
	        } else if (t === 'string') {
	            index = groupIndex + parseInt(rule.index, 10);
	        }
	
	        rule._index = index;
	    };
	
	    /**
	     * Add internal rule.
	     * Internal rules are executed before main.
	     *
	     * @static
	     * @param {Object} rule
	     * @param {string} rule.name Name of rule
	     * @param {Function} rule.handler Processing function
	     * @return {Typograf} this
	     */
	    Typograf.innerRule = function (rule) {
	        Typograf.prototype._innerRules.push(rule);
	
	        rule._lang = rule.name.split('/')[0];
	
	        return this;
	    };
	
	    /**
	     * Get/set data for use in rules.
	     *
	     * @static
	     * @param {string|Object} key
	     * @param {*} [value]
	     * @return {*}
	     */
	    Typograf.data = function (key, value) {
	        if (typeof key === 'string') {
	            if (arguments.length === 1) {
	                return Typograf._data[key];
	            } else {
	                Typograf._data[key] = value;
	            }
	        } else if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
	            Object.keys(key).forEach(function (k) {
	                Typograf._data[k] = key[k];
	            });
	        }
	    };
	
	    Typograf._data = {};
	
	    Typograf._sortRules = function () {
	        Typograf.prototype._rules.sort(function (a, b) {
	            return a._index > b._index ? 1 : -1;
	        });
	    };
	
	    Typograf._replace = function (text, re) {
	        for (var i = 0; i < re.length; i++) {
	            text = text.replace(re[i][0], re[i][1]);
	        }
	
	        return text;
	    };
	
	    Typograf._privateLabel = '�';
	
	    Typograf.prototype = {
	        constructor: Typograf,
	        /**
	         * Execute typographical rules for text.
	         *
	         * @param {string} text
	         * @param {Object} [prefs]
	         * @param {string} [prefs.lang] Language rules
	         * @param {string} [prefs.mode] Type HTML entities
	         * @return {string}
	         */
	        execute: function execute(text, prefs) {
	            prefs = prefs || {};
	
	            var that = this,
	                lang = prefs.lang || this._prefs.lang || 'common',
	                rulesForQueue = {},
	                innerRulesForQueue = {},
	                mode = typeof prefs.mode === 'undefined' ? this._prefs.mode : prefs.mode,
	                iterator = function iterator(rule) {
	                var rlang = rule._lang,
	                    live = this._prefs.live;
	
	                if (live === true && rule.live === false || live === false && rule.live === true) {
	                    return;
	                }
	
	                if ((rlang === 'common' || rlang === lang) && this.enabled(rule.name)) {
	                    this._onBeforeRule && this._onBeforeRule(rule.name, text);
	                    text = rule.handler.call(this, text, this._settings[rule.name]);
	                    this._onAfterRule && this._onAfterRule(rule.name, text);
	                }
	            },
	                executeRulesForQueue = function executeRulesForQueue(queue) {
	                innerRulesForQueue[queue] && innerRulesForQueue[queue].forEach(iterator, that);
	                rulesForQueue[queue] && rulesForQueue[queue].forEach(iterator, that);
	            };
	
	            this._lang = lang;
	
	            text = '' + text;
	
	            if (!text) {
	                return '';
	            }
	
	            text = this._fixLineEnd(text);
	
	            this._innerRules.forEach(function (rule) {
	                var q = rule.queue;
	                innerRulesForQueue[q] = innerRulesForQueue[q] || [];
	                innerRulesForQueue[q].push(rule);
	            }, this);
	
	            this._rules.forEach(function (rule) {
	                var q = rule.queue;
	                rulesForQueue[q] = rulesForQueue[q] || [];
	                rulesForQueue[q].push(rule);
	            }, this);
	
	            this._isHTML = text.search(/(<\/?[a-z]|<!|&[lg]t;)/i) !== -1;
	
	            executeRulesForQueue('start');
	
	            text = this._hideSafeTags(text);
	
	            text = this._utfication(text);
	            executeRulesForQueue('utf');
	
	            executeRulesForQueue();
	
	            text = this._modification(text, mode);
	            executeRulesForQueue('entity');
	
	            text = this._showSafeTags(text);
	
	            executeRulesForQueue('end');
	
	            this._lang = null;
	            this._isHTML = null;
	
	            return text;
	        },
	        /**
	         * Get/set a setting.
	         *
	         * @param {string} ruleName
	         * @param {string} setting
	         * @param {*} [value]
	         * @return {*}
	         */
	        setting: function setting(ruleName, _setting, value) {
	            if (arguments.length <= 2) {
	                return this._settings[ruleName] && this._settings[ruleName][_setting];
	            } else {
	                this._settings[ruleName] = this._settings[ruleName] || {};
	                this._settings[ruleName][_setting] = value;
	
	                return this;
	            }
	        },
	        /**
	         * Is enabled a rule.
	         *
	         * @param {string} ruleName
	         * @return {boolean}
	         */
	        enabled: function enabled(ruleName) {
	            return this._enabledRules[ruleName];
	        },
	        /**
	         * Is disabled a rule.
	         *
	         * @param {string} ruleName
	         * @return {boolean}
	         */
	        disabled: function disabled(ruleName) {
	            return !this._enabledRules[ruleName];
	        },
	        /**
	         * Enable a rule.
	         *
	         * @param {string|string[]} ruleName
	         * @return {Typograf} this
	         */
	        enable: function enable(ruleName) {
	            return this._enable(ruleName, true);
	        },
	        /**
	         * Disable a rule.
	         *
	         * @param {string|string[]} ruleName
	         * @return {Typograf} this
	         */
	        disable: function disable(ruleName) {
	            return this._enable(ruleName, false);
	        },
	        /**
	         * Add safe tag.
	         *
	         * @example
	         * // var t = new Typograf({lang: 'ru'});
	         * // t.addSafeTag('<mytag>', '</mytag>');
	         * // t.addSafeTag('<mytag>', '</mytag>', '.*?');
	         * // t.addSafeTag(/<mytag>.*?</mytag>/gi);
	         *
	         * @param {string|RegExp} startTag
	         * @param {string} [endTag]
	         * @param {string} [middle]
	         * @return {Typograf} this
	        */
	        addSafeTag: function addSafeTag(startTag, endTag, middle) {
	            var tag = startTag instanceof RegExp ? startTag : [startTag, endTag, middle];
	
	            this._safeTags.own.push(this._prepareSafeTag(tag));
	
	            return this;
	        },
	        /**
	         * Get data for use in rules.
	         *
	         * @param {string} key
	         * @return {*}
	         */
	        data: function data(key) {
	            var lang = '';
	            if (key.search('/') === -1) {
	                lang = (this._lang || this._prefs.lang) + '/';
	            }
	
	            return Typograf.data(lang + key);
	        },
	        _quote: function _quote(text, settings) {
	            var letters = this.data('l') + '́\\d',
	                privateLabel = Typograf._privateLabel,
	                lquote = settings.lquote,
	                rquote = settings.rquote,
	                lquote2 = settings.lquote2,
	                rquote2 = settings.rquote2,
	                quotes = '[' + Typograf.data('common/quote') + ']',
	                phrase = '[' + letters + ')!?.:;#*,…]*?',
	                reL = new RegExp('"([' + letters + '])', 'gi'),
	                reR = new RegExp('(' + phrase + ')"(' + phrase + ')', 'gi'),
	                reQuotes = new RegExp(quotes, 'g'),
	                reFirstQuote = new RegExp('^(\\s)?(' + quotes + ')', 'g'),
	                reOpeningTag = new RegExp('(^|\\s)' + quotes + privateLabel, 'g'),
	                reClosingTag = new RegExp(privateLabel + quotes + '([\\s!?.:;#*,]|$)', 'g'),
	                count = 0;
	
	            text = text.replace(reQuotes, function () {
	                count++;
	                return '"';
	            }).replace(reL, lquote + '$1') // Opening quote
	            .replace(reR, '$1' + rquote + '$2') // Closing quote
	            .replace(reOpeningTag, '$1' + lquote + privateLabel) // Opening quote and tag
	            .replace(reClosingTag, privateLabel + rquote + '$1') // Tag and closing quote
	            .replace(reFirstQuote, '$1' + lquote);
	
	            if (lquote2 && rquote2 && count % 2 === 0) {
	                return this._innerQuote(text, settings);
	            }
	
	            return text;
	        },
	        _innerQuote: function _innerQuote(text, settings) {
	            var openingQuotes = [settings.lquote],
	                closingQuotes = [settings.rquote],
	                lquote = settings.lquote,
	                rquote = settings.rquote,
	                bufText = new Array(text.length);
	
	            if (settings.lquote2 && settings.rquote2) {
	                openingQuotes.push(settings.lquote2);
	                closingQuotes.push(settings.rquote2);
	
	                if (settings.lquote3 && settings.rquote3) {
	                    openingQuotes.push(settings.lquote3);
	                    closingQuotes.push(settings.rquote3);
	                }
	            }
	
	            var level = -1,
	                maxLevel = openingQuotes.length - 1;
	
	            for (var i = 0, len = text.length; i < len; i++) {
	                var letter = text[i];
	                if (letter === lquote) {
	                    level++;
	                    if (level > maxLevel) {
	                        level = maxLevel;
	                    }
	                    bufText.push(openingQuotes[level]);
	                } else if (letter === rquote) {
	                    if (level <= -1) {
	                        level = 0;
	                        bufText.push(openingQuotes[level]);
	                    } else {
	                        bufText.push(closingQuotes[level]);
	                        level--;
	                        if (level < -1) {
	                            level = -1;
	                        }
	                    }
	                } else {
	                    bufText.push(letter);
	                }
	            }
	
	            return bufText.join('');
	        },
	        _fixLineEnd: function _fixLineEnd(text) {
	            return text.replace(/\r\n/g, '\n'); // Windows
	        },
	        _prepareRule: function _prepareRule(rule) {
	            var name = rule.name,
	                settings = {};
	
	            if (_typeof(rule.settings) === 'object') {
	                Object.keys(rule.settings).forEach(function (key) {
	                    settings[key] = rule.settings[key];
	                });
	            }
	
	            this._settings[name] = settings;
	            this._enabledRules[name] = rule._enabled;
	        },
	        _enable: function _enable(rule, enabled) {
	            if (Array.isArray(rule)) {
	                rule.forEach(function (el) {
	                    this._enableByMask(el, enabled);
	                }, this);
	            } else {
	                this._enableByMask(rule, enabled);
	            }
	
	            return this;
	        },
	        _enableByMask: function _enableByMask(rule, enabled) {
	            var re;
	            if (rule.search(/\*/) !== -1) {
	                re = new RegExp(rule.replace(/\//g, '\\\/').replace(/\*/g, '.*'));
	
	                this._rules.forEach(function (el) {
	                    var name = el.name;
	                    if (re.test(name)) {
	                        this._enabledRules[name] = enabled;
	                    }
	                }, this);
	            } else {
	                this._enabledRules[rule] = enabled;
	            }
	        },
	        _rules: [],
	        _innerRules: [],
	        _getRule: function _getRule(name) {
	            var rule = null;
	            this._rules.some(function (item) {
	                if (item.name === name) {
	                    rule = item;
	                    return true;
	                }
	
	                return false;
	            });
	
	            return rule;
	        },
	        _initSafeTags: function _initSafeTags() {
	            var html = [['<!--', '-->'], ['<!ENTITY', '>'], ['<!DOCTYPE', '>'], ['<\\?xml', '\\?>'], ['<!\\[CDATA\\[', '\\]\\]>']];
	
	            ['code', 'kbd', 'object', 'pre', 'samp', 'script', 'style', 'var'].forEach(function (tag) {
	                html.push(['<' + tag + '(\\s[^>]*?)?>', '</' + tag + '>']);
	            }, this);
	
	            this._safeTags = {
	                html: html.map(this._prepareSafeTag),
	                own: [],
	                url: [this._reUrl]
	            };
	        },
	        _reUrl: new RegExp('(https?|file|ftp)://([a-zA-Z0-9\/+-=%&:_.~?]+[a-zA-Z0-9#+]*)', 'g'),
	        _hideSafeTags: function _hideSafeTags(text) {
	            var that = this,
	                iterator = function iterator(tag) {
	                text = text.replace(that._prepareSafeTag(tag), that._pasteLabel);
	            },
	                hide = function hide(name) {
	                that._safeTags[name].forEach(iterator);
	            };
	
	            this._hiddenSafeTags = {};
	            this._iLabel = 0;
	
	            hide('own');
	
	            if (this._isHTML) {
	                hide('html');
	                text = this._hideHTMLTags(text);
	            }
	
	            hide('url');
	
	            return text;
	        },
	        _prepareSafeTag: function _prepareSafeTag(tag) {
	            var re;
	
	            if (tag instanceof RegExp) {
	                re = tag;
	            } else {
	                var startTag = tag[0],
	                    endTag = tag[1],
	                    middle = typeof tag[2] === 'undefined' ? '[^]*?' : tag[2];
	
	                re = new RegExp(startTag + middle + endTag, 'gi');
	            }
	
	            return re;
	        },
	        _getPrivateLabel: function _getPrivateLabel(i) {
	            var label = Typograf._privateLabel;
	            return label + 'tf' + i + label;
	        },
	        _pasteLabel: function _pasteLabel(match) {
	            var key = this._getPrivateLabel(this._iLabel);
	            this._hiddenSafeTags[key] = match;
	            this._iLabel++;
	
	            return key;
	        },
	        _replaceLabel: function _replaceLabel(match) {
	            return this._hiddenSafeTags[match];
	        },
	        _hideHTMLTags: function _hideHTMLTags(text) {
	            return text.replace(/<\/?[a-z][^]*?>/gi, this._pasteLabel) // Tags
	            .replace(/&lt;\/?[a-z][^]*?&gt;/gi, this._pasteLabel) // Escaping tags
	            .replace(/&[gl]t;/gi, this._pasteLabel);
	        },
	        _showSafeTags: function _showSafeTags(text) {
	            var label = Typograf._privateLabel,
	                reReplace = new RegExp(label + 'tf\\d+' + label, 'g'),
	                reSearch = new RegExp(label + 'tf\\d'),
	                len = 0;
	
	            Object.keys(this._safeTags).forEach(function (tags) {
	                len += tags.length;
	            });
	
	            for (var i = 0; i < len; i++) {
	                text = text.replace(reReplace, this._replaceLabel);
	                if (text.search(reSearch) === -1) {
	                    break;
	                }
	            }
	
	            this._hiddenSafeTags = {};
	
	            return text;
	        },
	        _utfication: function _utfication(text) {
	            if (text.search(/&#/) !== -1) {
	                text = this._decHexToUtf(text);
	            }
	
	            if (text.search(/&[a-z]/i) !== -1) {
	                this.entities.forEach(function (entity) {
	                    text = text.replace(entity[3], entity[2]);
	                });
	            }
	
	            return text.replace(/&quot;/g, '"');
	        },
	        _decHexToUtf: function _decHexToUtf(text) {
	            return text.replace(/&#(\d{1,6});/gi, function ($0, $1) {
	                return String.fromCharCode(parseInt($1, 10));
	            }).replace(/&#x([\da-f]{1,6});/gi, function ($0, $1) {
	                return String.fromCharCode(parseInt($1, 16));
	            });
	        },
	        _modification: function _modification(text, mode) {
	            if (mode === 'name' || mode === 'digit') {
	                var index = mode === 'name' ? 0 : 1;
	                this.entities.forEach(function (entity) {
	                    if (entity[index]) {
	                        text = text.replace(entity[4], entity[index]);
	                    }
	                });
	            }
	
	            return text;
	        }
	    };
	
	    Typograf.version = '5.3.2';
	
	    Typograf.groupIndexes = {
	        symbols: 110,
	        space: 210,
	        dash: 310,
	        punctuation: 410,
	        nbsp: 510,
	        'number': 610,
	        money: 710,
	        date: 810,
	        other: 910,
	        optalign: 1010,
	        html: 1110
	    };
	
	    Typograf.prototype.entities = [];
	
	    // http://www.w3.org/TR/html4/sgml/entities
	    [['nbsp', 160], ['iexcl', 161], ['cent', 162], ['pound', 163], ['curren', 164], ['yen', 165], ['brvbar', 166], ['sect', 167], ['uml', 168], ['copy', 169], ['ordf', 170], ['laquo', 171], ['not', 172], ['shy', 173], ['reg', 174], ['macr', 175], ['deg', 176], ['plusmn', 177], ['sup2', 178], ['sup3', 179], ['acute', 180], ['micro', 181], ['para', 182], ['middot', 183], ['cedil', 184], ['sup1', 185], ['ordm', 186], ['raquo', 187], ['frac14', 188], ['frac12', 189], ['frac34', 190], ['iquest', 191], ['Agrave', 192], ['Aacute', 193], ['Acirc', 194], ['Atilde', 195], ['Auml', 196], ['Aring', 197], ['AElig', 198], ['Ccedil', 199], ['Egrave', 200], ['Eacute', 201], ['Ecirc', 202], ['Euml', 203], ['Igrave', 204], ['Iacute', 205], ['Icirc', 206], ['Iuml', 207], ['ETH', 208], ['Ntilde', 209], ['Ograve', 210], ['Oacute', 211], ['Ocirc', 212], ['Otilde', 213], ['Ouml', 214], ['times', 215], ['Oslash', 216], ['Ugrave', 217], ['Uacute', 218], ['Ucirc', 219], ['Uuml', 220], ['Yacute', 221], ['THORN', 222], ['szlig', 223], ['agrave', 224], ['aacute', 225], ['acirc', 226], ['atilde', 227], ['auml', 228], ['aring', 229], ['aelig', 230], ['ccedil', 231], ['egrave', 232], ['eacute', 233], ['ecirc', 234], ['euml', 235], ['igrave', 236], ['iacute', 237], ['icirc', 238], ['iuml', 239], ['eth', 240], ['ntilde', 241], ['ograve', 242], ['oacute', 243], ['ocirc', 244], ['otilde', 245], ['ouml', 246], ['divide', 247], ['oslash', 248], ['ugrave', 249], ['uacute', 250], ['ucirc', 251], ['uuml', 252], ['yacute', 253], ['thorn', 254], ['yuml', 255], ['fnof', 402], ['Alpha', 913], ['Beta', 914], ['Gamma', 915], ['Delta', 916], ['Epsilon', 917], ['Zeta', 918], ['Eta', 919], ['Theta', 920], ['Iota', 921], ['Kappa', 922], ['Lambda', 923], ['Mu', 924], ['Nu', 925], ['Xi', 926], ['Omicron', 927], ['Pi', 928], ['Rho', 929], ['Sigma', 931], ['Tau', 932], ['Upsilon', 933], ['Phi', 934], ['Chi', 935], ['Psi', 936], ['Omega', 937], ['alpha', 945], ['beta', 946], ['gamma', 947], ['delta', 948], ['epsilon', 949], ['zeta', 950], ['eta', 951], ['theta', 952], ['iota', 953], ['kappa', 954], ['lambda', 955], ['mu', 956], ['nu', 957], ['xi', 958], ['omicron', 959], ['pi', 960], ['rho', 961], ['sigmaf', 962], ['sigma', 963], ['tau', 964], ['upsilon', 965], ['phi', 966], ['chi', 967], ['psi', 968], ['omega', 969], ['thetasym', 977], ['upsih', 978], ['piv', 982], ['bull', 8226], ['hellip', 8230], ['prime', 8242], ['Prime', 8243], ['oline', 8254], ['frasl', 8260], ['weierp', 8472], ['image', 8465], ['real', 8476], ['trade', 8482], ['alefsym', 8501], ['larr', 8592], ['uarr', 8593], ['rarr', 8594], ['darr', 8595], ['harr', 8596], ['crarr', 8629], ['lArr', 8656], ['uArr', 8657], ['rArr', 8658], ['dArr', 8659], ['hArr', 8660], ['forall', 8704], ['part', 8706], ['exist', 8707], ['empty', 8709], ['nabla', 8711], ['isin', 8712], ['notin', 8713], ['ni', 8715], ['prod', 8719], ['sum', 8721], ['minus', 8722], ['lowast', 8727], ['radic', 8730], ['prop', 8733], ['infin', 8734], ['ang', 8736], ['and', 8743], ['or', 8744], ['cap', 8745], ['cup', 8746], ['int', 8747], ['there4', 8756], ['sim', 8764], ['cong', 8773], ['asymp', 8776], ['ne', 8800], ['equiv', 8801], ['le', 8804], ['ge', 8805], ['sub', 8834], ['sup', 8835], ['nsub', 8836], ['sube', 8838], ['supe', 8839], ['oplus', 8853], ['otimes', 8855], ['perp', 8869], ['sdot', 8901], ['lceil', 8968], ['rceil', 8969], ['lfloor', 8970], ['rfloor', 8971], ['lang', 9001], ['rang', 9002], ['spades', 9824], ['clubs', 9827], ['hearts', 9829], ['diams', 9830], ['loz', 9674], ['OElig', 338], ['oelig', 339], ['Scaron', 352], ['scaron', 353], ['Yuml', 376], ['circ', 710], ['tilde', 732], ['ensp', 8194], ['emsp', 8195], ['thinsp', 8201], ['zwnj', 8204], ['zwj', 8205], ['lrm', 8206], ['rlm', 8207], ['ndash', 8211], ['mdash', 8212], ['lsquo', 8216], ['rsquo', 8217], ['sbquo', 8218], ['ldquo', 8220], ['rdquo', 8221], ['bdquo', 8222], ['dagger', 8224], ['Dagger', 8225], ['permil', 8240], ['lsaquo', 8249], ['rsaquo', 8250], ['euro', 8364], ['NestedGreaterGreater', 8811], ['NestedLessLess', 8810]].forEach(function (en) {
	        var name = en[0],
	            num = en[1],
	            sym = String.fromCharCode(num),
	            buf = ['&' + name + ';', // 0 - &nbsp;
	        '&#' + num + ';', // 1 - &#160;
	        sym, // 2 - \u00A0
	        new RegExp('&' + name + ';', 'g'), new RegExp(sym, 'g') // 4
	        ];
	
	        Typograf.prototype.entities.push(buf);
	    }, this);
	
	    Typograf.data('common/dash', '--?|‒|–|—'); // --, &#8210, &ndash, &mdash
	
	    Typograf.data('common/quote', '«‹»›„‚“‟‘‛”’"');
	
	    Typograf.data({
	        'en/l': 'a-z',
	        'en/ld': 'a-z\\d',
	        'en/L': 'A-Z',
	        'en/Ld': 'A-Z\\d',
	        'en/lL': 'a-zA-Z',
	        'en/lLd': 'a-zA-Z\\d'
	    });
	
	    Typograf.data('en/lquote', '“‘');
	
	    Typograf.data('en/rquote', '”’');
	
	    Typograf.data({
	        'ru/dashBefore': '(^| |\\n)',
	        'ru/dashAfter': '(?=[  ,.?:!]|$)',
	        'ru/dashAfterDe': '(?=[,.?:!]|[  ][^А-ЯЁ]|$)'
	    });
	
	    Typograf.data({
	        'ru/l': 'а-яёa-z',
	        'ru/ld': 'а-яёa-z\\d',
	        'ru/L': 'А-ЯЁA-Z',
	        'ru/Ld': 'А-ЯЁA-Z\\d',
	        'ru/lL': 'а-яёА-ЯЁa-zA-Z',
	        'ru/lLd': 'а-яёА-ЯЁa-zA-Z\\d'
	    });
	
	    Typograf.data('ru/lquote', '«„‚');
	
	    Typograf.data({
	        'ru/month': 'январь|февраль|март|апрель|май|июнь|июль|август|сентябрь|октябрь|ноябрь|декабрь',
	        'ru/monthGenCase': 'января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря',
	        'ru/monthPreCase': 'январе|феврале|марте|апреле|мае|июне|июле|августе|сентябре|октябре|ноябре|декабре',
	        'ru/shortMonth': 'янв|фев|мар|апр|ма[ейя]|июн|июл|авг|сен|окт|ноя|дек'
	    });
	
	    Typograf.data('ru/rquote', '»“‘');
	
	    Typograf.data('ru/weekday', 'понедельник|вторник|среда|четверг|пятница|суббота|воскресенье');
	
	    Typograf.rule({
	        name: 'common/html/e-mail',
	        queue: 'end',
	        handler: function handler(text) {
	            return this._isHTML ? text : text.replace(/(^|[\s;(])([\w\-.]{2,})@([\w\-.]{2,})\.([a-z]{2,6})([)\s.,!?]|$)/gi, '$1<a href="mailto:$2@$3.$4">$2@$3.$4</a>$5');
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/html/escape',
	        index: '+100',
	        queue: 'end',
	        handler: function handler(text) {
	            var entityMap = {
	                '&': '&amp;',
	                '<': '&lt;',
	                '>': '&gt;',
	                '"': '&quot;',
	                '\'': '&#39;',
	                '/': '&#x2F;'
	            };
	
	            return text.replace(/[&<>"'\/]/g, function (s) {
	                return entityMap[s];
	            });
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/html/nbr',
	        index: '+5',
	        queue: 'end',
	        handler: function handler(text) {
	            return text.search(/<br/) === -1 ? text.replace(/\n/g, '<br/>\n') : text;
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/html/pbr',
	        queue: 'end',
	        handler: function handler(text) {
	            if (text.search(/<(p|br)[\s\/>]/) === -1) {
	                if (text.search(/\n/) === -1) {
	                    text = '<p>' + text + '</p>';
	                } else {
	                    text = '<p>' + text.replace(/\n\n/g, '</p>\n<p>') + '<\/p>';
	                    text = text.replace(/([^>])\n/g, '$1<br/>\n');
	                }
	            }
	
	            return text;
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/html/stripTags',
	        index: '+99',
	        queue: 'end',
	        handler: function handler(text) {
	            return text.replace(/<[^>]+>/g, '');
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/html/url',
	        queue: 'end',
	        handler: function handler(text) {
	            return this._isHTML ? text : text.replace(this._reUrl, function ($0, protocol, path) {
	                path = path.replace(/([^\/]+\/?)(\?|#)$/, '$1') // Remove ending ? and #
	                .replace(/^([^\/]+)\/$/, '$1'); // Remove ending /
	
	                if (protocol === 'http') {
	                    path = path.replace(/^([^\/]+)(:80)([^\d]|\/|$)/, '$1$3'); // Remove 80 port
	                } else if (protocol === 'https') {
	                        path = path.replace(/^([^\/]+)(:443)([^\d]|\/|$)/, '$1$3'); // Remove 443 port
	                    }
	
	                var url = path,
	                    fullUrl = protocol + '://' + path,
	                    firstPart = '<a href="' + fullUrl + '">';
	
	                if (protocol === 'http' || protocol === 'https') {
	                    url = url.replace(/^www\./, '');
	
	                    return firstPart + (protocol === 'http' ? url : protocol + '://' + url) + '</a>';
	                }
	
	                return firstPart + fullUrl + '</a>';
	            });
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/nbsp/afterNumber',
	        handler: function handler(text) {
	            var re = '(^|\\D)(\\d{1,5}) ([' + this.data('l') + ']{2,})';
	
	            return text.replace(new RegExp(re, 'gi'), '$1$2 $3');
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/nbsp/afterParagraph',
	        handler: function handler(text) {
	            // \u2009 - THIN SPACE
	            // \u202F - NARROW NO-BREAK SPACE
	            return text.replace(/\u00A7[ \u00A0\u2009]?(\d|I|V|X)/g, '§ $1');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/nbsp/afterShortWord',
	        handler: function handler(text, settings) {
	            var len = settings.lengthShortWord,
	                before = '  (' + Typograf._privateLabel + this.data('common/quote'),
	                subStr = '(^|[' + before + '])([' + this.data('l') + ']{1,' + len + '}) ',
	                newSubStr = '$1$2 ',
	                re = new RegExp(subStr, 'gim');
	
	            return text.replace(re, newSubStr).replace(re, newSubStr);
	        },
	        settings: {
	            lengthShortWord: 2
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/nbsp/beforeShortLastNumber',
	        handler: function handler(text, settings) {
	            var re = new RegExp('([' + this.data('lL') + ']) (?=\\d{1,' + settings.lengthLastNumber + '}[-+−%\'"' + this.data('rquote') + ']?([.!?…]( [' + this.data('L') + ']|$)|$))', 'gm');
	
	            return text.replace(re, '$1 ');
	        },
	        live: false,
	        settings: {
	            lengthLastNumber: 2
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/nbsp/beforeShortLastWord',
	        handler: function handler(text, settings) {
	            var re = new RegExp('([' + this.data('ld') + ']) ([' + this.data('lL') + ']{1,' + settings.lengthLastWord + '}[.!?…])( [' + this.data('L') + ']|$)', 'g');
	            return text.replace(re, '$1 $2$3');
	        },
	        settings: {
	            lengthLastWord: 3
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/nbsp/dpi',
	        handler: function handler(text) {
	            return text.replace(/(\d) ?(lpi|dpi)(?!\w)/, '$1 $2');
	        }
	    });
	
	    (function () {
	
	        function replaceNbsp($0, $1, $2, $3) {
	            return $1 + $2.replace(/([^\u00A0])\u00A0([^\u00A0])/g, '$1 $2') + $3;
	        }
	
	        Typograf.rule({
	            name: 'common/nbsp/nowrap',
	            queue: 'end',
	            handler: function handler(text) {
	                return text.replace(/(<nowrap>)(.*?)(<\/nowrap>)/g, replaceNbsp).replace(/(<nobr>)(.*?)(<\/nobr>)/g, replaceNbsp);
	            }
	        });
	    })();
	
	    Typograf.rule({
	        name: 'common/nbsp/replaceNbsp',
	        queue: 'utf',
	        live: true,
	        handler: function handler(text) {
	            return text.replace(/\u00A0/g, ' ');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/number/fraction',
	        handler: function handler(text) {
	            return text.replace(/(^|\D)1\/2(\D|$)/g, '$1½$2').replace(/(^|\D)1\/4(\D|$)/g, '$1¼$2').replace(/(^|\D)3\/4(\D|$)/g, '$1¾$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/number/mathSigns',
	        handler: function handler(text) {
	            return Typograf._replace(text, [[/!=/g, '≠'], [/<=/g, '≤'], [/(^|[^=])>=/g, '$1≥'], [/<=>/g, '⇔'], [/<</g, '≪'], [/>>/g, '≫'], [/~=/g, '≅'], [/(^|[^+])\+-/g, '$1±']]);
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/number/times',
	        handler: function handler(text) {
	            return text.replace(/(\d)[ \u00A0]?[xх][ \u00A0]?(\d)/g, '$1×$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/other/delBOM',
	        queue: 'start',
	        index: -1,
	        handler: function handler(text) {
	            if (text.charCodeAt(0) === 0xFEFF) {
	                return text.slice(1);
	            }
	
	            return text;
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/other/repeatWord',
	        handler: function handler(text) {
	            var re = new RegExp('([' + this.data('l') + '́]+) \\1([;:,.?! \n])', 'gi');
	
	            return text.replace(re, '$1$2');
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/punctuation/delDoublePunctuation',
	        handler: function handler(text) {
	            return text.replace(/(^|[^,]),,(?!,)/g, '$1,').replace(/(^|[^:])::(?!:)/g, '$1:').replace(/(^|[^!?\.])\.\.(?!\.)/g, '$1.').replace(/(^|[^;]);;(?!;)/g, '$1;').replace(/(^|[^?])\?\?(?!\?)/g, '$1?');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/afterPunctuation',
	        handler: function handler(text) {
	            var privateLabel = Typograf._privateLabel,
	                reExcl = new RegExp('(!|;|\\?)([^).!;?\\s[\\])' + privateLabel + this.data('common/quote') + '])', 'g'),
	                reComma = new RegExp('(\\D)(,|:)([^)",:.?\\s\\/\\\\' + privateLabel + '])', 'g');
	
	            return text.replace(reExcl, '$1 $2').replace(reComma, '$1$2 $3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/beforeBracket',
	        handler: function handler(text) {
	            var re = new RegExp('([' + this.data('l') + '.!?,;…)])\\(', 'gi');
	            return text.replace(re, '$1 (');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/bracket',
	        handler: function handler(text) {
	            return text.replace(/(\() +/g, '(').replace(/ +\)/g, ')');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/delBeforePercent',
	        handler: function handler(text) {
	            return text.replace(/(\d)( |\u00A0)(%|‰|‱)/g, '$1$3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/delBeforePunctuation',
	        handler: function handler(text) {
	            return text.replace(/ ([!;,?.:])(?!\))/g, '$1');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/delLeadingBlanks',
	        handler: function handler(text) {
	            return text.replace(/\n[ \t]+/g, '\n');
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'common/space/delRepeatN',
	        index: '-1',
	        handler: function handler(text) {
	            return text.replace(/\n{3,}/g, '\n\n');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/delRepeatSpace',
	        index: '-1',
	        handler: function handler(text) {
	            return text.replace(/([^\n \t])[ \t]{2,}(?![\n \t])/g, '$1 ');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/delTrailingBlanks',
	        index: '-3',
	        handler: function handler(text) {
	            return text.replace(/[ \t]+\n/g, '\n');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/replaceTab',
	        index: '-5',
	        handler: function handler(text) {
	            return text.replace(/\t/g, '    ');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/squareBracket',
	        handler: function handler(text) {
	            return text.replace(/(\[) +/g, '[').replace(/ +\]/g, ']');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/trimLeft',
	        index: '-4',
	        handler: String.prototype.trimLeft ? function (text) {
	            return text.trimLeft();
	        } : /* istanbul ignore next */function (text) {
	            return text.replace(/^[\s\uFEFF\xA0]+/g, '');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/space/trimRight',
	        index: '-3',
	        live: false,
	        handler: String.prototype.trimRight ? function (text) {
	            return text.trimRight();
	        } : /* istanbul ignore next */function (text) {
	            return text.replace(/[\s\uFEFF\xA0]+$/g, '');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/symbols/arrow',
	        handler: function handler(text) {
	            return Typograf._replace(text, [[/(^|[^-])->(?!>)/g, '$1→'], [/(^|[^<])<-(?!-)/g, '$1←']]);
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/symbols/cf',
	        handler: function handler(text) {
	            var re = new RegExp('(^|[^%])(\\d+)( | )?(C|F)([\\W \\.,:!\\?"\\]\\)]|$)', 'g');
	
	            return text.replace(re, '$1$2' + ' ' + '°$4$5');
	        }
	    });
	
	    Typograf.rule({
	        name: 'common/symbols/copy',
	        handler: function handler(text) {
	            return Typograf._replace(text, [[/\(r\)/gi, '®'], [/(copyright )?\((c|с)\)/gi, '©'], [/\(tm\)/gi, '™']]);
	        }
	    });
	
	    Typograf.rule({
	        name: 'en/punctuation/quote',
	        handler: function handler(text, settings) {
	            return this._quote(text, settings);
	        },
	        settings: {
	            lquote: '“',
	            rquote: '”',
	            lquote2: '‘',
	            rquote2: '’'
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/centuries',
	        handler: function handler(text, settings) {
	            var dashes = '(' + this.data('common/dash') + ')',
	                re = new RegExp('(X|I|V)[ | ]?' + dashes + '[ | ]?(X|I|V)', 'g');
	
	            return text.replace(re, '$1' + settings.dash + '$3');
	        },
	        settings: {
	            dash: '–' // &ndash;
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/daysMonth',
	        handler: function handler(text, settings) {
	            var re = new RegExp('(^|\\s)([123]?\\d)' + '(' + this.data('common/dash') + ')' + '([123]?\\d)[  ]' + '(' + this.data('ru/monthGenCase') + ')', 'g');
	
	            return text.replace(re, '$1$2' + settings.dash + '$4 $5');
	        },
	        settings: {
	            dash: '–' // &ndash;
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/de',
	        handler: function handler(text) {
	            var re = new RegExp('([a-яё]+) де' + this.data('ru/dashAfterDe'), 'g');
	
	            return text.replace(re, '$1-де');
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/decade',
	        handler: function handler(text, settings) {
	            var re = new RegExp('(^|\\s)(\\d{3}|\\d)0' + '(' + this.data('common/dash') + ')' + '(\\d{3}|\\d)0(-е[  ])' + '(?=г\\.?[  ]?г|год)', 'g');
	
	            return text.replace(re, '$1$20' + settings.dash + '$40$5');
	        },
	        settings: {
	            dash: '–' // &ndash;
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/directSpeech',
	        handler: function handler(text) {
	            var dashes = this.data('common/dash'),
	                re1 = new RegExp('(["»‘“,])[ | ]?(' + dashes + ')[ | ]', 'g'),
	                re2 = new RegExp('(^|' + Typograf._privateLabel + ')(' + dashes + ')( | )', 'gm'),
	                re3 = new RegExp('([.…?!])[  ](' + dashes + ')[  ]', 'g');
	
	            return text.replace(re1, '$1 — ').replace(re2, '$1— ').replace(re3, '$1 — ');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/izpod',
	        handler: function handler(text) {
	            var re = new RegExp(this.data('ru/dashBefore') + '(И|и)з под' + this.data('ru/dashAfter'), 'g');
	
	            return text.replace(re, '$1$2з-под');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/izza',
	        handler: function handler(text) {
	            var re = new RegExp(this.data('ru/dashBefore') + '(И|и)з за' + this.data('ru/dashAfter'), 'g');
	
	            return text.replace(re, '$1$2з-за');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/ka',
	        handler: function handler(text) {
	            var re = new RegExp('([a-яё]+) ка(сь)?' + this.data('ru/dashAfter'), 'g');
	
	            return text.replace(re, '$1-ка$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/koe',
	        handler: function handler(text) {
	            var re = new RegExp(this.data('ru/dashBefore') + '([Кк]о[ей])\\s([а-яё]{3,})' + this.data('ru/dashAfter'), 'g');
	
	            return text.replace(re, '$1$2-$3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/main',
	        index: '-5',
	        handler: function handler(text) {
	            var dashes = this.data('common/dash'),
	                re = new RegExp('( | )(' + dashes + ')( |\\n)', 'g');
	
	            return text.replace(re, ' —$3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/month',
	        handler: function handler(text, settings) {
	            var months = '(' + this.data('ru/month') + ')',
	                monthsPre = '(' + this.data('ru/monthPreCase') + ')',
	                dashes = this.data('common/dash'),
	                re = new RegExp(months + ' ?(' + dashes + ') ?' + months, 'gi'),
	                rePre = new RegExp(monthsPre + ' ?(' + dashes + ') ?' + monthsPre, 'gi'),
	                newSubStr = '$1' + settings.dash + '$3';
	
	            return text.replace(re, newSubStr).replace(rePre, newSubStr);
	        },
	        settings: {
	            dash: '–' // &ndash;
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/surname',
	        handler: function handler(text) {
	            var re = new RegExp('([А-ЯЁ][а-яё]+)\\s-([а-яё]{1,3})(?![^а-яё]|$)', 'g');
	
	            return text.replace(re, '$1 —$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/taki',
	        handler: function handler(text) {
	            var re = new RegExp('(верно|довольно|опять|прямо|так|вс[её]|действительно|неужели)\\s(таки)' + this.data('ru/dashAfter'), 'g');
	
	            return text.replace(re, '$1-$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/time',
	        handler: function handler(text, settings) {
	            var re = new RegExp(this.data('ru/dashBefore') + '(\\d?\\d:[0-5]\\d)' + this.data('common/dash') + '(\\d?\\d:[0-5]\\d)' + this.data('ru/dashAfter'), 'g');
	
	            return text.replace(re, '$1$2' + settings.dash + '$3');
	        },
	        settings: {
	            dash: '–' // &ndash;
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/to',
	        handler: function handler(text) {
	            var words = ['откуда', 'куда', 'где', 'когда', 'зачем', 'почему', 'как', 'како[ейм]', 'какая', 'каки[емх]', 'какими', 'какую', 'что', 'чего', 'че[йм]', 'чьим?', 'кто', 'кого', 'кому', 'кем'],
	                re = new RegExp('(' + words.join('|') + ')( | -|- )(то|либо|нибудь)' + this.data('ru/dashAfter'), 'gi');
	
	            return text.replace(re, '$1-$3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/weekday',
	        handler: function handler(text, settings) {
	            var part = '(' + this.data('ru/weekday') + ')',
	                re = new RegExp(part + ' ?(' + this.data('common/dash') + ') ?' + part, 'gi');
	
	            return text.replace(re, '$1' + settings.dash + '$3');
	        },
	        settings: {
	            dash: '–' // &ndash;
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/dash/years',
	        handler: function handler(text, settings) {
	            var dashes = this.data('common/dash'),
	                re = new RegExp('(\\D|^)(\\d{4})[  ]?(' + dashes + ')[  ]?(\\d{4})(?=[  ]?г)', 'g');
	
	            return text.replace(re, function ($0, $1, $2, $3, $4) {
	                if (parseInt($2, 10) < parseInt($4, 10)) {
	                    return $1 + $2 + settings.dash + $4;
	                }
	
	                return $0;
	            });
	        },
	        settings: {
	            dash: '–' // &ndash;
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/date/fromISO',
	        handler: function handler(text) {
	            var sp1 = '(-|\\.|\\/)',
	                sp2 = '(-|\\/)',
	                re1 = new RegExp('(^|\\D)(\\d{4})' + sp1 + '(\\d{2})' + sp1 + '(\\d{2})(\\D|$)', 'gi'),
	                re2 = new RegExp('(^|\\D)(\\d{2})' + sp2 + '(\\d{2})' + sp2 + '(\\d{4})(\\D|$)', 'gi');
	
	            return text.replace(re1, '$1$6.$4.$2$7').replace(re2, '$1$4.$2.$6$7');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/date/weekday',
	        handler: function handler(text) {
	            var space = '( | )',
	                monthCase = this.data('ru/monthGenCase'),
	                weekday = this.data('ru/weekday'),
	                re = new RegExp('(\\d)' + space + '(' + monthCase + '),' + space + '(' + weekday + ')', 'gi');
	
	            return text.replace(re, function () {
	                var a = arguments;
	                return a[1] + a[2] + a[3].toLowerCase() + ',' + a[4] + a[5].toLowerCase();
	            });
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/money/currency',
	        handler: function handler(text) {
	            var currency = '([$€¥Ұ£₤₽])',
	                re1 = new RegExp('(^|[\\D]{2})' + currency + ' ?([\\d.,]+([    ]\\d{3})*)', 'g'),
	                re2 = new RegExp('(^|[\\D])([\\d.,]+) ?' + currency, 'g'),
	                newSubstr1 = '$1$3 $2',
	                newSubstr2 = '$1$2 $3';
	
	            return text.replace(re1, newSubstr1).replace(re2, newSubstr2);
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/money/ruble',
	        handler: function handler(text) {
	            var newSubstr = '$1 ₽',
	                commonPart = '(\\d+)( | )?(р|руб)\\.',
	                re1 = new RegExp('^' + commonPart + '$', 'g'),
	                re2 = new RegExp(commonPart + '(?=[!?,:;])', 'g'),
	                re3 = new RegExp(commonPart + '(?=\\s+[A-ЯЁ])', 'g');
	
	            return text.replace(re1, newSubstr).replace(re2, newSubstr).replace(re3, newSubstr + '.');
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/abbr',
	        handler: function handler(text) {
	            var re = new RegExp('(^|\\s|' + Typograf._privateLabel + ')(([а-яё]{1,3}\\.){2,})(?![а-яё])', 'g');
	            return text.replace(re, function ($0, $1, $2) {
	                var abbr = $2.split(/\./);
	                // Являются ли сокращения ссылкой
	                if (['рф', 'ру', 'рус', 'орг', 'укр', 'бг', 'срб'].indexOf(abbr[abbr.length - 2]) > -1) {
	                    return $0;
	                }
	
	                return $1 + $2.split(/\./).join('. ').trim();
	            });
	        }
	    });
	
	    /*jshint maxlen:1000 */
	    Typograf.rule({
	        name: 'ru/nbsp/addr',
	        handler: function handler(text) {
	            return text.replace(/(\s|^)(дом|д\.|кв\.|под\.|п\-д) *(\d+)/gi, '$1$2 $3').replace(/(\s|^)(мкр-н|мк-н|мкр\.|мкрн)\s/gi, '$1$2 ') // микрорайон
	            .replace(/(\s|^)(эт\.) *(-?\d+)/gi, '$1$2 $3').replace(/(\s|^)(\d+) +этаж([^а-яё]|$)/gi, '$1$2 этаж$3').replace(/(\s|^)литер\s([А-Я]|$)/gi, '$1литер $2')
	            /*
	                область, край, станция, поселок, село,
	                деревня, улица, переулок, проезд, проспект,
	                бульвар, площадь, набережная, шоссе,
	                тупик, офис, комната, участок, владение, строение, корпус
	            */
	            .replace(/(\s|^)(обл|кр|ст|пос|с|д|ул|пер|пр|пр\-т|просп|пл|бул|б\-р|наб|ш|туп|оф|комн?|уч|вл|влад|стр|кор)\. *([а-яёa-z\d]+)/gi, '$1$2. $3')
	            // город
	            .replace(/(\D[ \u00A0]|^)г\. ?([А-ЯЁ])/gm, '$1г. $2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/afterNumberSign',
	        handler: function handler(text) {
	            // \u2009 - THIN SPACE
	            // \u202F - NARROW NO-BREAK SPACE
	            return text.replace(/№[ \u00A0\u2009]?(\d|п\/п)/g, '№ $1');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/beforeParticle',
	        index: '+5',
	        handler: function handler(text) {
	            var particles = '(ли|ль|же|ж|бы|б)',
	                re1 = new RegExp('([А-ЯЁа-яё]) ' + particles + '(?=[,;:?!"‘“»])', 'g'),
	                re2 = new RegExp('([А-ЯЁа-яё])[  ]' + particles + '[  ]', 'g');
	
	            return text.replace(re1, '$1 $2').replace(re2, '$1 $2 ');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/centuries',
	        handler: function handler(text) {
	            var dashes = this.data('common/dash'),
	                before = '(^|\\s)([VIX]+)',
	                after = '(?=[,;:?!"‘“»]|$)',
	                re1 = new RegExp(before + '[  ]?в\\.?' + after, 'gm'),
	                re2 = new RegExp(before + '(' + dashes + ')' + '([VIX]+)[  ]?в\\.?([  ]?в\\.?)?' + after, 'gm');
	
	            return text.replace(re1, '$1$2 в.').replace(re2, '$1$2$3$4 вв.');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/dayMonth',
	        handler: function handler(text) {
	            var re = new RegExp('(\\d{1,2}) (' + this.data('ru/shortMonth') + ')', 'gi');
	            return text.replace(re, '$1 $2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/groupNumbers',
	        handler: function handler(text) {
	            return text.replace(/(^ ?|\D )(\d{1,3}([ \u00A0\u202F\u2009]\d{3})+)(?! ?[\d-])/gm, function ($0, $1, $2) {
	                return $1 + $2.replace(/\s/g, ' ');
	            });
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/initials',
	        handler: function handler(text) {
	            var spaces = '   ',
	                // nbsp, thinsp
	            lquote = this.data('ru/lquote'),
	                rquote = this.data('ru/rquote'),
	                re = new RegExp('(^|[' + spaces + lquote + Typograf._privateLabel + '"])([А-ЯЁ])\\.[' + spaces + ']?([А-ЯЁ])\\.[' + spaces + ']?([А-ЯЁ][а-яё]+)(?=[\\s.,;:?!"' + rquote + ']|$)', 'gm');
	
	            return text.replace(re, '$1$2. $3. $4');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/m',
	        index: '+5',
	        handler: function handler(text) {
	            var label = Typograf._privateLabel,
	                re = new RegExp('(^|[\\s,.' + label + '])' + '(\\d+)[  ]?(мм?|см|км|дм|гм|mm?|km|cm|dm)([23²³])?([\\s.!?,;' + label + ']|$)', 'gm');
	
	            return text.replace(re, function ($0, $1, $2, $3, $4, $5) {
	                var pow = {
	                    '2': '²',
	                    '²': '²',
	                    '3': '³',
	                    '³': '³',
	                    '': ''
	                }[$4 || ''];
	
	                return $1 + $2 + ' ' + $3 + pow + ($5 === ' ' ? ' ' : $5);
	            });
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/ooo',
	        handler: function handler(text) {
	            return text.replace(/(^|[^a-яёA-ЯЁ])(ООО|ОАО|ЗАО|НИИ|ПБОЮЛ) /g, '$1$2 ');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/page',
	        handler: function handler(text) {
	            var re = new RegExp('(^|[)\\s' + Typograf._privateLabel + '])' + '(стр|гл|рис|илл?|ст|п|c)\\. *(\\d+)([\\s.,?!;:]|$)', 'gim');
	
	            return text.replace(re, '$1$2. $3$4');
	        }
	    });
	
	    /*jshint maxlen:1000 */
	    Typograf.rule({
	        name: 'ru/nbsp/ps',
	        handler: function handler(text) {
	            var re = new RegExp('(^|\\s|' + Typograf._privateLabel + ')[pз]\\.[  ]?([pз]\\.[  ]?)?[sы]\\.:? ', 'gim');
	            return text.replace(re, function ($0, $1, $2) {
	                return $1 + ($2 ? 'P. P. S. ' : 'P. S. ');
	            });
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/rubleKopek',
	        handler: function handler(text) {
	            return text.replace(/(\d) ?(?=(руб|коп)\.)/g, '$1 ');
	        }
	    });
	
	    /*jshint maxlen:1000 */
	    Typograf.rule({
	        name: 'ru/nbsp/see',
	        handler: function handler(text) {
	            var re = new RegExp('(^|\\s|' + Typograf._privateLabel + '|\\()(см|им)\\.[  ]?([а-яё0-9a-z]+)([\\s.,?!]|$)', 'gi');
	            return text.replace(re, function ($0, $1, $2, $3, $4) {
	                return ($1 === ' ' ? ' ' : $1) + $2 + '. ' + $3 + $4;
	            });
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/year',
	        handler: function handler(text) {
	            return text.replace(/(^|\D)(\d{4}) ?г([ ,;.\n]|$)/g, '$1$2 г$3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/nbsp/years',
	        index: '+5',
	        handler: function handler(text) {
	            var dashes = this.data('common/dash'),
	                re = new RegExp('(^|\\D)(\\d{4})(' + dashes + ')(\\d{4})[  ]?г\\.?([  ]?г\\.)?(?=[,;:?!"‘“»\\s]|$)', 'gm');
	
	            return text.replace(re, '$1$2$3$4 гг.');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/number/ordinals',
	        handler: function handler(text) {
	            var re = new RegExp('(\\d)-(ый|ой|ая|ое|ые|ым|ом|ых|ого|ому|ыми)(?![' + this.data('l') + '])', 'g');
	
	            return text.replace(re, function ($0, $1, $2) {
	                var parts = {
	                    'ой': 'й',
	                    'ый': 'й',
	                    'ая': 'я',
	                    'ое': 'е',
	                    'ые': 'е',
	                    'ым': 'м',
	                    'ом': 'м',
	                    'ых': 'х',
	                    'ого': 'го',
	                    'ому': 'му',
	                    'ыми': 'ми'
	                };
	
	                return $1 + '-' + parts[$2];
	            });
	        }
	    });
	
	    /*jshint maxlen:1000 */
	    Typograf.rule({
	        name: 'ru/optalign/bracket',
	        handler: function handler(text, settings) {
	            return text.replace(/( |\u00A0)\(/g, '<span class="typograf-oa-sp-lbracket">$1</span><span class="typograf-oa-lbracket">(</span>').replace(/^\(/gm, '<span class="typograf-oa-n-lbracket">(</span>');
	        },
	        disabled: true
	    }).innerRule({
	        name: 'ru/optalign/bracket',
	        handler: function handler(text) {
	            // Зачистка HTML-тегов от висячей пунктуации для скобки
	            return text.replace(/<span class="typograf-oa-(n-|sp-)?lbracket">(.*?)<\/span>/g, '$2');
	        }
	    });
	
	    /*jshint maxlen:1000 */
	    Typograf.rule({
	        name: 'ru/optalign/comma',
	        handler: function handler(text, settings) {
	            var re = new RegExp('([' + this.data('l') + '\\d́]+), ', 'gi');
	            return text.replace(re, '$1<span class="typograf-oa-comma">,</span><span class="typograf-oa-comma-sp"> </span>');
	        },
	        disabled: true
	    }).innerRule({
	        name: 'ru/optalign/comma',
	        handler: function handler(text) {
	            // Зачистка HTML-тегов от висячей пунктуации для запятой
	            return text.replace(/<span class="typograf-oa-comma(-sp)?">(.*?)<\/span>/g, '$2');
	        }
	    });
	
	    /*jshint maxlen:1000 */
	    Typograf.rule({
	        name: 'ru/optalign/quote',
	        handler: function handler(text) {
	            var name = 'ru/punctuation/quote',
	                lquotes = '(["' + this.setting(name, 'lquote') + this.setting(name, 'lquote2') + this.setting(name, 'lquote3') + '])',
	                re = new RegExp('([\\d' + this.data('l') + '\\-́!?.:;,]+)( | )(' + lquotes + ')', 'gi'),
	                re2 = new RegExp('(^|' + Typograf._privateLabel + ')' + lquotes, 'gm');
	
	            return text.replace(re, '$1<span class="typograf-oa-sp-lquote">$2</span><span class="typograf-oa-lquote">$3</span>').replace(re2, '$1<span class="typograf-oa-n-lquote">$2</span>');
	        },
	        disabled: true
	    }).innerRule({
	        name: 'ru/optalign/quote',
	        handler: function handler(text) {
	            // Зачистка HTML-тегов от висячей пунктуации для кавычки
	            return text.replace(/<span class="typograf-oa-(n-|sp-)?lquote">(.*?)<\/span>/g, '$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/other/accent',
	        handler: function handler(text) {
	            return text.replace(/([а-яё])([АЕЁИОУЫЭЮЯ])([^А-ЯЁ\w]|$)/g, function ($0, $1, $2, $3) {
	                return $1 + $2.toLowerCase() + '́' + $3;
	            });
	        },
	        disabled: true
	    });
	
	    Typograf.rule({
	        name: 'ru/punctuation/ano',
	        handler: function handler(text) {
	            var re = new RegExp('([^!?,:;\\-‒–—])([  \n])(а|но)(?= | |\n)', 'g');
	            return text.replace(re, '$1,$2$3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/punctuation/apostrophe',
	        index: '-5',
	        handler: function handler(text) {
	            var letters = '([' + this.data('l') + '])',
	                re = new RegExp(letters + '[\'’]' + letters, 'gi');
	
	            return text.replace(re, '$1ʼ$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/punctuation/exclamation',
	        live: false,
	        handler: function handler(text) {
	            return text.replace(/(^|[^!])!{2}($|[^!])/, '$1!$2').replace(/(^|[^!])!{4}($|[^!])/, '$1!!!$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/punctuation/exclamationQuestion',
	        index: '+5',
	        handler: function handler(text) {
	            var re = new RegExp('(^|[^!])!\\?([^?]|$)', 'g');
	            return text.replace(re, '$1?!$2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/punctuation/hellip',
	        handler: function handler(text) {
	            return text.replace(/(^|[^.])\.{3,4}([^.]|$)/g, '$1…$2').replace(/(^|[^.])(\.\.\.|…),/g, '$1…').replace(/(\!|\?)(\.\.\.|…)([^.]|$)/g, '$1..$3');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/punctuation/quote',
	        handler: function handler(text, settings) {
	            var lquote = settings.lquote,
	                rquote = settings.rquote;
	
	            text = this._quote(text, settings);
	            if (lquote === settings.lquote2 && rquote === settings.rquote2) {
	                return text
	                // ««Энергия» Синергия» -> «Энергия» Синергия»
	                .replace(new RegExp(lquote + lquote, 'g'), lquote)
	                // «Энергия «Синергия»» -> «Энергия «Синергия»
	                .replace(new RegExp(rquote + rquote, 'g'), rquote);
	            }
	
	            return text;
	        },
	        settings: {
	            lquote: '«',
	            rquote: '»',
	            lquote2: '„',
	            rquote2: '“',
	            lquote3: '‚',
	            rquote3: '‘'
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/space/afterHellip',
	        handler: function handler(text) {
	            return text.replace(/([а-яё])(\.\.\.|…)([А-ЯЁ])/g, '$1$2 $3').replace(/([?!]\.\.)([а-яёa-z])/gi, '$1 $2');
	        }
	    });
	
	    Typograf.rule({
	        name: 'ru/space/year',
	        handler: function handler(text) {
	            var re = new RegExp('(^| | )(\\d{3,4})(год([ауе]|ом)?)([^' + this.data('l') + ']|$)', 'g');
	            return text.replace(re, '$1$2 $3$5');
	        }
	    });
	
	    Typograf._sortRules();
	    Typograf._needSortRules = true;
	
	    return Typograf;
	});

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map