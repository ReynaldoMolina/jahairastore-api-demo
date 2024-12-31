const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const total = Joi.number().min(1);
const abono = Joi.number().min(1);
const saldo = Joi.number().min(1);

const createOrderSchema = Joi.object({
    name: name.required(),
    total: total.required(),
    abono: abono,
    saldo: saldo,
});

const updateOrderSchema = Joi.object({
    name: name,
    total: total,
    abono: abono,
    saldo: saldo
});

const getOrderSchema = Joi.object({
    id: id.required()
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };