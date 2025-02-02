const Joi = require('joi');

const id = Joi.number().integer();
const providerId = Joi.number();
const purchaseDate = Joi.date();
const paid = Joi.bool();
const total = Joi.number();
const abono = Joi.number();

const createPurchaseSchema = Joi.object({
    providerId: providerId.required(),
    purchaseDate: purchaseDate.required(),
    paid: paid,
    total: total,
    abono: abono
});

const updatePurchaseSchema = Joi.object({
    providerId: providerId,
    purchaseDate: purchaseDate,
    paid: paid,
    total: total,
    abono: abono,
});

const getPurchaseSchema = Joi.object({
    id: id.required()
});

module.exports = { createPurchaseSchema, updatePurchaseSchema, getPurchaseSchema };
