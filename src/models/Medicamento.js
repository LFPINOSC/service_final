import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Medicamento = sequelize.define('Medicamento', {
  secuencial: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'nombre',
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  compuesto: {
    type: DataTypes.STRING(200),
    allowNull: false,
    field: 'compuesto',
  },
  indicaciones: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'indicaciones',
  },
  estaActivo: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1,
  }
});

export default Medicamento;