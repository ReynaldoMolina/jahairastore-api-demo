const { faker } = require('@faker-js/faker');

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
                name: faker.person.fullName(),
                gender: faker.person.sex()
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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.clients);
            }, 5000);
        });
    }

    findOne(id) {
        return this.clients.find((client) => client.id === id);
    }

    update(id, changes) {
        const index = this.clients.findIndex((client) => client.id === id);
        if (index === -1) {
            throw new Error('register not found');
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
            throw new Error('register not found');
        }
        this.clients.splice(index, 1);
        return { id };
    }
}

module.exports = ClientsService;