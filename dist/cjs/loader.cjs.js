'use strict';

var index = require('./index-wr0e9l1Y.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[769,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["promerica-button.cjs",[[769,"promerica-button",{"label":[1],"variant":[1],"disabled":[4]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map
