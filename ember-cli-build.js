'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
let Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  // let app = new EmberApp(defaults, {
  //   // Add options here
  // });

  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
        exclude: ['png', 'svg', 'jpeg', 'gif', 'ico', 'jpg']
    },
    sassOptions: {
        includePaths: [
          'bower_components/materialize/sass'
        ]
      }
  });

  var materializeFonts = new Funnel('bower_components/materialize/fonts/roboto', {
        srcDir: '/',
        include: ['*.woff', '*.ttf', '*.woff2'],
        destDir: '/fonts/roboto'
    });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/materialize/dist/js/materialize.min.js');
  app.import('node_modules/moment/min/moment.min.js');
  //return app.toTree();
  return app.toTree([materializeFonts]);
};
