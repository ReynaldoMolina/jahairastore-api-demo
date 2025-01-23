const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CategoriesService {
    constructor() {
        this.categories = [
            {
                id: "1",
                name: "Clothes"
            },
            {
                id: "2",
                name: "Shein"
            },
        ];
        // this.generate();
    }

    // generate() {
    //     const limit = 10;
    //     for (let index = 0; index < limit; index++) {
    //         this.categories.push({
    //             id: (index + 1).toString(),
    //             name: faker.,
    //         });
    //     }
    // }

    async create(data) {
        const newCategory = {
            id: faker.number.int({max:10000}),
            ...data
        }
        this.categories.push(newCategory);
        return newCategory;
    }

    find() {
        return this.categories;
    }

    findOne(id) {
        const category = this.categories.find((category) => category.id === id);
        if (!category) {
            throw boom.notFound('category not found');
        }
        if (category.isBlocked) {
            throw boom.conflict('category is blocked');
        }
        return category;
    }

    update(id, changes) {
        const index = this.categories.findIndex((category) => category.id === id);
        if (index === -1) {
            throw boom.notFound('category not found');
        }
        const category = this.categories[index];

        this.categories[index] = {
            ...category,
            ...changes
        };
        return this.categories[index];
    }

    delete(id) {
        const index = this.categories.findIndex((category) => category.id === id);
        if (index === -1) {
            throw boom.notFound('category not found');
        }
        this.categories.splice(index, 1);
        return { id };
    }
}

module.exports = CategoriesService;
