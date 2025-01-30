const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 20;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: (index + 1),
                sheinId: faker.number.int({min: 100000, max: 999999}),
                provider: faker.company.name(),
                category: "Shein",
                name: faker.commerce.productName(),
                addedDate: faker.date.past({years: 1}).toISOString().substring(0, 10),
                costPrice: faker.number.int({min: 1, max: 100}),
                sellPrice: faker.number.int({min: 1, max: 100}),
                profit: faker.number.int({min: 1, max: 100}),
                description: faker.commerce.productDescription(),
            });
        }
    }

    async create(data) {
        const index = this.products.length - 1;
        const lastId = this.products[index].id;
        const newProduct = {
            id: lastId + 1,
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        return this.products.map(({ id, name, costPrice, sellPrice }) => ({
            id,
            name,
            costPrice,
            sellPrice
        }));
    }

    findOne(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            throw boom.notFound('product not found');
        }
        if (product.isBlocked) {
            throw boom.conflict('product is blocked');
        }
        return product;
    }

    update(id, changes) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        const product = this.products[index];

        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    delete(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = ProductsService;
