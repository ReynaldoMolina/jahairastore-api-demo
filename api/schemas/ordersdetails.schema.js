const Joi = require('joi');

const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const sellPrice = Joi.number().integer();
const quantity = Joi.number().integer();

const createOrderDetailSchema = Joi.object({
    orderId: orderId.required(),
    productId: productId.required(),
    sellPrice: sellPrice,
    quantity: quantity.required(),
});

const updateOrderDetailSchema = Joi.object({
    orderId: orderId,
    productId: productId,
    sellPrice: sellPrice,
    quantity: quantity
});

const getOrderDetailSchema = Joi.object({
    id: id.required()
});

module.exports = { createOrderDetailSchema, updateOrderDetailSchema, getOrderDetailSchema };
