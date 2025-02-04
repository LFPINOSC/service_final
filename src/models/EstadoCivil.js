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
        type: DataTypes.ENUM('soltero', 'casado', 'divirciado'),
        allowNull: false,
    },
    estaActivo: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        defaultValue: 1,
      },

});
export default EstadoCivil;