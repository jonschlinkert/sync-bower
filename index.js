'use strict';

var sync = require('sync-pkg');

// sync-pkg will eventually sync with more than bower.json,
// at which point we will probably move the bower code
// to this library, then require it back to sync-pkg.
// For now we're going to pass it through and use this as
// a facade.
module.exports = function() {
  return sync.bower.apply(sync, arguments);
};
