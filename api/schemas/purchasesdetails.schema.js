const Joi = require('joi');

const id = Joi.number().integer();
const purchaseId = Joi.number().integer();
const productId = Joi.number().integer();
const costPrice = Joi.number().integer();
const quantity = Joi.number().integer();

const createPurchaseDetailSchema = Joi.object({
    purchaseId: purchaseId.required(),
    productId: productId.required(),
    costPrice: costPrice,
    quantity: quantity.required(),
});

const updatePurchaseDetailSchema = Joi.object({
    purchaseId: purchaseId,
    productId: productId,
    costPrice: costPrice,
    quantity: quantity
});

const getPurchaseDetailSchema = Joi.object({
    id: id.required()
});

module.exports = { createPurchaseDetailSchema, updatePurchaseDetailSchema, getPurchaseDetailSchema };
