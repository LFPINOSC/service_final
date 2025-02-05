import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
const Turno=sequelize.define("turno",{
    secuencial:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    fecha:{
        type:DataTypes.DATE,
        allowNull:false
    },
    hora:{
        type:DataTypes.TIME,
        allowNull:false
    },
    estado:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    estaActivo: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        defaultValue: 1,
      },
});
export default Turno;