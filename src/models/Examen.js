import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Examen = sequelize.define('Examen', {
  secuencial: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  descripcion: {
    type: DataTypes.STRING(75),
    allowNull: false,
    field: 'descripcion',
  },
  indicaciones: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'indicaciones',
  },
  costo: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    field: 'costo',
  },
  estaActivo: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1,
  }
});

export default Examen;