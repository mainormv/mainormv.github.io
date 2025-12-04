import { p as promiseResolve, b as bootstrapLazy } from './index-Bf7qtttq.js';
export { s as setNonce } from './index-Bf7qtttq.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.38.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[769,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["promerica-button",[[769,"promerica-button",{"label":[1],"variant":[1],"disabled":[4]}]]]], options);
});
//# sourceMappingURL=promerica-ui-library.js.map
