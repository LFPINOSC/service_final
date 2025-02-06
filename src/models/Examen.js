import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Examen = sequelize.define('Examen', {
  secuencial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'nombre',
  },
  indicaciones: {
    type: DataTypes.STRING(40),
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