// Generated by CoffeeScript 1.8.0
var KV, Watch,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Watch = require('./watch');

module.exports = KV = (function() {
  function KV(httpAddr, key, callback) {
    this.end = __bind(this.end, this);
    this._watch = new Watch("" + httpAddr + "/v1/kv/" + key, (function(_this) {
      return function(configurations) {
        var buf, configuration, _i, _len;
        for (_i = 0, _len = configurations.length; _i < _len; _i++) {
          configuration = configurations[_i];
          if (configuration.Value != null) {
            buf = new Buffer(configuration.Value, 'base64');
            configuration.Value = buf.toString();
          }
        }
        return callback(configurations);
      };
    })(this));
  }

  KV.prototype.end = function() {
    return this._watch.end();
  };

  return KV;

})();
