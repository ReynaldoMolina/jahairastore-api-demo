const Joi = require('joi');

const id = Joi.number().integer();
const company = Joi.string().max(40);
const contact = Joi.string().max(40);
const phone = Joi.string().max(30);
const city = Joi.string().max(40);
const municipio = Joi.string().max(40);
const country = Joi.string().max(40);
const address = Joi.string().max(100);

const createProviderSchema = Joi.object({
    company: company.required(),
    contact: contact.required(),
    phone: phone,
    municipio: municipio,
    city: city,
    country: country,
    address: address,
});

const updateProviderSchema = Joi.object({
    company: company,
    contact: contact,
    phone: phone,
    city: city,
    municipio: municipio,
    country: country,
    address: address
});

const getProviderSchema = Joi.object({
    id: id.required()
});

module.exports = { createProviderSchema, updateProviderSchema, getProviderSchema };
