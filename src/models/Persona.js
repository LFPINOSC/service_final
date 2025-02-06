import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import EstadoCivil from './EstadoCivil.js';
import Sexo from './Sexo.js';

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
    estaActivo: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        defaultValue: 1,
      },
    secuencialEstadoCivil:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:EstadoCivil,
            key:'secuencial'
        }
    },
    secuencialSexo:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Sexo,
            key:'secuencial'
        }
    },
    
});
export default Persona;