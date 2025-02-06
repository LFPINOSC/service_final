import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Especialidad from './Especialidad.js';

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
    },
    estaActivo: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        defaultValue: 1,
    },
    especialidadsecuencial:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Especialidad,
            key:'secuencial'
        }
    }
});

export default Medico;
