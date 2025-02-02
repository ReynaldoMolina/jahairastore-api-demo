const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class PurchasesService {
    constructor() {
        this.purchases = [
            { id: 1, providerId: 5, paid: false, purchaseDate: "2023-06-14", total: 750, abono: 300 },
            { id: 2, providerId: 12, paid: true, purchaseDate: "2023-09-21", total: 540, abono: 540 },
            { id: 3, providerId: 7, paid: false, purchaseDate: "2023-07-30", total: 620, abono: 200 },
            { id: 4, providerId: 15, paid: false, purchaseDate: "2024-01-05", total: 890, abono: 400 },
            { id: 5, providerId: 2, paid: true, purchaseDate: "2023-08-10", total: 430, abono: 430 },
            { id: 6, providerId: 19, paid: false, purchaseDate: "2023-12-25", total: 710, abono: 250 },
            { id: 7, providerId: 8, paid: true, purchaseDate: "2023-10-18", total: 500, abono: 500 },
            { id: 8, providerId: 3, paid: false, purchaseDate: "2023-11-09", total: 920, abono: 0 },
            { id: 9, providerId: 16, paid: false, purchaseDate: "2023-07-12", total: 650, abono: 320 },
            { id: 10, providerId: 10, paid: true, purchaseDate: "2023-09-27", total: 800, abono: 800 },
            { id: 11, providerId: 1, paid: false, purchaseDate: "2023-08-05", total: 570, abono: 100 },
            { id: 12, providerId: 18, paid: false, purchaseDate: "2023-12-03", total: 780, abono: 200 },
            { id: 13, providerId: 6, paid: true, purchaseDate: "2023-10-21", total: 620, abono: 620 },
            { id: 14, providerId: 20, paid: false, purchaseDate: "2023-11-15", total: 890, abono: 450 },
            { id: 15, providerId: 4, paid: false, purchaseDate: "2023-07-29", total: 740, abono: 300 },
            { id: 16, providerId: 14, paid: true, purchaseDate: "2023-06-20", total: 500, abono: 500 },
            { id: 17, providerId: 9, paid: false, purchaseDate: "2023-12-19", total: 970, abono: 150 },
            { id: 18, providerId: 17, paid: false, purchaseDate: "2023-09-11", total: 630, abono: 400 },
            { id: 19, providerId: 11, paid: true, purchaseDate: "2023-08-31", total: 850, abono: 850 },
            { id: 20, providerId: 13, paid: false, purchaseDate: "2023-10-07", total: 720, abono: 500 }
        ];
        // this.generate();
    }

    // generate() {
    //     const limit = 20;
    //     for (let index = 0; index < limit; index++) {
    //         this.purchases.push({
    //             id: (index + 1),
    //             providerId: faker.number.int({min: 1, max: 20}),
    //             paid: faker.datatype.boolean(),
    //             purchaseDate: faker.date.past({years: 1}).toISOString().substring(0, 10),
    //             total: faker.number.int({min: 100, max: 1000}),
    //             abono: faker.number.int({min: 100, max: 1000}),
    //         });
    //     }
    // }

    async create(data) {
        const index = this.purchases.length - 1;
        const lastId = this.purchases[index].id;
        const newPurchase = {
            id: lastId + 1,
            ...data
        }
        this.purchases.push(newPurchase);
        return newPurchase;
    }

    find() {
        return this.purchases.map(({ id, purchaseDate, paid, providerId, total, abono }) => ({
            id, purchaseDate, paid, providerId, total, abono
        }));
    }

    findOne(id) {
        const purchase = this.purchases.find((purchase) => purchase.id === id);
        if (!purchase) {
            throw boom.notFound('purchase not found');
        }
        return purchase;
    }

    update(id, changes) {
        const index = this.purchases.findIndex((purchase) => purchase.id === id);
        if (index === -1) {
            throw boom.notFound('purchase not found');
        }
        const purchase = this.purchases[index];

        this.purchases[index] = {
            ...purchase,
            ...changes
        };
        return this.purchases[index];
    }

    delete(id) {
        const index = this.purchases.findIndex((purchase) => purchase.id === id);
        if (index === -1) {
            throw boom.notFound('purchase not found');
        }
        this.purchases.splice(index, 1);
        return { id };
    }
}

module.exports = PurchasesService;
