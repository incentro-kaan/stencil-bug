import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencilbug',
  taskQueue: 'async',
  hashFileNames: false,
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    appendChildSlotFix: true,
    cloneNodeFix: true,
    slotChildNodesFix: true
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'dist-hydrate-script',
      empty: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
