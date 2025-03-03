const Joi = require('joi');

const id = Joi.number().integer();
const clientId = Joi.number();
const orderDate = Joi.date();
const state = Joi.string();

const createOrderSchema = Joi.object({
    clientId: clientId.required(),
    orderDate: orderDate.required(),
    state
});

const updateOrderSchema = Joi.object({
    clientId,
    orderDate,
    state
});

const getOrderSchema = Joi.object({
    id: id.required()
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
