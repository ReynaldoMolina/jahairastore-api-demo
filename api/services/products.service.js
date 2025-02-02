const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
    constructor() {
        this.products = [
            {
                id: 1,
                sheinId: 457823,
                provider: "Global Fashion Ltd.",
                category: "Shein",
                name: "Elegant Cotton Shirt",
                addedDate: "2024-03-15",
                costPrice: 25,
                sellPrice: 40,
                description: "A stylish and comfortable cotton shirt, perfect for casual and formal occasions."
            },
            {
                id: 2,
                sheinId: 829374,
                provider: "Elite Textiles Co.",
                category: "Útiles escolares",
                name: "Notebook Set",
                addedDate: "2023-09-22",
                costPrice: 10,
                sellPrice: 20,
                description: "Set of high-quality notebooks for school and office use."
            },
            {
                id: 3,
                sheinId: 613482,
                provider: "Trendy Apparel Inc.",
                category: "Ropa",
                name: "Slim Fit Denim Jeans",
                addedDate: "2023-11-10",
                costPrice: 30,
                sellPrice: 50,
                description: "Comfortable and durable slim fit jeans, ideal for everyday wear."
            },
            {
                id: 4,
                sheinId: 278431,
                provider: "Urban Wear Group",
                category: "Zapatos",
                name: "Running Sneakers",
                addedDate: "2023-07-18",
                costPrice: 35,
                sellPrice: 60,
                description: "Lightweight and stylish running sneakers with cushioned support."
            },
            {
                id: 5,
                sheinId: 734529,
                provider: "Nova Trends SA",
                category: "Accesorios",
                name: "Vintage Sunglasses",
                addedDate: "2024-01-05",
                costPrice: 15,
                sellPrice: 35,
                description: "Retro-inspired sunglasses with UV protection and high-quality frames."
            },
            {
                id: 6,
                sheinId: 985613,
                provider: "Luxury Designs Ltd.",
                category: "Bolsos",
                name: "Leather Shoulder Bag",
                addedDate: "2023-08-30",
                costPrice: 45,
                sellPrice: 75,
                description: "Elegant leather shoulder bag with multiple compartments."
            },
            {
                id: 7,
                sheinId: 452678,
                provider: "Vanguardia Fashion",
                category: "Shein",
                name: "Casual Summer Dress",
                addedDate: "2023-12-12",
                costPrice: 20,
                sellPrice: 45,
                description: "A light and airy summer dress made from breathable fabric."
            },
            {
                id: 8,
                sheinId: 317894,
                provider: "Shein Importers",
                category: "Deportes",
                name: "Yoga Mat",
                addedDate: "2023-10-25",
                costPrice: 18,
                sellPrice: 35,
                description: "Non-slip yoga mat with high-density foam for comfort."
            },
            {
                id: 9,
                sheinId: 625849,
                provider: "Modern Clothing SRL",
                category: "Electrónica",
                name: "Wireless Earbuds",
                addedDate: "2024-02-14",
                costPrice: 55,
                sellPrice: 90,
                description: "High-quality wireless earbuds with noise cancellation feature."
            },
            {
                id: 10,
                sheinId: 719453,
                provider: "Express Fashion Co.",
                category: "Shein",
                name: "Athletic Sneakers",
                addedDate: "2023-06-20",
                costPrice: 40,
                sellPrice: 70,
                description: "Lightweight sneakers designed for casual and athletic use."
            },
            {
                id: 11,
                sheinId: 814536,
                provider: "Global Fashion Ltd.",
                category: "Accesorios",
                name: "Leather Wallet",
                addedDate: "2023-07-30",
                costPrice: 20,
                sellPrice: 45,
                description: "Premium leather wallet with multiple card slots."
            },
            {
                id: 12,
                sheinId: 946273,
                provider: "Elite Textiles Co.",
                category: "Ropa",
                name: "Classic Polo Shirt",
                addedDate: "2023-09-15",
                costPrice: 22,
                sellPrice: 40,
                description: "Soft cotton polo shirt, suitable for casual and business settings."
            },
            {
                id: 13,
                sheinId: 624135,
                provider: "Trendy Apparel Inc.",
                category: "Zapatos",
                name: "Formal Leather Shoes",
                addedDate: "2023-11-25",
                costPrice: 50,
                sellPrice: 85,
                description: "Elegant and durable leather shoes for formal occasions."
            },
            {
                id: 14,
                sheinId: 731589,
                provider: "Urban Wear Group",
                category: "Shein",
                name: "Trendy Hoodie",
                addedDate: "2023-10-05",
                costPrice: 28,
                sellPrice: 55,
                description: "Warm and cozy hoodie, designed for both style and comfort."
            },
            {
                id: 15,
                sheinId: 937215,
                provider: "Nova Trends SA",
                category: "Bolsos",
                name: "Canvas Backpack",
                addedDate: "2023-12-20",
                costPrice: 30,
                sellPrice: 50,
                description: "Durable and stylish canvas backpack with multiple compartments."
            },
            {
                id: 16,
                sheinId: 542136,
                provider: "Luxury Designs Ltd.",
                category: "Electrónica",
                name: "Smartwatch",
                addedDate: "2024-01-10",
                costPrice: 65,
                sellPrice: 100,
                description: "Multifunctional smartwatch with heart rate and fitness tracking."
            },
            {
                id: 17,
                sheinId: 624859,
                provider: "Vanguardia Fashion",
                category: "Deportes",
                name: "Fitness Tracker",
                addedDate: "2023-06-25",
                costPrice: 40,
                sellPrice: 75,
                description: "Waterproof fitness tracker with step and sleep monitoring."
            },
            {
                id: 18,
                sheinId: 978462,
                provider: "Shein Importers",
                category: "Útiles escolares",
                name: "Art Supplies Kit",
                addedDate: "2023-11-08",
                costPrice: 18,
                sellPrice: 35,
                description: "Complete art supplies kit with pencils, colors, and brushes."
            },
            {
                id: 19,
                sheinId: 345721,
                provider: "Modern Clothing SRL",
                category: "Zapatos",
                name: "Casual Sneakers",
                addedDate: "2024-02-01",
                costPrice: 38,
                sellPrice: 65,
                description: "Lightweight and durable sneakers for everyday wear."
            },
            {
                id: 20,
                sheinId: 613872,
                provider: "Express Fashion Co.",
                category: "Shein",
                name: "Graphic T-Shirt",
                addedDate: "2023-08-14",
                costPrice: 15,
                sellPrice: 30,
                description: "Comfortable and stylish t-shirt with modern graphic design."
            }
        ];
        // this.generate();
    }

    // generate() {
    //     const limit = 20;
    //     for (let index = 0; index < limit; index++) {
    //         this.products.push({
    //             id: (index + 1),
    //             sheinId: faker.number.int({min: 100000, max: 999999}),
    //             provider: faker.company.name(),
    //             category: "Shein",
    //             name: faker.commerce.productName(),
    //             addedDate: faker.date.past({years: 1}).toISOString().substring(0, 10),
    //             costPrice: faker.number.int({min: 1, max: 100}),
    //             sellPrice: faker.number.int({min: 1, max: 100}),
    //             .int({min: 1, max: 100}),
    //             description: faker.commerce.productDescription(),
    //         });
    //     }
    // }

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
