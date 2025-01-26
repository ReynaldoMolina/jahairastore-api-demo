const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class OrderDetailsService {
    constructor() {
        this.orderDetail = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            this.orderDetail.push(
                {
                    id: (index + 1).toString(),
                    orderId: faker.number.int({min: 0, max: 20}),
                    productId: faker.number.int({min: 0, max: 20}),
                    productName: faker.commerce.productName(),
                    sellPrice: faker.commerce.price(),
                    quantity: faker.number.int({min: 1, max: 5}),
                },
                {
                    id: (index + 1),
                    orderId: faker.number.int({min: 0, max: 20}),
                    productId: faker.number.int({min: 0, max: 20}),
                    productName: faker.commerce.productName(),
                    sellPrice: faker.commerce.price(),
                    quantity: faker.number.int({min: 1, max: 5}),
                }
            );
        }
    }

    async create(data) {
        const newOrderDetail = {
            id: faker.number.int({max: 1000}).toString(),
            ...data
        }
        this.orderDetail.push(newOrderDetail);
        return newOrderDetail;
    }

    find() {
        return this.orderDetail.map(({ id, productId, productName, clientId, sellPrice, quantity }) => ({
            id, productId, productName, clientId, sellPrice, quantity
        }));
    }

    findOne(id) {
        const orderDetail = this.orderDetail.find((orderDetail) => orderDetail.id === id);
        if (!orderDetail) {
            throw boom.notFound('orderDetail not found');
        }
        return orderDetail;
    }

    update(id, changes) {
        const index = this.orderDetail.findIndex((orderDetail) => orderDetail.id === id);
        if (index === -1) {
            throw boom.notFound('orderDetail not found');
        }
        const orderDetail = this.orderDetail[index];

        this.orderDetail[index] = {
            ...orderDetail,
            ...changes
        };
        return this.orderDetail[index];
    }

    delete(id) {
        const index = this.orderDetail.findIndex((orderDetail) => orderDetail.id === id);
        if (index === -1) {
            throw boom.notFound('orderDetail not found');
        }
        this.orderDetail.splice(index, 1);
        return { id };
    }
}

module.exports = OrderDetailsService;
