/**
 * Module dependencies.
 */
var debug = require('debug')('glint:plugin-adapter-dates');

/**
 *  Dates Adapter Plugin
 *
 *  adds the following {Date} attributes:
 *  - createdAt
 *  - updatedAd
 */
module.exports = function (o) {
  o = o || {};
  o.createdAt = 'createdAt';
  o.updatedAt = 'updatedAt';

  plugin.api = 'adapter-plugin';
  plugin.name = 'dates';
  function plugin(adapter) {

    adapter.on('pre-save', function () {
      var args = [].slice.apply(arguments);
      var len = args.length, pos = 3;
      if (len <= pos) return debug('missing argument');
      var obj = args[pos];
      var now = new Date();
      obj[o.updatedAt] = now;
      if (!(obj[o.createdAt])) obj[o.createdAt] = now;
    });

  }

  return plugin;

};
