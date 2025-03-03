const { types } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');
const CLIENTS_TABLE = 'Clientes';

const ClientsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'Id_cliente',
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    field: 'Nombre',
    type: DataTypes.STRING,
  },
  lastname: {
    allowNull: false,
    field: 'Apellido',
    type: DataTypes.STRING,
  },
  phone: {
    field: 'Telefono',
    type: DataTypes.STRING,
  },
  municipio: {
    field: 'Municipio',
    type: DataTypes.STRING,
  },
  city: {
    field: 'Departamento',
    type: DataTypes.STRING,
  },
  country: {
    field: 'Pais',
    type: DataTypes.STRING,
  },
  address: {
    field: 'Direccion',
    type: DataTypes.STRING,
  }
};

class Clients extends Model {
  static associate(models) {
    this.hasMany(models.Orders, {
      as: 'orders',
      foreignKey: 'clientId'
    });
    this.hasMany(models.Sales, {
      as: 'sales',
      foreignKey: 'clientId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENTS_TABLE,
      modelName: 'Clients',
      timestamps: false
    }
  }
};

module.exports = { CLIENTS_TABLE, ClientsSchema, Clients };