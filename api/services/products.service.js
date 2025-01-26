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
                id: (index + 1).toString(),
                sheinId: faker.number.int({max: 1000000}),
                provider: faker.company.name(),
                category: "Shein",
                name: faker.commerce.productName(),
                addedDate: faker.date.past({years: 1}).toISOString().substring(0, 10),
                costPrice: faker.commerce.price(),
                sellPrice: faker.commerce.price(),
                profit: faker.commerce.price(),
                description: faker.commerce.productDescription(),
            });
        }
    }

    async create(data) {
        const newProduct = {
            id: faker.number.int({max: 10000}),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    /*find() {
        return this.products;
    }*/

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
