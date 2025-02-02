const Joi = require('joi');

const id = Joi.number().integer();
const purchaseId = Joi.number().integer();
const providerId = Joi.number().integer();
const expenseDate = Joi.date();
const abono = Joi.number().integer();
const concepto = Joi.string();

const createExpenseSchema = Joi.object({
    purchaseId: purchaseId.required(),
    providerId: providerId.required(),
    expenseDate: expenseDate.required(),
    abono: abono,
    concepto: concepto
});

const updateExpenseSchema = Joi.object({
    purchaseId: purchaseId,
    providerId: providerId,
    expenseDate: expenseDate,
    abono: abono,
    concepto: concepto
});

const getExpenseSchema = Joi.object({
    id: id.required()
});

module.exports = { createExpenseSchema, updateExpenseSchema, getExpenseSchema };
