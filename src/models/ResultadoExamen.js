import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import OrdendeExamen from './OrdedeExamen.js';

const ResultadoExamen = sequelize.define('ResultadoExamen', {
    secuencial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },

    resultado: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'resultado',
    },
    fecha: {
        type: DataTypes.DATA,
        allowNull: false,
    },
    observaciones: {
        type: DataTypes.STRING(40),
        allowNull: false,
        field: 'observaciones',
    },
    estaActivo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
    },
    secuencialOrdedeExamen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:OrdendeExamen,
            key:'secuencial'
        }
    },
});

export default ResultadoExamen;