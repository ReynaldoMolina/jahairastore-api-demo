const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class OrderDetailsService {
    constructor() {
        this.orderDetail = [];
        this.generate();
    }

    generate() {
        const limit = 20;
        for (let index = 0; index < limit; index++) {
            this.orderDetail.push(
                {
                    id: (index + 1),
                    orderId: faker.number.int({min: 1, max: 20}),
                    productId: faker.number.int({min: 1, max: 20}),
                    sellPrice: faker.number.int({min: 1, max: 100}),
                    quantity: faker.number.int({min: 1, max: 5}),
                }
            );
        }
    }

    async create(data) {
        const index = this.orderDetail.length - 1;
        const lastId = this.orderDetail[index].id;
        const newOrderDetail = {
            id: lastId + 1,
            ...data
        }
        this.orderDetail.push(newOrderDetail);
        return newOrderDetail;
    }

    find() {
        return this.orderDetail.map(({ id, orderId, productId, sellPrice, quantity }) => ({
            id, orderId, productId, sellPrice, quantity
        }));
    }

    findOrder(id) {
        const orderDetail = this.orderDetail.filter((detail) => detail.orderId == id);
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
