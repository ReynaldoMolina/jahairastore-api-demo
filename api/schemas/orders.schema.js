const Joi = require('joi');

const id = Joi.number().integer();
const clientId = Joi.number();
const orderDate = Joi.date();
const delivered = Joi.bool();
const total = Joi.number().precision(2);
const abono = Joi.number().precision(2);
const saldo = Joi.number().precision(2);

const createOrderSchema = Joi.object({
    clientId: clientId.required(),
    orderDate: orderDate.required(),
    delivered: delivered,
    total: total,
    abono: abono,
    saldo: saldo,
});

const updateOrderSchema = Joi.object({
    clientId: clientId,
    delivered: delivered,
    orderDate: orderDate,
    total: total,
    abono: abono,
    saldo: saldo,
});

const getOrderSchema = Joi.object({
    id: id.required()
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };