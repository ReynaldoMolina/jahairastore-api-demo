const Joi = require('joi');

const id = Joi.number().integer();
const orderId = Joi.number().integer();
const clientId = Joi.number().integer();
const receiptDate = Joi.date();
const abono = Joi.number().integer();
const concepto = Joi.string();

const createReceiptSchema = Joi.object({
    orderId: orderId.required(),
    clientId: clientId.required(),
    receiptDate: receiptDate.required(),
    abono: abono.required(),
    concepto: concepto
});

const updateReceiptSchema = Joi.object({
    orderId: orderId,
    clientId: clientId,
    receiptDate: receiptDate,
    abono: abono,
    concepto: concepto
});

const getReceiptSchema = Joi.object({
    id: id.required()
});

module.exports = { createReceiptSchema, updateReceiptSchema, getReceiptSchema };
