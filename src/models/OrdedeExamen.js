import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Examen from './Examen.js';
import Persona from './Persona.js';
import Medico from './Medico.js';
import Atencion from './Atencion.js';

const OrdendeExamen = sequelize.define('OrdendeExamen', {
    secuencial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    secuencialAtencion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Atencion,
            key:'secuencial'
        }
    },
    secuencialExamen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Examen,
            key:'secuencial'
        }
    },
    cedulaPersona:{
        type: DataTypes.SRING(10),
        allowNull: false,
        references:{
            model:Persona,
            key:'cedula'
        }
    },
    cedulaMedico:{
        type: DataTypes.STRING(10),
        allowNull: false,
        references:{
            model:Medico,
            key:'cedula'
        }
    },
});


export default OrdendeExamen;