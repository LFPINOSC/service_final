import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Consultorio from './Consultorio.js';
import Persona from './Persona.js';
import Medico from './Medico.js';

const Turno = sequelize.define("turno", {
    secuencial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    estaActivo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    cedulaPersona: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
            model: Persona,
            key: 'cedula'
        }
    },
    cedulaMedico: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 1,
      },
});
export default Turno;
