import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Medico = sequelize.define("medico", {
    cedula: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

export default Medico;
