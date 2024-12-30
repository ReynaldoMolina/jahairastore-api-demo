const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ClientsService {
    constructor() {
        this.clients = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.clients.push({
                id: (index + 1).toString(),
                name: faker.person.firstName(),
                lastname: faker.person.lastName(),
                phone: "+505 1234 5678",
                municipio: faker.location.city(),
                departamento: faker.location.city(),
                country: faker.location.country(),
                address: faker.location.streetAddress()
            });
        }
    }

    async create(data) {
        const newClient = {
            id: faker.number.int(),
            ...data
        }
        this.clients.push(newClient);
        return newClient;
    }

    find() {
        return this.clients;
    }

    findOne(id) {
        const client = this.clients.find((client) => client.id === id);
        if (!client) {
            throw boom.notFound('client not found');
        }
        if (client.isBlocked) {
            throw boom.conflict('client is blocked');
        }
        return client;
    }

    update(id, changes) {
        const index = this.clients.findIndex((client) => client.id === id);
        if (index === -1) {
            throw boom.notFound('client not found');
        }
        const client = this.clients[index];

        this.clients[index] = {
            ...client,
            ...changes
        };
        return this.clients[index];
    }

    delete(id) {
        const index = this.clients.findIndex((client) => client.id === id);
        if (index === -1) {
            throw boom.notFound('client not found');
        }
        this.clients.splice(index, 1);
        return { id };
    }
}

module.exports = ClientsService;