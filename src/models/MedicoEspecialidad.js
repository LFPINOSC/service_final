import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Medico from './Medico.js';
import Especialidad from './Especialidad.js';

const MedicoEspecialidad=sequelize.define("medicoespecialidad",{
    secuencial:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },
    cedulamedico:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Medico,
            key:'cedula'
        }
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
export default MedicoEspecialidad;