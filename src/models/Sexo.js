import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Sexo = sequelize.define("sexo", {
    secuencial: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    estaActivo: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        defaultValue: 1,
    },

});

export default Sexo;
