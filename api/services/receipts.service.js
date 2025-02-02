const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ReceiptsService {
    constructor() {
        this.receipts = [
            { id: 1, orderId: 12, clientId: 5, receiptDate: '2024-01-15', abono: 100, concepto: 'Pago inicial' },
            { id: 2, orderId: 7, clientId: 3, receiptDate: '2024-02-20', abono: 200, concepto: 'Abono parcial' },
            { id: 3, orderId: 15, clientId: 8, receiptDate: '2023-12-05', abono: 150, concepto: 'Pago a cuenta' },
            { id: 4, orderId: 4, clientId: 12, receiptDate: '2023-11-18', abono: 80, concepto: 'Adelanto de pago' },
            { id: 5, orderId: 19, clientId: 7, receiptDate: '2024-03-01', abono: 300, concepto: 'Depósito inicial' },
            { id: 6, orderId: 2, clientId: 14, receiptDate: '2023-10-30', abono: 50, concepto: 'Pago parcial' },
            { id: 7, orderId: 17, clientId: 9, receiptDate: '2023-09-25', abono: 120, concepto: 'Abono de saldo' },
            { id: 8, orderId: 8, clientId: 1, receiptDate: '2024-01-10', abono: 200, concepto: 'Pago adelantado' },
            { id: 9, orderId: 10, clientId: 6, receiptDate: '2023-08-12', abono: 75, concepto: 'Pago inicial' },
            { id: 10, orderId: 3, clientId: 11, receiptDate: '2024-02-05', abono: 180, concepto: 'Abono pendiente' },
            { id: 11, orderId: 14, clientId: 2, receiptDate: '2023-07-15', abono: 250, concepto: 'Depósito parcial' },
            { id: 12, orderId: 5, clientId: 16, receiptDate: '2023-12-20', abono: 90, concepto: 'Primer abono' },
            { id: 13, orderId: 9, clientId: 4, receiptDate: '2023-11-10', abono: 110, concepto: 'Pago programado' },
            { id: 14, orderId: 6, clientId: 18, receiptDate: '2023-10-05', abono: 130, concepto: 'Abono a cuenta' },
            { id: 15, orderId: 13, clientId: 10, receiptDate: '2023-09-28', abono: 50, concepto: 'Pago de saldo' },
            { id: 16, orderId: 20, clientId: 15, receiptDate: '2024-03-15', abono: 160, concepto: 'Pago parcial' },
            { id: 17, orderId: 1, clientId: 13, receiptDate: '2023-08-20', abono: 300, concepto: 'Liquidación parcial' },
            { id: 18, orderId: 11, clientId: 17, receiptDate: '2023-07-30', abono: 220, concepto: 'Primer pago' },
            { id: 19, orderId: 16, clientId: 20, receiptDate: '2024-02-12', abono: 140, concepto: 'Abono de factura' },
            { id: 20, orderId: 18, clientId: 19, receiptDate: '2023-06-25', abono: 90, concepto: 'Pago registrado' }      
        ];        
    }

    async create(data) {
        const index = this.receipts.length - 1;
        const lastId = this.receipts[index].id;
        const newReceipt = {
            id: lastId + 1,
            ...data
        }
        this.receipts.push(newReceipt);
        return newReceipt;
    }

    find() {
        return this.receipts;
    }

    findOne(id) {
        const receipt = this.receipts.find((receipt) => receipt.id === id);
        if (!receipt) {
            throw boom.notFound('receipt not found');
        }
        if (receipt.isBlocked) {
            throw boom.conflict('receipt is blocked');
        }
        return receipt;
    }

    update(id, changes) {
        const index = this.receipts.findIndex((receipt) => receipt.id === id);
        if (index === -1) {
            throw boom.notFound('receipt not found');
        }
        const receipt = this.receipts[index];

        this.receipts[index] = {
            ...receipt,
            ...changes
        };
        return this.receipts[index];
    }

    delete(id) {
        const index = this.receipts.findIndex((receipt) => receipt.id === id);
        if (index === -1) {
            throw boom.notFound('receipt not found');
        }
        this.receipts.splice(index, 1);
        return { id };
    }
}

module.exports = ReceiptsService;
