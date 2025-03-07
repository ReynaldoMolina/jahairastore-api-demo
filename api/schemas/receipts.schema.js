const Joi = require('joi');

const id = Joi.number().integer();

const getReceiptSchema = Joi.object({
    id: id.required()
});

module.exports = { getReceiptSchema };
