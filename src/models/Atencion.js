import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Turno from './Turno.js';

const Atencion = sequelize.define('Atencion', {
  secuencial: {
    type: DataTypes.INTERGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  Fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Diagnostico: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  Turno: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  estaActivo: {
    type: DataTypes.BOOLEAN, 
    allowNull: false,
    defaultValue: true,
  },
});

export default Atencion;
