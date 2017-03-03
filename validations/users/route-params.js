'use strict';

const Joi = require('joi');

// First and lastname are required
module.exports = {
  read: [{
    // Incoming GET (read) requests must contain a numeric ID param in the url
    // or if using mongo an _id string
    schema: Joi.object().keys({
      id: Joi.alternatives(
        Joi.number(),
        Joi.string()
      )
    })
  }],
  update: [{
    // Incoming PUT (update) requests must contain a numeric ID param in the url
    schema: Joi.object().keys({
      id: Joi.alternatives(
        Joi.number(),
        Joi.string()
      )
    })
  }],
  delete: [{
    // Incoming DELETE (delete) requests must contain a numeric ID param in the url
    schema: Joi.object().keys({
      id: Joi.alternatives(
        Joi.number(),
        Joi.string()
      )
    })
  }]
};
