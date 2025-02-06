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
  estaActivo: {
    type: DataTypes.BOOLEAN, 
    allowNull: false,
    defaultValue: true,
  },
  secuencialTurno: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Turno,  
      key: 'secuencial', 
    },
    onUpdate: 'onUpdate',
    onDelete: 'onDelete',
  },
});

Atencion.belongsTo(Turno, { foreignKey: 'secuencialTurno', as: 'turno' });
Turno.hasMany(Atencion, { foreignKey: 'secuencialTurno', as: 'atenciones' });


export default Atencion;
