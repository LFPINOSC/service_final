import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Persona = sequelize.define("persona",{
    cedula:{
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
    },
    nombre:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    apellido:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    direccion:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telefono:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    correo:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    
});
export default Persona;