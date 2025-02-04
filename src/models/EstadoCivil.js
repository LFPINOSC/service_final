import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Persona = sequelize.define("estadoCivil",{
    secuencial:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },
    nombre: {
        type: DataTypes.ENUM('soltero', 'casado', 'divirciado'),
        allowNull: false,
    },

});