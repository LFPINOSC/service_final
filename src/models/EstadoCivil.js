import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const EstadoCivil = sequelize.define("estadoCivil",{
    secuencial:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
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
export default EstadoCivil;