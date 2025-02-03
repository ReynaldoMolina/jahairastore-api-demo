const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(40);
const lastname = Joi.string().max(40);
const phone = Joi.string().max(30);
const municipio = Joi.string().max(40);
const departamento = Joi.string().max(40);
const country = Joi.string().max(40);
const address = Joi.string().max(100);

const createClientSchema = Joi.object({
    name: name.required(),
    lastname: lastname.required(),
    phone: phone.allow(''),
    municipio: municipio.allow(''),
    departamento: departamento.allow(''),
    country: country.allow(''),
    address: address.allow(''),
});

const updateClientSchema = Joi.object({
    name: name,
    lastname: lastname,
    phone: phone.allow(''),
    municipio: municipio.allow(''),
    departamento: departamento.allow(''),
    country: country.allow(''),
    address: address.allow('')
});

const getClientSchema = Joi.object({
    id: id.required()
});

module.exports = { createClientSchema, updateClientSchema, getClientSchema };
