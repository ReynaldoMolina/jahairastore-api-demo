const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProvidersService {
    constructor() {
        this.providers = [
            {
                id: 1,
                company: "Global Fashion Ltd.",
                contact: "Carlos Méndez",
                phone: "+505 2315 1234",
                city: "Managua",
                municipio: "Managua",
                country: "Nicaragua",
                address: "Avenida Central #123"
            },
            {
                id: 2,
                company: "Elite Textiles Co.",
                contact: "María Fernández",
                phone: "+505 2315 5678",
                city: "León",
                municipio: "León",
                country: "Nicaragua",
                address: "Calle del Comercio #456"
            },
            {
                id: 3,
                company: "Trendy Apparel Inc.",
                contact: "Alejandro Torres",
                phone: "+505 2315 9876",
                city: "Masaya",
                municipio: "Masaya",
                country: "Nicaragua",
                address: "Residencial Las Flores #789"
            },
            {
                id: 4,
                company: "Urban Wear Group",
                contact: "Sofía Ramírez",
                phone: "+505 2315 2468",
                city: "Granada",
                municipio: "Granada",
                country: "Nicaragua",
                address: "Barrio El Carmen #101"
            },
            {
                id: 5,
                company: "Nova Trends SA",
                contact: "Javier López",
                phone: "+505 2315 1357",
                city: "Chinandega",
                municipio: "Chinandega",
                country: "Nicaragua",
                address: "Boulevard Principal #202"
            },
            {
                id: 6,
                company: "Luxury Designs Ltd.",
                contact: "Isabella Rojas",
                phone: "+505 2315 8642",
                city: "Estelí",
                municipio: "Estelí",
                country: "Nicaragua",
                address: "Zona Rosa #303"
            },
            {
                id: 7,
                company: "Vanguardia Fashion",
                contact: "Fernando Gómez",
                phone: "+505 2315 7531",
                city: "Matagalpa",
                municipio: "Matagalpa",
                country: "Nicaragua",
                address: "Centro Comercial #404"
            },
            {
                id: 8,
                company: "Shein Importers",
                contact: "Camila Castillo",
                phone: "+505 2315 9512",
                city: "Jinotega",
                municipio: "Jinotega",
                country: "Nicaragua",
                address: "Calle de los Artesanos #505"
            },
            {
                id: 9,
                company: "Modern Clothing SRL",
                contact: "José Navarro",
                phone: "+505 2315 8524",
                city: "Rivas",
                municipio: "Rivas",
                country: "Nicaragua",
                address: "Urbanización Los Robles #606"
            },
            {
                id: 10,
                company: "Express Fashion Co.",
                contact: "Luciana Ortega",
                phone: "+505 2315 3698",
                city: "Boaco",
                municipio: "Boaco",
                country: "Nicaragua",
                address: "Paseo del Lago #707"
            }
        ];
        // this.generate();
    }

    // generate() {
    //     const limit = 20;
    //     for (let index = 0; index < limit; index++) {
    //         this.providers.push({
    //             id: (index + 1),
    //             company: faker.company.name(),
    //             contact: faker.person.firstName() + ' ' + faker.person.lastName(),
    //             phone: "+505 2315 1234",
    //             city: faker.location.city(),
    //             municipio: faker.location.city(),
    //             country: faker.location.country(),
    //             address: faker.location.streetAddress()
    //         });
    //     }
    // }

    async create(data) {
        const index = this.providers.length - 1;
        const lastId = this.providers[index].id;
        const newProvider = {
            id: lastId + 1,
            ...data
        }
        this.providers.push(newProvider);
        return newProvider;
    }

    find() {
        return this.providers.map(({ id, company, phone }) =>
        ({ id, company, phone }));
    }

    findOne(id) {
        const provider = this.providers.find((provider) => provider.id === id);
        if (!provider) {
            throw boom.notFound('provider not found');
        }
        if (provider.isBlocked) {
            throw boom.conflict('provider is blocked');
        }
        return provider;
    }

    update(id, changes) {
        const index = this.providers.findIndex((provider) => provider.id === id);
        if (index === -1) {
            throw boom.notFound('provider not found');
        }
        const provider = this.providers[index];

        this.providers[index] = {
            ...provider,
            ...changes
        };
        return this.providers[index];
    }

    delete(id) {
        const index = this.providers.findIndex((provider) => provider.id === id);
        if (index === -1) {
            throw boom.notFound('provider not found');
        }
        this.providers.splice(index, 1);
        return { id };
    }
}

module.exports = ProvidersService;
