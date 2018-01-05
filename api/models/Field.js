/**
 * Field.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    label : { type: 'string' },

    columns : { type: 'string' },

    columnsAfter : { type: 'string' },

    required : { type: 'boolean' },

    placeholder : { type: 'string' },

    type : { type: 'json' },

    conditionallyShow : { type: 'json' },

    toolTipContent : { type: 'string' },

    additionalInfo : { type: 'string' },

    additionalButton : { type: 'string' },

    options : {
      model: 'option'
    },

    sectionId : {
      model: 'section'
    }

  }
};

