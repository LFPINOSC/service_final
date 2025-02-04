import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Sexo = sequelize.define("sexo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

});

export default Sexo;
