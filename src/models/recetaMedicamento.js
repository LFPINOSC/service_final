import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const RecetaMedicamentos = sequelize.define('RecetaMedicamentos', {
  secuencial: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  secuencialMedicamento: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'Medicamento',
      key: 'secuencial'
    }
  },
  secuencialReceta: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'Receta',
      key: 'secuencial'
    }
  },
  estaActivo: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1,
  }
}, {
  tableName: 'recetamedicamentos',
  timestamps: true
});

export default RecetaMedicamentos;