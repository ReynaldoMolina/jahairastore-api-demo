const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class OrderDetailsService {
    constructor() {
        this.orderDetail = [
            { id: 1, orderId: 5, productId: 12, sellPrice: 45, quantity: 2 },
            { id: 2, orderId: 8, productId: 7, sellPrice: 78, quantity: 1 },
            { id: 3, orderId: 3, productId: 19, sellPrice: 60, quantity: 3 },
            { id: 4, orderId: 12, productId: 5, sellPrice: 30, quantity: 4 },
            { id: 5, orderId: 15, productId: 2, sellPrice: 55, quantity: 1 },
            { id: 6, orderId: 1, productId: 17, sellPrice: 90, quantity: 5 },
            { id: 7, orderId: 18, productId: 10, sellPrice: 25, quantity: 2 },
            { id: 8, orderId: 9, productId: 14, sellPrice: 70, quantity: 3 },
            { id: 9, orderId: 14, productId: 6, sellPrice: 40, quantity: 1 },
            { id: 10, orderId: 20, productId: 3, sellPrice: 85, quantity: 4 },
            { id: 11, orderId: 7, productId: 15, sellPrice: 33, quantity: 2 },
            { id: 12, orderId: 11, productId: 9, sellPrice: 66, quantity: 5 },
            { id: 13, orderId: 6, productId: 1, sellPrice: 99, quantity: 1 },
            { id: 14, orderId: 16, productId: 8, sellPrice: 42, quantity: 3 },
            { id: 15, orderId: 2, productId: 18, sellPrice: 60, quantity: 2 },
            { id: 16, orderId: 19, productId: 13, sellPrice: 28, quantity: 1 },
            { id: 17, orderId: 4, productId: 16, sellPrice: 75, quantity: 5 },
            { id: 18, orderId: 10, productId: 11, sellPrice: 50, quantity: 2 },
            { id: 19, orderId: 17, productId: 4, sellPrice: 80, quantity: 3 },
            { id: 20, orderId: 13, productId: 20, sellPrice: 95, quantity: 4 }
        ];        
        // this.generate();
    }

    // generate() {
    //     const limit = 20;
    //     for (let index = 0; index < limit; index++) {
    //         this.orderDetail.push(
    //             {
    //                 id: (index + 1),
    //                 orderId: faker.number.int({min: 1, max: 20}),
    //                 productId: faker.number.int({min: 1, max: 20}),
    //                 sellPrice: faker.number.int({min: 1, max: 100}),
    //                 quantity: faker.number.int({min: 1, max: 5}),
    //             }
    //         );
    //     }
    // }

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
