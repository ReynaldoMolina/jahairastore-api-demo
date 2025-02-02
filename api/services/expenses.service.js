const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ReceiptsService {
    constructor() {
        this.expenses = [
            { id: 1, purchaseId: 12, providerId: 5, expenseDate: '2024-01-15', abono: 100, concepto: 'Pago inicial' },
            { id: 2, purchaseId: 7, providerId: 3, expenseDate: '2024-02-20', abono: 200, concepto: 'Abono parcial' },
            { id: 3, purchaseId: 15, providerId: 8, expenseDate: '2023-12-05', abono: 150, concepto: 'Pago a cuenta' },
            { id: 4, purchaseId: 4, providerId: 12, expenseDate: '2023-11-18', abono: 80, concepto: 'Adelanto de pago' },
            { id: 5, purchaseId: 19, providerId: 7, expenseDate: '2024-03-01', abono: 300, concepto: 'Depósito inicial' },
            { id: 6, purchaseId: 2, providerId: 14, expenseDate: '2023-10-30', abono: 50, concepto: 'Pago parcial' },
            { id: 7, purchaseId: 17, providerId: 9, expenseDate: '2023-09-25', abono: 120, concepto: 'Abono de saldo' },
            { id: 8, purchaseId: 8, providerId: 1, expenseDate: '2024-01-10', abono: 200, concepto: 'Pago adelantado' },
            { id: 9, purchaseId: 10, providerId: 6, expenseDate: '2023-08-12', abono: 75, concepto: 'Pago inicial' },
            { id: 10, purchaseId: 3, providerId: 11, expenseDate: '2024-02-05', abono: 180, concepto: 'Abono pendiente' },
            { id: 11, purchaseId: 14, providerId: 2, expenseDate: '2023-07-15', abono: 250, concepto: 'Depósito parcial' },
            { id: 12, purchaseId: 5, providerId: 16, expenseDate: '2023-12-20', abono: 90, concepto: 'Primer abono' },
            { id: 13, purchaseId: 9, providerId: 4, expenseDate: '2023-11-10', abono: 110, concepto: 'Pago programado' },
            { id: 14, purchaseId: 6, providerId: 18, expenseDate: '2023-10-05', abono: 130, concepto: 'Abono a cuenta' },
            { id: 15, purchaseId: 13, providerId: 10, expenseDate: '2023-09-28', abono: 50, concepto: 'Pago de saldo' },
            { id: 16, purchaseId: 20, providerId: 15, expenseDate: '2024-03-15', abono: 160, concepto: 'Pago parcial' },
            { id: 17, purchaseId: 1, providerId: 13, expenseDate: '2023-08-20', abono: 300, concepto: 'Liquidación parcial' },
            { id: 18, purchaseId: 11, providerId: 17, expenseDate: '2023-07-30', abono: 220, concepto: 'Primer pago' },
            { id: 19, purchaseId: 16, providerId: 20, expenseDate: '2024-02-12', abono: 140, concepto: 'Abono de factura' },
            { id: 20, purchaseId: 18, providerId: 19, expenseDate: '2023-06-25', abono: 90, concepto: 'Pago registrado' }      
        ];        
    }

    async create(data) {
        const index = this.expenses.length - 1;
        const lastId = this.expenses[index].id;
        const newExpense = {
            id: lastId + 1,
            ...data
        }
        this.expenses.push(newExpense);
        return newExpense;
    }

    find() {
        return this.expenses;
    }

    findOne(id) {
        const expense = this.expenses.find((expense) => expense.id === id);
        if (!expense) {
            throw boom.notFound('expense not found');
        }
        if (expense.isBlocked) {
            throw boom.conflict('expense is blocked');
        }
        return expense;
    }

    update(id, changes) {
        const index = this.expenses.findIndex((expense) => expense.id === id);
        if (index === -1) {
            throw boom.notFound('expense not found');
        }
        const expense = this.expenses[index];

        this.expenses[index] = {
            ...expense,
            ...changes
        };
        return this.expenses[index];
    }

    delete(id) {
        const index = this.expenses.findIndex((expense) => expense.id === id);
        if (index === -1) {
            throw boom.notFound('expense not found');
        }
        this.expenses.splice(index, 1);
        return { id };
    }
}

module.exports = ReceiptsService;
