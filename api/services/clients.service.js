const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ClientsService {
    constructor() {
        this.clients = [
            {
                id: 1,
                name: "Lucas",
                lastname: "Ramírez",
                phone: "+505 1234 5678",
                municipio: "León",
                departamento: "León",
                country: "Nicaragua",
                address: "Calle Central, #123"
            },
            {
                id: 2,
                name: "Sofía",
                lastname: "González",
                phone: "+505 9876 5432",
                municipio: "Granada",
                departamento: "Granada",
                country: "Nicaragua",
                address: "Avenida Bolívar, #456"
            },
            {
                id: 3,
                name: "Mateo",
                lastname: "Fernández",
                phone: "+505 8765 4321",
                municipio: "Masaya",
                departamento: "Masaya",
                country: "Nicaragua",
                address: "Barrio El Carmen, #789"
            },
            {
                id: 4,
                name: "Valentina",
                lastname: "Martínez",
                phone: "+505 7654 3210",
                municipio: "Chinandega",
                departamento: "Chinandega",
                country: "Nicaragua",
                address: "Calle de los Poetas, #101"
            },
            {
                id: 5,
                name: "Diego",
                lastname: "López",
                phone: "+505 6543 2109",
                municipio: "Estelí",
                departamento: "Estelí",
                country: "Nicaragua",
                address: "Colonia Universitaria, #202"
            },
            {
                id: 6,
                name: "Camila",
                lastname: "Hernández",
                phone: "+505 5432 1098",
                municipio: "Matagalpa",
                departamento: "Matagalpa",
                country: "Nicaragua",
                address: "Zona Rosa, #303"
            },
            {
                id: 7,
                name: "Alejandro",
                lastname: "Pérez",
                phone: "+505 4321 0987",
                municipio: "Jinotega",
                departamento: "Jinotega",
                country: "Nicaragua",
                address: "Calle Principal, #404"
            },
            {
                id: 8,
                name: "Isabella",
                lastname: "Castillo",
                phone: "+505 3210 9876",
                municipio: "Boaco",
                departamento: "Boaco",
                country: "Nicaragua",
                address: "Residencial San José, #505"
            },
            {
                id: 9,
                name: "Emiliano",
                lastname: "Rojas",
                phone: "+505 2109 8765",
                municipio: "Rivas",
                departamento: "Rivas",
                country: "Nicaragua",
                address: "Barrio La Esperanza, #606"
            },
            {
                id: 10,
                name: "Regina",
                lastname: "Gómez",
                phone: "+505 1098 7654",
                municipio: "San Juan del Sur",
                departamento: "Rivas",
                country: "Nicaragua",
                address: "Paseo del Mar, #707"
            },
            {
                id: 11,
                name: "Fernando",
                lastname: "Cordero",
                phone: "+505 9987 6543",
                municipio: "Somoto",
                departamento: "Madriz",
                country: "Nicaragua",
                address: "Centro Histórico, #808"
            },
            {
                id: 12,
                name: "Luciana",
                lastname: "Vega",
                phone: "+505 8876 5432",
                municipio: "Ocotal",
                departamento: "Nueva Segovia",
                country: "Nicaragua",
                address: "Zona Comercial, #909"
            },
            {
                id: 13,
                name: "David",
                lastname: "Jiménez",
                phone: "+505 7765 4321",
                municipio: "Bluefields",
                departamento: "RAAS",
                country: "Nicaragua",
                address: "Barrio Costero, #1010"
            },
            {
                id: 14,
                name: "Victoria",
                lastname: "Mendoza",
                phone: "+505 6654 3210",
                municipio: "Puerto Cabezas",
                departamento: "RAAN",
                country: "Nicaragua",
                address: "Avenida Central, #1111"
            },
            {
                id: 15,
                name: "Leonardo",
                lastname: "Silva",
                phone: "+505 5543 2109",
                municipio: "El Rama",
                departamento: "RAAS",
                country: "Nicaragua",
                address: "Calle del Comercio, #1212"
            },
            {
                id: 16,
                name: "Ana",
                lastname: "Torres",
                phone: "+505 4432 1098",
                municipio: "Juigalpa",
                departamento: "Chontales",
                country: "Nicaragua",
                address: "Zona Norte, #1313"
            },
            {
                id: 17,
                name: "José",
                lastname: "Navarro",
                phone: "+505 3321 0987",
                municipio: "San Carlos",
                departamento: "Río San Juan",
                country: "Nicaragua",
                address: "Residencial Los Robles, #1414"
            },
            {
                id: 18,
                name: "María",
                lastname: "Díaz",
                phone: "+505 2210 9876",
                municipio: "Corn Island",
                departamento: "RAAS",
                country: "Nicaragua",
                address: "Playa Blanca, #1515"
            },
            {
                id: 19,
                name: "Cristian",
                lastname: "Ortega",
                phone: "+505 1109 8765",
                municipio: "La Libertad",
                departamento: "Chontales",
                country: "Nicaragua",
                address: "Calle del Centro, #1616"
            },
            {
                id: 20,
                name: "Gabriela",
                lastname: "Suárez",
                phone: "+505 0098 7654",
                municipio: "San Rafael del Norte",
                departamento: "Jinotega",
                country: "Nicaragua",
                address: "Barrio Los Pinos, #1717"
            }
        ];
        // this.generate();
    }

    // generate() {
    //     const limit = 20;
    //     for (let index = 0; index < limit; index++) {
    //         this.clients.push({
    //             id: (index + 1),
    //             name: faker.person.firstName(),
    //             lastname: faker.person.lastName(),
    //             phone: "+505 1234 5678",
    //             municipio: faker.location.city(),
    //             departamento: faker.location.city(),
    //             country: faker.location.country(),
    //             address: faker.location.streetAddress()
    //         });
    //     }
    // }

    async create(data) {
        const index = this.clients.length - 1;
        const lastId = this.clients[index].id;
        const newClient = {
            id: lastId + 1,
            ...data
        }
        this.clients.push(newClient);
        return newClient;
    }

    find() {
        return this.clients.map(({ id, name, lastname, phone }) => ({
            id, name, lastname, phone
        }));
    }

    findOne(id) {
        const client = this.clients.find((client) => client.id === id);
        if (!client) {
            throw boom.notFound('client not found');
        }
        if (client.isBlocked) {
            throw boom.conflict('client is blocked');
        }
        return client;
    }

    update(id, changes) {
        const index = this.clients.findIndex((client) => client.id === id);
        if (index === -1) {
            throw boom.notFound('client not found');
        }
        const client = this.clients[index];

        this.clients[index] = {
            ...client,
            ...changes
        };
        return this.clients[index];
    }

    delete(id) {
        const index = this.clients.findIndex((client) => client.id === id);
        if (index === -1) {
            throw boom.notFound('client not found');
        }
        this.clients.splice(index, 1);
        return { id };
    }
}

module.exports = ClientsService;
