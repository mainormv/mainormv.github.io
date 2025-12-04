'use strict';

var index = require('./index-wr0e9l1Y.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.38.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('promerica-ui-library.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[769,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["promerica-button.cjs",[[769,"promerica-button",{"label":[1],"variant":[1],"disabled":[4]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=promerica-ui-library.cjs.js.map
