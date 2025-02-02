const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class PurchaseDetailsService {
    constructor() {
        this.purchaseDetail = [
            { id: 1, purchaseId: 5, productId: 12, costPrice: 45, quantity: 2 },
            { id: 2, purchaseId: 8, productId: 7, costPrice: 78, quantity: 1 },
            { id: 3, purchaseId: 3, productId: 19, costPrice: 60, quantity: 3 },
            { id: 4, purchaseId: 12, productId: 5, costPrice: 30, quantity: 4 },
            { id: 5, purchaseId: 15, productId: 2, costPrice: 55, quantity: 1 },
            { id: 6, purchaseId: 1, productId: 17, costPrice: 90, quantity: 5 },
            { id: 7, purchaseId: 18, productId: 10, costPrice: 25, quantity: 2 },
            { id: 8, purchaseId: 9, productId: 14, costPrice: 70, quantity: 3 },
            { id: 9, purchaseId: 14, productId: 6, costPrice: 40, quantity: 1 },
            { id: 10, purchaseId: 20, productId: 3, costPrice: 85, quantity: 4 },
            { id: 11, purchaseId: 7, productId: 15, costPrice: 33, quantity: 2 },
            { id: 12, purchaseId: 11, productId: 9, costPrice: 66, quantity: 5 },
            { id: 13, purchaseId: 6, productId: 1, costPrice: 99, quantity: 1 },
            { id: 14, purchaseId: 16, productId: 8, costPrice: 42, quantity: 3 },
            { id: 15, purchaseId: 2, productId: 18, costPrice: 60, quantity: 2 },
            { id: 16, purchaseId: 19, productId: 13, costPrice: 28, quantity: 1 },
            { id: 17, purchaseId: 4, productId: 16, costPrice: 75, quantity: 5 },
            { id: 18, purchaseId: 10, productId: 11, costPrice: 50, quantity: 2 },
            { id: 19, purchaseId: 17, productId: 4, costPrice: 80, quantity: 3 },
            { id: 20, purchaseId: 13, productId: 20, costPrice: 95, quantity: 4 }
        ];        
        // this.generate();
    }

    // generate() {
    //     const limit = 20;
    //     for (let index = 0; index < limit; index++) {
    //         this.purchaseDetail.push(
    //             {
    //                 id: (index + 1),
    //                 purchaseId: faker.number.int({min: 1, max: 20}),
    //                 productId: faker.number.int({min: 1, max: 20}),
    //                 costPrice: faker.number.int({min: 1, max: 100}),
    //                 quantity: faker.number.int({min: 1, max: 5}),
    //             }
    //         );
    //     }
    // }

    async create(data) {
        const index = this.purchaseDetail.length - 1;
        const lastId = this.purchaseDetail[index].id;
        const newPurchaseDetail = {
            id: lastId + 1,
            ...data
        }
        this.purchaseDetail.push(newPurchaseDetail);
        return newPurchaseDetail;
    }

    find() {
        return this.purchaseDetail.map(({ id, purchaseId, productId, costPrice, quantity }) => ({
            id, purchaseId, productId, costPrice, quantity
        }));
    }

    findOrder(id) {
        const purchaseDetail = this.purchaseDetail.filter((detail) => detail.purchaseId == id);
        if (!purchaseDetail) {
            throw boom.notFound('purchaseDetail not found');
        }
        return purchaseDetail;
    }

    update(id, changes) {
        const index = this.purchaseDetail.findIndex((purchaseDetail) => purchaseDetail.id === id);
        if (index === -1) {
            throw boom.notFound('purchaseDetail not found');
        }
        const purchaseDetail = this.purchaseDetail[index];

        this.purchaseDetail[index] = {
            ...purchaseDetail,
            ...changes
        };
        return this.purchaseDetail[index];
    }

    delete(id) {
        const index = this.purchaseDetail.findIndex((purchaseDetail) => purchaseDetail.id === id);
        if (index === -1) {
            throw boom.notFound('purchaseDetail not found');
        }
        this.purchaseDetail.splice(index, 1);
        return { id };
    }
}

module.exports = PurchaseDetailsService;
