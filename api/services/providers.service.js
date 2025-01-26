const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProvidersService {
    constructor() {
        this.providers = [];
        this.generate();
    }

    generate() {
        const limit = 20;
        for (let index = 0; index < limit; index++) {
            this.providers.push({
                id: (index + 1).toString(),
                company: faker.company.name(),
                contact: faker.person.firstName() + ' ' + faker.person.lastName(),
                phone: "+505 2315 1234",
                city: faker.location.city(),
                municipio: faker.location.city(),
                country: faker.location.country(),
                address: faker.location.streetAddress()
            });
        }
    }

    async create(data) {
        const newProvider = {
            id: faker.number.int({max: 10000}).toString(),
            ...data
        }
        this.providers.push(newProvider);
        return newProvider;
    }

    find() {
        return this.providers;
    }

    findOne(id) {
        const provider = this.providers.find((provider) => provider.id === id);
        if (!provider) {
            throw boom.notFound('provider not found');
        }
        if (provider.isBlocked) {
            throw boom.conflict('provider is blocked');
        }
        return provider;
    }

    update(id, changes) {
        const index = this.providers.findIndex((provider) => provider.id === id);
        if (index === -1) {
            throw boom.notFound('provider not found');
        }
        const provider = this.providers[index];

        this.providers[index] = {
            ...provider,
            ...changes
        };
        return this.providers[index];
    }

    delete(id) {
        const index = this.providers.findIndex((provider) => provider.id === id);
        if (index === -1) {
            throw boom.notFound('provider not found');
        }
        this.providers.splice(index, 1);
        return { id };
    }
}

module.exports = ProvidersService;
