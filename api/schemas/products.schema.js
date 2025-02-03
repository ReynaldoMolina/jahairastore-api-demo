const Joi = require('joi');

const id = Joi.number().integer();
const sheinId = Joi.number().integer();
const provider = Joi.string().max(40);
const category = Joi.string().max(40);
const name = Joi.string().max(40);
const addedDate = Joi.date();
const costPrice = Joi.number();
const sellPrice = Joi.number();
const description = Joi.string().max(200);

const createProductSchema = Joi.object({
    sheinId: sheinId,
    provider: provider.required(),
    category: category.required(),
    name: name.required(),
    addedDate: addedDate.required(),
    costPrice: costPrice.required(),
    sellPrice: sellPrice.required(),
    description: description
});

const updateProductSchema = Joi.object({
    sheinId: sheinId,
    provider: provider,
    category: category,
    name: name,
    addedDate: addedDate,
    costPrice: costPrice,
    sellPrice: sellPrice,
    description: description
});

const getProductSchema = Joi.object({
    id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
