/**
 * Option.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    key : { type: 'string' },

    value : { type: 'string' },

    columns: { type: 'json' },

    rows: {type: 'json' },

    fields: {type: 'json'}
  }
};

