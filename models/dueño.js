'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dueño extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dueño.init({
    nombre: DataTypes.STRING,
    apellido1: DataTypes.STRING,
    apellido2: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dueño',
  });
  return Dueño;
};