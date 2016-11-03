'use strict';

const Joi = require('joi');

// First and lastname are required by the schema
const user = Joi.object({
  firstname: Joi.string().min(2).max(20).required(),
  lastname: Joi.string().min(2).max(20).required()
});

module.exports = {
  create: [{
    // Incoming POST (create) requests must match the user type
    schema: user,

    // These are Joi options. In this case any unknown attributes are stripped
    options: {
      stripUnknown: true
    }
  }],
  update: [{
    // Incoming PUT (update) requests must match the user type
    schema: user,

    // These are Joi options. In this case any unknown attributes are stripped
    options: {
      stripUnknown: true
    }
  }]
};
