// models/medicamento.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Medicamento = sequelize.define('Medicamento', {
  secuencial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  composicion: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  costo: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  estaActivo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

// models/receta.js
const Receta = sequelize.define('Receta', {
  secuencial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  cedulaPersona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cedulaMedico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secuencialAtencion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estaActivo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

// models/recetaMedicamentos.js
const RecetaMedicamentos = sequelize.define('RecetaMedicamentos', {
  secuencial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  indicaciones: {
    type: DataTypes.STRING,
  },
  dosis: {
    type: DataTypes.STRING,
  },
  secuencialReceta: {
    type: DataTypes.INTEGER,
    references: {
      model: Receta,
      key: 'secuencial'
    }
  },
  secuencialMedicamento: {
    type: DataTypes.INTEGER,
    references: {
      model: Medicamento,
      key: 'secuencial'
    }
  },
  estaActivo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

// Relaciones
Receta.belongsToMany(Medicamento, { 
  through: RecetaMedicamentos,
  foreignKey: 'secuencialReceta'
});

Medicamento.belongsToMany(Receta, { 
  through: RecetaMedicamentos,
  foreignKey: 'secuencialMedicamento'
});

export { Medicamento, Receta, RecetaMedicamentos };