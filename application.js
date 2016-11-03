'use strict';

const express = require('express');
const log = require('fh-bunyan').getLogger(__filename);
const mbaasApi = require('fh-mbaas-api');
const mbaasExpress = mbaasApi.mbaasExpress();
const fhRestExpress = require('fh-rest-express-router');
const fhRestMemoryAdapter = require('fh-rest-memory-adapter');
const app = module.exports = express();

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys([]));
app.use('/mbaas', mbaasExpress.mbaas);

// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

// Expose the users in memory store as a RESTful "/users" route
// Could also use fh-rest-mongodb-adapter here!
app.use(
  '/users',
  fhRestExpress({
    name: 'users',
    adapter: fhRestMemoryAdapter(),
    bodyAndQueryValidations: require('./validations/users/body-query'),
    routeParamValidations: require('./validations/users/route-params')
  })
);

// Important that this is last!
app.use(mbaasExpress.errorHandler());

const port = process.env.FH_PORT || process.env.VCAP_APP_PORT || 9001;
app.listen(port, function() {
  log.info('App started at: %s on port: %s', new Date(), port);
});
