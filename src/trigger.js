
var Trigger = function() {
};

Trigger.prototype.bind = function(eventName, func) {
    this._listeners = this._listeners || {};
    this._listeners[eventName] = this._listeners[eventName] || [];
    this._listeners[eventName].push(func);
};

Trigger.prototype.unbind = function(eventName, func) {
    this._listeners = this._listeners || {};
    this._listeners[eventName].splice(this._listeners[eventName].indexOf(func), 1);
};

Trigger.prototype.trigger = function(eventName) {
    this._listeners = this._listeners || {};

    this._listeners[eventName].forEach(function(ev) {
        ev.apply(this, Array.prototype.slice.call(arguments, 1));
    });
};

Trigger.extend = function(obj) {
    var functions = [
        'bind',
        'unbind',
        'trigger'
    ];

    functions.forEach(function(func) {
        if(typeof obj === 'function') {
            obj.prototype[func] = Trigger.prototype[func];
        } else {
            obj[func] = Trigger.prototype[func];
        }
    });
};

// window.Trigger = Trigger;

