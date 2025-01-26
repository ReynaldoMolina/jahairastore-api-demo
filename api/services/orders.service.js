const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class OrdersService {
    constructor() {
        this.orders = [];
        this.generate();
    }

    generate() {
        const limit = 20;
        for (let index = 0; index < limit; index++) {
            this.orders.push({
                id: (index + 1).toString(),
                name: faker.person.firstName(),
                total: faker.commerce.price(),
                abono: faker.commerce.price(),
                saldo: faker.commerce.price()
            });
        }
    }

    async create(data) {
        const newOrder = {
            id: faker.number.int({max: 10000}),
            ...data
        }
        this.orders.push(newOrder);
        return newOrder;
    }

    find() {
        return this.orders;
    }

    findOne(id) {
        const order = this.orders.find((order) => order.id === id);
        if (!order) {
            throw boom.notFound('order not found');
        }
        return order;
    }

    update(id, changes) {
        const index = this.orders.findIndex((order) => order.id === id);
        if (index === -1) {
            throw boom.notFound('order not found');
        }
        const order = this.orders[index];

        this.orders[index] = {
            ...order,
            ...changes
        };
        return this.orders[index];
    }

    delete(id) {
        const index = this.orders.findIndex((order) => order.id === id);
        if (index === -1) {
            throw boom.notFound('order not found');
        }
        this.orders.splice(index, 1);
        return { id };
    }
}

module.exports = OrdersService;
