'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-terser': {
      enabled: false,
    },
    'autoImport': {
      forbidEval: true,
      webpack: {
        mode: 'development',
      },
    },
  });

  return app.toTree();
};
