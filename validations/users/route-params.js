'use strict';

const Joi = require('joi');

// First and lastname are required
module.exports = {
  read: [{
    // Incoming GET (read) requests must contain a numeric ID param in the url
    schema: Joi.object().keys({
      id: Joi.number()
    })
  }],
  update: [{
    // Incoming PUT (update) requests must contain a numeric ID param in the url
    schema: Joi.object().keys({
      id: Joi.number()
    })
  }],
  delete: [{
    // Incoming DELETE (delete) requests must contain a numeric ID param in the url
    schema: Joi.object().keys({
      id: Joi.number()
    })
  }]
};
