import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Receta = sequelize.define('Receta', {
  secuencial: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  cedulaMedico: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Medico',
      key: 'cedula'
    }
  },
  cedulaPersona: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Persona',
      key: 'cedula'
    }
  },
  secuencialAtencion: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'Atencion',
      key: 'secuencial'
    }
  },
  estaActivo: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1,
  }
}, {
  tableName: 'recetas',
  timestamps: true
});

export default Receta;