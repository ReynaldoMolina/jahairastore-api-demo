const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class OrdersService {
    constructor() {
        this.orders = [
            { id: 1, clientId: 5, paid: false, orderDate: "2023-06-14", total: 750, abono: 300 },
            { id: 2, clientId: 12, paid: true, orderDate: "2023-09-21", total: 540, abono: 540 },
            { id: 3, clientId: 7, paid: false, orderDate: "2023-07-30", total: 620, abono: 200 },
            { id: 4, clientId: 15, paid: false, orderDate: "2024-01-05", total: 890, abono: 400 },
            { id: 5, clientId: 2, paid: true, orderDate: "2023-08-10", total: 430, abono: 430 },
            { id: 6, clientId: 19, paid: false, orderDate: "2023-12-25", total: 710, abono: 250 },
            { id: 7, clientId: 8, paid: true, orderDate: "2023-10-18", total: 500, abono: 500 },
            { id: 8, clientId: 3, paid: false, orderDate: "2023-11-09", total: 920, abono: 0 },
            { id: 9, clientId: 16, paid: false, orderDate: "2023-07-12", total: 650, abono: 320 },
            { id: 10, clientId: 10, paid: true, orderDate: "2023-09-27", total: 800, abono: 800 },
            { id: 11, clientId: 1, paid: false, orderDate: "2023-08-05", total: 570, abono: 100 },
            { id: 12, clientId: 18, paid: false, orderDate: "2023-12-03", total: 780, abono: 200 },
            { id: 13, clientId: 6, paid: true, orderDate: "2023-10-21", total: 620, abono: 620 },
            { id: 14, clientId: 20, paid: false, orderDate: "2023-11-15", total: 890, abono: 450 },
            { id: 15, clientId: 4, paid: false, orderDate: "2023-07-29", total: 740, abono: 300 },
            { id: 16, clientId: 14, paid: true, orderDate: "2023-06-20", total: 500, abono: 500 },
            { id: 17, clientId: 9, paid: false, orderDate: "2023-12-19", total: 970, abono: 150 },
            { id: 18, clientId: 17, paid: false, orderDate: "2023-09-11", total: 630, abono: 400 },
            { id: 19, clientId: 11, paid: true, orderDate: "2023-08-31", total: 850, abono: 850 },
            { id: 20, clientId: 13, paid: false, orderDate: "2023-10-07", total: 720, abono: 500 }
        ];
        // this.generate();
    }

    // generate() {
    //     const limit = 20;
    //     for (let index = 0; index < limit; index++) {
    //         this.orders.push({
    //             id: (index + 1),
    //             clientId: faker.number.int({min: 1, max: 20}),
    //             paid: faker.datatype.boolean(),
    //             orderDate: faker.date.past({years: 1}).toISOString().substring(0, 10),
    //             total: faker.number.int({min: 100, max: 1000}),
    //             abono: faker.number.int({min: 100, max: 1000}),
    //         });
    //     }
    // }

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
