const Joi = require('joi');

const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const productName = Joi.string();
const sellPrice = Joi.number().precision(2);
const quantity = Joi.number().precision(2);

const createOrderDetailSchema = Joi.object({
    orderId: orderId.required(),
    productId: productId.required(),
    productName: productName,
    sellPrice: sellPrice,
    quantity: quantity.required(),
});

const updateOrderDetailSchema = Joi.object({
    orderId: orderId,
    productId: productId,
    productName: productName,
    sellPrice: sellPrice,
    quantity: quantity
});

const getOrderDetailSchema = Joi.object({
    id: id.required()
});

module.exports = { createOrderDetailSchema, updateOrderDetailSchema, getOrderDetailSchema };