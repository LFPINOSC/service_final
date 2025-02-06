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
        references: {
            model: Medico,
            key: 'cedula'
        }
    },
    secuencialConsultorio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Consultorio,
            key: 'secuencial'
        }
    }
});

Turno.belongsTo(Consultorio, { foreignKey: 'secuencialConsultorio', as: 'consultorio' });
Turno.belongsTo(Persona, { foreignKey: 'cedulaPersona', as: 'paciente' });
Turno.belongsTo(Medico, { foreignKey: 'cedulaMedico', as: 'medico' });

Consultorio.hasMany(Turno, { foreignKey: 'secuencialConsultorio', as: 'turnos' });
Persona.hasMany(Turno, { foreignKey: 'cedulaPersona', as: 'turnos' });
Medico.hasMany(Turno, { foreignKey: 'cedulaMedico', as: 'turnos' });

export default Turno;
