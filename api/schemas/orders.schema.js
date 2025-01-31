const Joi = require('joi');

const id = Joi.number().integer();
const clientId = Joi.number();
const orderDate = Joi.date();
const paid = Joi.bool();
const total = Joi.number();
const abono = Joi.number();

const createOrderSchema = Joi.object({
    clientId: clientId.required(),
    orderDate: orderDate.required(),
    paid: paid,
    total: total,
    abono: abono
});

const updateOrderSchema = Joi.object({
    clientId: clientId,
    orderDate: orderDate,
    paid: paid,
    total: total,
    abono: abono,
});

const getOrderSchema = Joi.object({
    id: id.required()
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
