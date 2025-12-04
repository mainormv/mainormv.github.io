import { b as bootstrapLazy } from './index-Bf7qtttq.js';
export { s as setNonce } from './index-Bf7qtttq.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[769,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["promerica-button",[[769,"promerica-button",{"label":[1],"variant":[1],"disabled":[4]}]]]], options);
};

export { defineCustomElements };
//# sourceMappingURL=loader.js.map
