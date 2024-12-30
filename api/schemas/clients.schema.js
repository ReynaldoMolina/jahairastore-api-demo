const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastname = Joi.string().min(3).max(15);
const phone = Joi.string().min(3).max(15);
const municipio = Joi.string().min(3).max(15);
const departamento = Joi.string().min(3).max(15);
const country = Joi.string().min(3).max(15);
const address = Joi.string().min(3).max(15);

const createClientSchema = Joi.object({
    name: name.required(),
    lastname: lastname.required(),
    phone: phone,
    municipio: municipio,
    departamento: departamento,
    country: country,
    address: address,
});

const updateClientSchema = Joi.object({
    name: name,
    lastname: lastname
});

const getClientSchema = Joi.object({
    id: id.required()
});

module.exports = { createClientSchema, updateClientSchema, getClientSchema };