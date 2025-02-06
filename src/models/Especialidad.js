import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
const Especialidad=sequelize.define("especialidad",{
    secuencial:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    estaActivo: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        defaultValue: 1,
      },
    
});
export default Especialidad;