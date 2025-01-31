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
                id: (index + 1),
                clientId: faker.number.int({min: 1, max: 20}),
                paid: faker.datatype.boolean(),
                orderDate: faker.date.past({years: 1}).toISOString().substring(0, 10),
                total: faker.number.int({min: 100, max: 1000}),
                abono: faker.number.int({min: 100, max: 1000}),
            });
        }
    }

    async create(data) {
        const index = this.orders.length - 1;
        const lastId = this.orders[index].id;
        const newOrder = {
            id: lastId + 1,
            ...data
        }
        this.orders.push(newOrder);
        return newOrder;
    }

    find() {
        return this.orders.map(({ id, orderDate, paid, clientId, total, abono }) => ({
            id, orderDate, paid, clientId, total, abono
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
