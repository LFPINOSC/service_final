import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Tratamiento = sequelize.define('Tratamiento', {
  secuencial: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  secuencialAtencion: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  estaActivo: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1,
  },
});

export default Tratamiento;