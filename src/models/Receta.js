import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Receta = sequelize.define('Receta', {
  secuencial: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  fecha: {
    type: DataTypes.DATEONLY, // Usar DATEONLY en lugar de STRING
    allowNull: false,
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos si los necesitas
});

export default Receta; // Exportar correctamente la entidad
