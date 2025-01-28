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
                clientId: faker.number.int({min: 1, max: 20}),
                delivered: faker.datatype.boolean(),
                // orderDate: faker.date.past({years: 1}).toLocaleDateString('es-NI'),
                orderDate: faker.date.past({years: 1}).toISOString().substring(0, 10),
                total: faker.commerce.price(),
                abono: faker.commerce.price(),
                saldo: faker.commerce.price()
            });
        }
    }

    async create(data) {
        const newOrder = {
            id: faker.number.int({min:21, max: 100}).toString(),
            ...data
        }
        this.orders.push(newOrder);
        return newOrder;
    }

    find() {
        return this.orders.map(({ id, orderDate, clientId, total, abono, saldo }) => ({
            id, orderDate, clientId, total, abono, saldo
        }));
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
