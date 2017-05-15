require('reflect-metadata');
require('zone.js');
require('rxjs/Rx');
const {ServerAppModuleNgFactory} = require('./dist/bundle');
const { renderModuleFactory, INITIAL_CONFIG } = require('@angular/platform-server');

// console.log(ServerAppModuleNgFactory);

renderModuleFactory(ServerAppModuleNgFactory, {
  extraProviders: [{
    provide: INITIAL_CONFIG,
    useValue: {
      document: '<demo-app></demo-app>',
      url: '/'
    }
  }]
})
  .then(html => {
    console.log(html);
  })

